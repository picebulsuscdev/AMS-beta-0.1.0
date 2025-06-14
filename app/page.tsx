"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { initDB, addItem, getAllItems } from "@/utils/indexedDB";
import { Badge } from "@/components/ui/badge"; // Import the Badge component
import { APP_VERSION } from "@/lib/constants"; // Import APP_VERSION
import BrowserReminder from "@/components/ui/browser-reminder";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    section: "",
    event: "",
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const checkTrackerInfo = async () => {
      try {
        await initDB();
        const trackerInfoArray = await getAllItems("trackerInfo");
        const trackerInfo = trackerInfoArray.find(
          (item) => item.id === "trackerInfo",
        );

        if (trackerInfo) {
          toast.success(
            "You are currently logged in. Redirecting to dashboard...",
          );
          router.push("/tracker");
          return;
        }
      } catch (error) {
        console.error("Error checking tracker info:", error);
        toast.error("Failed to get previous session data.");
      }
    };

    checkTrackerInfo();
  }, [isClient, router]);

  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d[A-Za-z]$/.test(value)) {
      setFormData({ ...formData, section: value.toUpperCase() });
    } else if (value.length <= 2) {
      setFormData({ ...formData, section: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      if (formData.name && formData.section.length === 2 && formData.event) {
        await initDB();
        await addItem("trackerInfo", {
          id: "trackerInfo",
          trackerName: formData.name,
          trackerSection: `BSCE - ${formData.section.toUpperCase()}`,
          eventName: formData.event,
        });
  
        toast.success("Welcome! You can now start scanning attendance.");
        router.push("/tracker");
      } else {
        toast.error("Please fill in all fields correctly.");
      }
    } catch (error) {
      console.error("Error storing tracker data:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <BrowserReminder />
      <div className="min-h-screen bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-t-4 border-t-blue-500 animate-in fade-in zoom-in duration-300">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-primary">PICE BulSU-SC</h1>
              <h2 className="text-lg text-muted-foreground">
                Attendance Monitoring System
              </h2>
              <Badge
                variant="outline"
                className="text-yellow-500 border-yellow-500 mt-1 inline-block"
              >
                {APP_VERSION}
              </Badge>
            </div>

            <Alert className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Important Note</AlertTitle>
              <AlertDescription>
                All session data is stored locally in your device. Please avoid
                clearing your browser cache while using the system to prevent data
                loss.
              </AlertDescription>
            </Alert>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Name of Tracker</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="section">Section</Label>
                <Input
                  id="section"
                  value={formData.section}
                  onChange={handleSectionChange}
                  placeholder="1A, 2B, 3C"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event">Event Name</Label>
                <Input
                  id="event"
                  placeholder="Enter event name"
                  value={formData.event}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      event: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300"
                size="lg"
              >
                Start Tracking
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
