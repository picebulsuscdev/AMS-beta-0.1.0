"use client";

import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";
import QrScanner from "qr-scanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Camera, QrCode, Clock, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { initDB, addItem, getAllItems } from "@/utils/indexedDB";

interface QRScannerProps {
  eventId: string;
  onScanSuccess: (data: { code: string; type: "in" | "out" }) => void;
}

const QRScanner = forwardRef<
  {
    startScanning: () => void;
    stopScanning: () => void;
  },
  QRScannerProps
>(({ eventId, onScanSuccess }, ref) => {
  const [isScanning, setIsScanning] = useState(false);
  const [hasCamera, setHasCamera] = useState<true | false | null>(null);
  const [isTimeIn, setIsTimeIn] = useState<boolean>(true); // Default to true, loaded from indexedDB
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [qrScanner, setQrScanner] = useState<QrScanner | null>(null);

  // Handle audio initialization
  const playErrorSound = useCallback(() => {
    const audio = new Audio("/error.mp3");
    audio.play().catch(console.error);
  }, []);

  // Load saved states from IndexedDB and set initial state
  useEffect(() => {
    const loadInitialState = async () => {
      try {
        await initDB();
        const storedTimeStatusArray = await getAllItems("trackerInfo");
        const storedTimeStatus = storedTimeStatusArray.find(
          (item) => item.id === "timeStatus",
        )?.timeStatus;
        setIsTimeIn(
          storedTimeStatus === "in" || storedTimeStatus === undefined,
        ); // Use saved status or default to 'in'
      } catch (error) {
        console.error("Error loading time status from IndexedDB:", error);
        toast.error("Error loading previous Time Status.");
      } finally {
        setIsMounted(true);
      }
    };
    loadInitialState();
  }, []);

  // Check for camera on mount
  useEffect(() => {
    const checkCamera = async () => {
      try {
        const cameraStatus = await QrScanner.hasCamera();
        setHasCamera(cameraStatus);
      } catch (error) {
        console.error("Error checking for camera:", error);
        setHasCamera(false);
      }
    };

    checkCamera();
  }, []);

  // Initialize QrScanner instance when the component mounts and the video is available
  useEffect(() => {
    return () => {
      if (qrScanner) {
        qrScanner.destroy();
      }
    };
  }, [qrScanner]);

  // Start scanning
  const startScanning = useCallback(async () => {
    try {
      if (!videoRef.current) return;

      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          if (typeof result === "object" && result.data) {
            console.log("QR Code detected:", result.data);
            onScanSuccess({ code: result.data, type: isTimeIn ? "in" : "out" });
          } else {
            playErrorSound();
            toast.error("Error processing QR code");
          }
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
          maxScansPerSecond: 1,
        },
      );
      setQrScanner(scanner);
      setIsScanning(true);
    } catch (e) {
      toast.error("Failed to start scanner. Please check camera permissions.");
      console.error("Failed to start scanner:", e);
    }
  }, [videoRef, onScanSuccess, playErrorSound, isTimeIn]);

  // Stop scanning
  const stopScanning = useCallback(() => {
    if (qrScanner) {
      qrScanner.stop();
      setIsScanning(false);
    }
  }, [qrScanner]);

  // Handle scanning based on isScanning state
  useEffect(() => {
    if (qrScanner && isScanning && hasCamera) {
      qrScanner.start().catch((error) => {
        console.error("Failed to start scanner:", error);
        toast.error(
          "Failed to start scanner. Please check camera permissions.",
        );
        setIsScanning(false);
      });
    } else {
      qrScanner?.stop();
    }
  }, [qrScanner, isScanning, hasCamera]);

  // Handle page visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopScanning();
      } else if (isScanning) {
        startScanning();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isScanning, startScanning, stopScanning]);

  // Save states to IndexedDB
  useEffect(() => {
    const saveTimeStatus = async () => {
      try {
        await initDB();
        await addItem("trackerInfo", {
          id: "timeStatus",
          timeStatus: isTimeIn ? "in" : "out",
        });
      } catch (error) {
        console.error("Error saving time status to IndexedDB:", error);
        toast.error("Error saving Time Status.");
      }
    };

    if (isMounted) {
      // Only save if the component is mounted
      saveTimeStatus();
    }
  }, [isTimeIn, isMounted]);

  // Expose start and stop methods via ref
  useImperativeHandle(ref, () => ({
    startScanning,
    stopScanning,
  }));

  // Toggle Time Status Logic
  const handleTimeToggle = () => {
    if (isScanning) {
      toast.info("Please stop scanning to change Time Status.");
      return;
    }
    setIsTimeIn(!isTimeIn);
  };

  if (!isMounted) {
    return null;
  }

  if (hasCamera !== true) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          {hasCamera === null ? (
            <>
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-2 text-sm text-muted-foreground">
                Checking camera availability...
              </p>
            </>
          ) : (
            <p className="text-muted-foreground">
              Please ensure you have a working camera and have granted camera
              permissions to use the QR scanner.
            </p>
          )}
        </CardContent>
      </Card>
    );
  }


  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            QR Code Scanner
          </CardTitle>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <Switch
              id="time-toggle"
              checked={isTimeIn}
              onCheckedChange={handleTimeToggle}
              disabled={isScanning} // Disable the switch when scanning
            />
            <Label htmlFor="time-toggle" className="text-sm">
              {isTimeIn ? "Time In" : "Time Out"}
            </Label>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-lg border-2">
            {/* Default UI with camera icon and instruction */}
            <div
              className={`absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full border-2 border-dashed transition-opacity ${isScanning ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
              <Camera className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground text-center px-4">
                Position the QR code within the frame to scan
              </p>
            </div>

            {/* QR Scanner */}
            <video
              ref={videoRef}
              className={`${isScanning ? "opacity-100" : "opacity-0 pointer-events-none"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity`}
              playsInline
            />
          </div>

          {/* Button to start/stop scanning */}
          <div className="flex items-center gap-4 mt-4">
            <Button
              onClick={isScanning ? stopScanning : startScanning}
              className="w-full"
              variant={isScanning ? "secondary" : "default"}
              disabled={!isMounted || hasCamera !== true} // ✅ Fixed Type Check Here
            >
              {isScanning ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Stop Scanning
                </>
              ) : (
                <>
                  <Camera className="mr-2 h-4 w-4" />
                  Start Scanning
                </>
              )}
            </Button>
          </div>


          {/* Mode indicator badges */}
          <div className="flex items-center gap-2">
            <Badge variant={isScanning ? "default" : "secondary"}>
              {isScanning ? "Scanner Active" : "Scanner Inactive"}
            </Badge>
            <Badge variant={isTimeIn ? "default" : "secondary"}>
              {isTimeIn ? "Time In Mode" : "Time Out Mode"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

QRScanner.displayName = "QRScanner";

export default QRScanner;