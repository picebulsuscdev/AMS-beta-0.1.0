// src/utils/auth.ts
import { useState, useEffect } from "react";

export function isAuthenticated() {
  return sessionStorage.getItem("userRole") === "admin";
}

export function useCheckAdminAuthentication() {
  const [authStatus, setAuthStatus] = useState<
    "authenticated" | "unauthenticated" | "pending"
  >("pending");

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthStatus("authenticated");
    } else {
      setAuthStatus("unauthenticated");
    }
  }, []);

  return authStatus;
}

export function clearAdminSession() {
  sessionStorage.removeItem("userRole");
  sessionStorage.removeItem("userName");
}
