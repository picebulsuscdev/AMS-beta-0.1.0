"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import QRScanner from "@/app/tracker/components/qr-scanner";
import AttendanceRecordTable from "@/app/tracker/components/AttendanceRecordTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Loader2 } from "lucide-react";
import { decryptHash } from "@/utils/decrypt";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  initDB,
  addItem,
  getAllItems,
  deleteDatabase,
} from "@/utils/indexedDB";
import StorageDebugger from "../components/StorageDebugger";

interface AttendanceRecord {
  id: string;
  userID: string;
  name: string;
  section: string;
  timeIn?: string;
  timeOut?: string;
}

interface ScanRecord {
  id: string;
  userID: string;
  name: string;
  section: string;
  timestamp: string;
  type: "in" | "out";
}

export default function ScannerPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [recentScans, setRecentScans] = useState<ScanRecord[]>([]);
  const [attendanceRecords, setAttendanceRecords] = useState<
    AttendanceRecord[]
  >([]);
  const [activeTab, setActiveTab] = useState("attendance");
  const [isClient, setIsClient] = useState(false);
  const [trackerName, setTrackerName] = useState<string | null>(null);
  const [trackerSection, setTrackerSection] = useState<string | null>(null);
  const [eventName, setEventName] = useState<string | null>(null);
  const qrScannerRef = useRef<{
    startScanning: () => Promise<void>;
    stopScanning: () => Promise<void>;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const playSuccessSound = useCallback(() => {
    const audio = new Audio("/success.mp3");
    audio.play().catch(console.error);
  }, []);

  const playErrorSound = useCallback(() => {
    const audio = new Audio("/error.mp3");
    audio.play().catch(console.error);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const loadData = async () => {
      setIsLoading(true);
      try {
        await initDB();

        // Load Tracker and Event details from IndexedDB
        const trackerInfoArray = await getAllItems("trackerInfo");
        const trackerInfo = trackerInfoArray.find(
          (item) => item.id === "trackerInfo",
        );

        if (!trackerInfo) {
          console.error("No tracker info found. Redirecting to /");
          toast.error(
            "No tracker info found. Redirecting to registration page.",
          );
          router.push("/");
          return;
        }

        setTrackerName(trackerInfo.trackerName);
        setTrackerSection(trackerInfo.trackerSection);
        setEventName(trackerInfo.eventName);

        // Load recent scans from IndexedDB
        const storedScans = (await getAllItems("scans")) as ScanRecord[];
        if (storedScans) {
          setRecentScans(storedScans);
        }

        // Load Attendance records from IndexedDB
        const storedAttendanceRecords = (await getAllItems(
          "attendance",
        )) as AttendanceRecord[];
        if (storedAttendanceRecords) {
          setAttendanceRecords(storedAttendanceRecords);
        }
      } catch (error) {
        console.error("Error loading data from IndexedDB:", error);
        toast.error("Error loading data.");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [isClient, router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    toast.loading("Signing out...", { id: "logout" });

    try {
      await deleteDatabase();
      toast.success("Successfully Signed Out", { id: "logout" });
      router.push("/");
    } catch (error) {
      console.error("Error clearing IndexedDB data:", error);
      toast.error("Error logging out", { id: "logout" });
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleScanSuccess = async (data: {
    code: string;
    type: "in" | "out";
  }) => {
    try {
      const decodedData = decryptHash(data.code);
      if (!decodedData) {
        toast.error("Invalid QR code");
        playErrorSound();
        return;
      }

      const newScan: ScanRecord = {
        id: Date.now().toString(),
        userID: decodedData.userID,
        name: decodedData.name,
        section: decodedData.section,
        timestamp: new Date().toLocaleString(),
        type: data.type,
      };

      setRecentScans((prevScans) => [newScan, ...prevScans].slice(0, 5));

      await addItem("scans", newScan);

      const attendanceId = `${decodedData.userID}-${new Date().toLocaleDateString()}`;
      const existingRecord = attendanceRecords.find(
        (record) => record.id === attendanceId,
      );

      if (existingRecord) {
        const updatedRecord = {
          ...existingRecord,
          [data.type === "in" ? "timeIn" : "timeOut"]: newScan.timestamp,
        };

        setAttendanceRecords((prevRecords) =>
          prevRecords.map((record) =>
            record.id === attendanceId ? updatedRecord : record,
          ),
        );
        await addItem("attendance", updatedRecord);
      } else {
        const newRecord: AttendanceRecord = {
          id: attendanceId,
          userID: decodedData.userID,
          name: decodedData.name,
          section: decodedData.section,
          [data.type === "in" ? "timeIn" : "timeOut"]: newScan.timestamp,
        };

        setAttendanceRecords((prevRecords) => [...prevRecords, newRecord]);
        await addItem("attendance", newRecord);
      }

      playSuccessSound();
      toast.success(`Successfully scanned: ${decodedData.name}`);
    } catch (error) {
      console.error("Error processing QR code:", error);
      toast.error("Error processing QR code");
      playErrorSound();
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    if (tab === "attendance" && qrScannerRef.current) {
      qrScannerRef.current.startScanning();
    } else if (tab !== "attendance" && qrScannerRef.current) {
      qrScannerRef.current.stopScanning();
    }
  };

  useEffect(() => {
    if (activeTab === "attendance" && qrScannerRef.current) {
      qrScannerRef.current.startScanning();
    } else if (activeTab !== "attendance" && qrScannerRef.current) {
      qrScannerRef.current.stopScanning();
    }
  }, [activeTab, qrScannerRef]);

  if (!isClient || !trackerName || !trackerSection || !eventName || isLoading) {
    return null;
  }

  const showStorageDebugger = pathname === "/tracker";

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{eventName}</h1>
          <p className="text-muted-foreground">Tracker: {trackerName}</p>
          <p className="text-muted-foreground">Section: {trackerSection}</p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowLogoutDialog(true)}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Signing Out...
            </>
          ) : (
            <>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="attendance" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="attendance">Take Attendance</TabsTrigger>
          <TabsTrigger value="records">Attendance Records</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <QRScanner
                ref={qrScannerRef}
                eventId="current-event"
                onScanSuccess={handleScanSuccess}
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Scans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentScans.map((scan) => (
                    <div
                      key={scan.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{scan.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {scan.section}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                            scan.type === "in"
                              ? "bg-green-500/10 text-green-500"
                              : "bg-blue-500/10 text-blue-500"
                          }`}
                        >
                          Time {scan.type === "in" ? "In" : "Out"}
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          {scan.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                  {recentScans.length === 0 && (
                    <div className="text-center text-muted-foreground">
                      No recent scans
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="records">
          <AttendanceRecordTable attendanceRecords={attendanceRecords} />
        </TabsContent>
      </Tabs>

      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to log out?
            </AlertDialogTitle>
            <AlertDialogDescription>
              You will be logged out of this session.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction onClick={handleLogout}>Log out</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
      {showStorageDebugger && <StorageDebugger />}
    </div>
  );
}