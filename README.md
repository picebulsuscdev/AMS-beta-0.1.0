# PICE BulSU-SC Attendance Monitoring System (AMS)

## Overview

This project is a web-based Attendance Monitoring System (AMS) designed for the Philippine Institute of Civil Engineers (PICE) - Bulacan State University Student Chapter (BulSU-SC). It allows for efficient tracking of student attendance at organization events using QR code scanning and provides administrators with tools to manage student data and consolidate attendance records.

## Key Features

-   **QR Code Scanning:** Allows officers to quickly register student attendance using QR codes.
-   **Time Tracking:** Automatically records the time-in and time-out of students.
-   **Local Data Storage:** Utilizes IndexedDB to store session data locally on the device, ensuring data persistence.
-   **Admin Dashboard:** Provides tools for administrators to:
    -   Generate QR codes for a batch of students.
    -   Consolidate attendance logs from various sources.
    -   View event overviews and student lists.
    -   Download attendance data as CSV files.
-   **Client-Side Data Processing**: Data from QR code scans and CSV files are processed on the client-side, making the system more responsive and efficient.
-   **Server Actions:** Some operations like creating events are handled by server actions.
-   **Edge Runtime**: The application is configured to run server-side logic with the Edge runtime, optimized for deployments on platforms like Cloudflare Pages.

## Technical Details

-   **Framework:** Built using Next.js with the app directory for routing and component structure.
-   **State Management:** Utilizes React's built-in state management with hooks like useState and useReducer.
-   **Database:**  Uses IndexedDB for local data storage on the device.
-   **UI Components:** Utilizes Tailwind CSS with Shadcn UI components for consistent and responsive design.
-   **QR Code Generation & Scanning:** Utilizes libraries like qrcode and qr-scanner for generating and scanning QR codes.
-   **Data Parsing:** Employs react-papaparse for CSV parsing and CryptoJS for data encryption.
-   **Deployment:** Designed to be deployed on Cloudflare Pages with Edge runtime support for server-side actions.# AMS-beta-0.1.0
# AMS-beta-0.1.0
