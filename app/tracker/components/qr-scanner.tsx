"use client";

import {
    useState,
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
    useCallback,
} from "react";
import QrScanner from "@lib/qr-main.js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Camera, QrCode, Clock, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { initDB, addItem, getAllItems } from "@/utils/indexedDB";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

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
    const [isTimeIn, setIsTimeIn] = useState<boolean>(true);
    const [isMounted, setIsMounted] = useState(false);
    const [showTimeStatusDialog, setShowTimeStatusDialog] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [flashlightOn, setFlashlightOn] = useState(false);
    const [availableCameras, setAvailableCameras] = useState<MediaDeviceInfo[]>([]);
    const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [qrScanner, setQrScanner] = useState<QrScanner | null>(null);
    const [isFocusing, setIsFocusing] = useState(false);

    const toggleFlashlight = () => {
        if (!isScanning) {
            toast.error("Please turn on the camera first.");
            return;
        }

        setFlashlightOn(!flashlightOn);
        if (qrScanner) {
            qrScanner.hasFlash().then((hasFlash) => {
                if (hasFlash) {
                    qrScanner.toggleFlash().then(() => {
                        setFlashlightOn(qrScanner.isFlashOn());
                    }).catch((error) => {
                        console.error('Failed to toggle flashlight:', error);
                        if (error.name === 'OverconstrainedError') {
                            console.warn('Flashlight toggle is not supported by this device.');
                        }
                    });
                } else {
                    console.warn('Flashlight is not supported by this device.');
                    setFlashlightOn(false);
                }
            }).catch((error) => {
                console.error('Failed to check flashlight availability:', error);
            });
        }
    };

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuClose = () => {
        setShowMenu(false);
    };

    const updateAvailableCameras = async () => {
        try {
            const cameras = await QrScanner.listCameras(true);
            setAvailableCameras(cameras.map(camera => ({
                deviceId: camera.id,
                groupId: '',
                kind: 'videoinput',
                label: camera.label,
                toJSON: () => ({})
            })));
            const backCamera = cameras.find(camera => camera.label.toLowerCase().includes('back'));
            if (backCamera) {
                setSelectedCamera(backCamera.id);
            } else if (cameras.length > 0) {
                setSelectedCamera(cameras[0].id);
            }
        } catch (error) {
            console.error('Failed to list cameras:', error);
        }
    };

    useEffect(() => {
        updateAvailableCameras();
    }, []);

    useEffect(() => {
        if (selectedCamera && qrScanner) {
            qrScanner.setCamera(selectedCamera).then(() => {
                console.log(`Camera set to: ${selectedCamera}`);
            }).catch((error) => {
                console.error('Failed to set camera:', error);
            });
        }
    }, [selectedCamera, qrScanner]);

    const playErrorSound = useCallback(() => {
        const audio = new Audio("/error.mp3");
        audio.play().catch(console.error);
    }, []);

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
                );
            } catch (error) {
                console.error("Error loading time status from IndexedDB:", error);
                toast.error("Error loading previous Time Status.");
            } finally {
                setIsMounted(true);
            }
        };
        loadInitialState();
    }, []);

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

    useEffect(() => {
        return () => {
            if (qrScanner) {
                qrScanner.destroy();
            }
        };
    }, [qrScanner]);

    const startScanning = useCallback(async () => {
        try {
            if (!videoRef.current) return;

            const scanner = new QrScanner(
                videoRef.current,
                async (result: { data: string; cornerPoints: { x: number; y: number }[] }) => {
                    if (typeof result === "object" && result.data) {
                        console.log("QR Code detected:", result.data);
                        const storedTimeStatusArray = await getAllItems("trackerInfo");
                        const storedTimeStatus = storedTimeStatusArray.find(
                            (item) => item.id === "timeStatus",
                        )?.timeStatus;
                        onScanSuccess({ code: result.data, type: storedTimeStatus === "in" ? "in" : "out" });
                    } else {
                        playErrorSound();
                        toast.error("Error processing QR code");
                    }
                },
                {
                    highlightScanRegion: true,
                    highlightCodeOutline: true,
                    maxScansPerSecond: 1,
                }
            );
            setQrScanner(scanner);
            setIsScanning(true);
        } catch (e) {
            toast.error("Failed to start scanner. Please check camera permissions.");
            console.error("Failed to start scanner:", e);
        }
    }, [videoRef, onScanSuccess, playErrorSound]);

    const stopScanning = useCallback(() => {
        if (qrScanner) {
            qrScanner.stop();
            setIsScanning(false);
        }
    }, [qrScanner]);

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
            saveTimeStatus();
        }
    }, [isTimeIn, isMounted]);

    useImperativeHandle(ref, () => ({
        startScanning,
        stopScanning,
    }));

    const handleTimeToggle = (status: "in" | "out") => {
        setIsTimeIn(status === "in");
        setShowTimeStatusDialog(false);
        startScanning();
    };


    const showFocusFeedback = useCallback(() => {
        if (!videoRef.current) return;

        videoRef.current.classList.add('focusing'); // Add class to video for outline
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.classList.remove('focusing'); // Remove class after timeout
            }
        }, 500); // Adjust timeout for fade-out duration
    }, []);


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
                        <Badge
                            variant={isScanning ? (isTimeIn ? "default" : "secondary") : "secondary"}
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs ml-2 ${isScanning ? (isTimeIn ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500") : "bg-gray-500/10 text-gray-500"
                                }`}
                        >
                            <div className="text-center w-full">
                                {isScanning ? (isTimeIn ? "Time In Mode" : "Time Out Mode") : "Inactive Mode"}
                            </div>
                        </Badge>
                    </CardTitle>
                    <DropdownMenu open={showMenu} onOpenChange={handleMenuToggle}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-9 h-9 p-0">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Settings</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={toggleFlashlight}>
                                Flashlight: {flashlightOn ? "On" : "Off"}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Current Camera</DropdownMenuLabel>
                            <DropdownMenuItem>
                                {selectedCamera ? availableCameras.find(camera => camera.deviceId === selectedCamera)?.label : 'None'}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Available Cameras</DropdownMenuLabel>
                            {availableCameras.map((camera) => (
                                <DropdownMenuItem
                                    key={camera.deviceId}
                                    onSelect={() => setSelectedCamera(camera.deviceId)}
                                >
                                    {camera.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-lg border-2">
                        <div
                            className={`absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full border-2 border-dashed transition-opacity ${isScanning ? "opacity-0 pointer-events-none" : "opacity-100"
                                } ${isFocusing ? "bg-green-500/10" : ""}`}
                        >
                            <Camera className="h-12 w-12 text-muted-foreground mb-4" />
                            <p className="text-sm text-muted-foreground text-center px-4">
                                Tap to focus on the QR code
                            </p>
                            {isFocusing && (
                                <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                            )}
                        </div>
                        <video
                            ref={videoRef}
                            className={`video-element ${isScanning ? "opacity-100" : "opacity-0 pointer-events-none"
                                } absolute top-0 left-0 w-full h-full object-cover transition-opacity`}
                            playsInline
                        />
                        {/* REMOVED focus-feedback div */}

                        {/* Tap-to-focus functionality */}
                        {isScanning && videoRef.current && (
                            <div
                                onClick={async (event) => {
                                    const rect = videoRef.current!.getBoundingClientRect();
                                    const x = event.clientX;
                                    const y = event.clientY;
                                    const focusX = (x - rect.left) / rect.width;
                                    const focusY = (y - rect.top) / rect.height;

                                    if (qrScanner) {
                                        await qrScanner.setFocusMode('manual');
                                    }
                                    qrScanner?.setFocusAtPoint(focusX, focusY);
                                    showFocusFeedback(); // Call feedback function
                                }} className="absolute inset-0"></div>)}
                    </div>

                    <div className="flex items-center gap-4 mt-4 w-full">
                        <Button
                            onClick={() => {
                                if (!isScanning) {
                                    setShowTimeStatusDialog(true);
                                } else {
                                    stopScanning();
                                }
                            }}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300"
                            size="lg"
                            variant={isScanning ? "secondary" : "default"}
                            disabled={!isMounted || hasCamera !== true}
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
                </div>
            </CardContent>

            <Dialog open={showTimeStatusDialog} onOpenChange={setShowTimeStatusDialog}>
                <DialogContent className="max-w-sm w-full rounded-lg">
                    <DialogHeader className="w-full text-center">
                        <DialogTitle>Select Time Status</DialogTitle>
                        <DialogDescription>
                            Choose whether you are marking time in or time out.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="w-full">
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                            <Button
                                onClick={() => handleTimeToggle("in")}
                                className="flex-1 w-full max-w-[200px] bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25 transition-all duration-300 rounded-lg py-4"
                                size="lg"
                            >
                                Time In
                            </Button>
                            <Button
                                onClick={() => handleTimeToggle("out")}
                                className="flex-1 w-full max-w-[200px] bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25 transition-all duration-300 rounded-lg py-4"
                                size="lg"
                            >
                                Time Out
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Card>
    );
});

QRScanner.displayName = "QRScanner";

export default QRScanner;