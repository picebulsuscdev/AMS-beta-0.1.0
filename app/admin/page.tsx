// app/admin/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useCheckAdminAuthentication } from "@/utils/auth";
import { APP_VERSION } from "@/lib/constants"; // Import APP_VERSION

export default function AdminLoginPage() {
  const authStatus = useCheckAdminAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === "authenticated") {
      toast.success("Already logged in. Redirecting to dashboard.");
      router.push("/admin/dashboard");
    }
  }, [authStatus, router]);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError(null); // Clear any previous error messages

    try {
      const response = await fetch(
        "https://admin.picebsc-dev.workers.dev/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        },
      );

      const data = await response.json();

      if (response.ok && data.success) {
        // Successful login
        sessionStorage.setItem("userRole", "admin");
        sessionStorage.setItem("userName", "Administrator");
        toast.success("Login successful");
        router.push("/admin/dashboard");
      } else {
        // Invalid credentials
        setLoginError(data.message || "Invalid credentials. Please try again.");
        toast.error(data.message || "Invalid credentials");
      }
    } catch (error) {
      setLoginError("An unexpected error occurred. Please try again later.");
      toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

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
              {APP_VERSION}
            </Badge>
          </div>

          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important Note</AlertTitle>
            <AlertDescription>
              This page is exclusively for the PICE BulSU-SC Executive Officer
              and App Developer. Unauthorized access is prohibited.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                required
              />
            </div>
            {loginError && (
              <p className="text-sm text-red-500 mt-2 text-center">
                {loginError}
              </p>
            )}
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging In
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-4 w-4" /> Login
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
