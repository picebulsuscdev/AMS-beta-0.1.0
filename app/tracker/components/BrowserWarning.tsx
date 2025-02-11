"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Link } from "lucide-react";
import { toast } from "sonner";

export default function BrowserWarning() {
  const [isIntegratedBrowser, setIsIntegratedBrowser] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIntegrated = userAgent.includes("fbav") || userAgent.includes("messenger");
    setIsIntegratedBrowser(isIntegrated);
  }, []);

  if (!isIntegratedBrowser) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://picebulsusc.pages.dev/');
    toast.success('Link copied to clipboard!');
  };

  const handleContinue = () => {
    setShowContinue(true);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="max-w-md w-full border-t-4 border-t-red-500 animate-in fade-in zoom-in duration-300">
        <CardHeader className="space-y-4">
          <div className="mx-auto bg-red-500/10 p-3 rounded-full">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">AMS Warning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-center text-muted-foreground">
              It appears you are using an integrated browser like Messenger or Facebook. For the best experience, please use a full chromium browser like Chrome.
            </p>
            <p className="text-center text-muted-foreground">
              If you feel this is wrong, <a href="#" onClick={handleContinue} className="text-blue-500">click here</a>.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleCopyLink}
              className="min-w-[140px] bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25 transition-all duration-300"
              size="lg"
            >
              <Link className="h-4 w-4 mr-2" />
              Copy Link
            </Button>
            {showContinue && (
              <Button
                onClick={() => setIsIntegratedBrowser(false)}
                className="min-w-[140px] bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300"
                size="lg"
              >
                Continue
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}