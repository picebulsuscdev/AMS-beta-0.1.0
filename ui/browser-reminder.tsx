"use client"

import { AlertCircle, Chrome, AppleIcon as Safari, MessageSquare } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from 'sonner'

export default function BrowserReminder() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const expirationToken = localStorage.getItem('browserReminderExpiration');
    if (expirationToken) {
      const expirationDate = new Date(expirationToken);
      if (expirationDate > new Date()) {
        setIsVisible(false);
      }
    }
  }, []);

  const handleUnderstandClick = () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    localStorage.setItem('browserReminderExpiration', expirationDate.toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="max-w-md w-full border-t-4 border-t-blue-500 animate-in fade-in zoom-in duration-300">
        <CardHeader className="space-y-4">
          <div className="mx-auto bg-blue-500/10 p-3 rounded-full">
            <AlertCircle className="h-8 w-8 text-blue-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Browser Compatibility Notice</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-muted-foreground">
              <Chrome className="h-5 w-5 mt-1 text-green-500" />
              <div>
                <p className="font-medium text-foreground">Recommended Browsers</p>
                <p className="text-sm">Please use Chrome or any Chromium-based browser for the best experience</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 mt-1 text-yellow-500" />
              <div>
                <p className="font-medium text-yellow-500">Avoid Temporary Browsers</p>
                <p className="text-sm text-muted-foreground">
                  Do not use embedded browsers like Messenger's Integrated Browser
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <img src="/web/warning.png" alt="Warning" className="w-full h-auto" />
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-3 text-sm text-muted-foreground">
            <p className="text-center">
              For optimal performance and full feature access, please ensure you're using a supported browser
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center w-full space-x-4">
          <Button
            onClick={handleUnderstandClick}
            className="min-w-[140px] bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300"
            size="lg"
          >
            I Understand
          </Button>
          <Button
            onClick={() => {
              navigator.clipboard.writeText('https://picebulsusc.pages.dev/');
              toast.success('Link copied to clipboard!');
            }}
            className="min-w-[140px] bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25 transition-all duration-300"
            size="lg"
          >
            Copy Link
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}