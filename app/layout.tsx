// app/layout.tsx
import React from "react";
import { Metadata } from "next";
import "../styles/globals.css"; // Import your global CSS here
import { Toaster } from "sonner"; // Import the Toaster component

export const metadata: Metadata = {
  title: "PICE BulSU-SC AMS",
  description: "Attendance Management System for PICE",
  openGraph: {
    title: "PICE BulSU-SC Attendance Monitoring System",
    description: "Track student attendance efficiently with our PICE BulSU-SC AMS.",
    images: ["/web/ogt.png"], // Path to your preview image
    siteName: "PICE BulSU-SC AMS",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/web/16.ico" sizes="16x16" />
        <link rel="icon" href="/web/32.ico" sizes="32x32" />
        <link rel="icon" href="/web/96.ico" sizes="96x96" />
      </head>
      <body>
        {/* This is where the main content of the page will be injected */}
        {children}
        <Toaster position="bottom-right" /> {/* Render the Toaster here */}
      </body>
    </html>
  );
};

export default RootLayout;
