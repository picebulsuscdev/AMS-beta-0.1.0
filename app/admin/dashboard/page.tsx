// app/admin/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, FileSpreadsheet, Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useCheckAdminAuthentication, clearAdminSession } from "@/utils/auth";
import { toast } from "sonner";

export default function AdminDashboard() {
  const router = useRouter();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState<"qr" | "consolidate" | null>(
    null,
  );
  const authStatus = useCheckAdminAuthentication();

  useEffect(() => {
    if (authStatus === "unauthenticated") {
      toast.error("Session expired. Please login again.");
      router.push("/admin");
    }
  }, [authStatus, router]);

  const handleLogout = () => {
    clearAdminSession();
    toast.success("Successfully signed out");
    router.push("/admin");
  };

  const handleNavigate = async (path: string) => {
    setIsLoading(true);
    setActiveButton(path === "/admin/generate-qr" ? "qr" : "consolidate");

    await new Promise((resolve) => setTimeout(resolve, 500));

    router.push(path);
    setIsLoading(false);
    setActiveButton(null);
  };
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">PICE BulSU-SC</h1>
          <p className="text-muted-foreground">Administrator Dashboard</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card
            className={`hover:bg-gray-100 transition-colors cursor-pointer ${activeButton && activeButton !== "qr" ? "pointer-events-none bg-white" : ""}`}
            onClick={() => handleNavigate("/admin/generate-qr")}
          >
            <CardContent className="flex flex-col items-center justify-center p-12 text-center space-y-4">
              {activeButton === "qr" && isLoading ? (
                <Loader2 className="h-12 w-12 animate-spin" />
              ) : (
                <QrCode className="h-12 w-12" />
              )}
              <h2 className="text-xl font-semibold">Generate Batch QR Code</h2>
              <p className="text-sm text-muted-foreground">
                Generate QR codes for multiple students at once
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover:bg-gray-100 transition-colors cursor-pointer ${activeButton && activeButton !== "consolidate" ? "pointer-events-none bg-white" : ""}`}
            onClick={() => toast.error("This feature is outdated. You may not be able to proceed.")}
          >
            <CardContent className="flex flex-col items-center justify-center p-12 text-center space-y-4">
              {activeButton === "consolidate" && isLoading ? (
                <Loader2 className="h-12 w-12 animate-spin" />
              ) : (
                <FileSpreadsheet className="h-12 w-12" />
              )}
              <h2 className="text-xl font-semibold">
                Consolidate Attendance Logs
              </h2>
              <p className="text-sm text-muted-foreground">
                Merge and analyze multiple attendance CSV files
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25 transition-all duration-300" onClick={() => setShowLogoutDialog(true)}>
            Sign Out
          </Button>
        </div>
      </div>

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
    </div>
  );
}
