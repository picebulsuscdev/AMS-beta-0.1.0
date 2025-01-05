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

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    section: "BSCE - ",
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
    if (value.startsWith("BSCE - ")) {
      setFormData({ ...formData, section: value });
    } else {
      setFormData({ ...formData, section: "BSCE - " });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (formData.name && formData.section.length > 7 && formData.event) {
        await initDB();
        await addItem("trackerInfo", {
          id: "trackerInfo",
          trackerName: formData.name,
          trackerSection: formData.section,
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
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
              v0.1.0-beta
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
                onFocus={(e) => {
                  const len = e.target.value.length;
                  e.target.setSelectionRange(len, len);
                }}
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

            <Button type="submit" className="w-full">
              Start Tracking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
