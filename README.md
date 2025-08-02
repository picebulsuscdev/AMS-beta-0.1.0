# PICE BulSU-SC Attendance Monitoring System (AMS)

## Overview

This project is a web-based **Attendance Monitoring System (AMS)** designed for the **Philippine Institute of Civil Engineers – Bulacan State University Student Chapter (PICE BulSU-SC)**. It enables officers to efficiently log student attendance during events using **QR code scanning** and provides administrative tools to manage and export attendance data.

---

## 🚀 Key Features

- **QR Code Scanning**: Scan student QR IDs for fast and secure check-in/out.
- **Time Tracking**: Automatically records time-in and time-out.
- **Local Data Storage**: Uses IndexedDB to store logs offline per device.
- **Admin Dashboard**:
  - Generate QR codes for batches of students
  - Consolidate logs from multiple sources
  - View session data and download CSVs
- **Client-Side Processing**: Fast and responsive with no full server dependency.
- **Server Actions (Optional)**: Some operations (like creating events) can use Edge runtime.
- **Edge Runtime Compatible**: Optimized for Cloudflare Pages deployments.

---

## ⚙️ Technical Stack

- **Framework**: Next.js (App directory structure)
- **Styling/UI**: Tailwind CSS + Shadcn UI
- **State Management**: React Hooks (`useState`, `useReducer`)
- **QR Handling**: `qr-scanner`, `qrcode`
- **CSV Parsing**: `react-papaparse`
- **Encryption**: `crypto-js`
- **Storage**: IndexedDB
- **Deployment**: Cloudflare Pages (`Edge runtime` used where applicable)

---

## 🛡️ License & Ownership

This project was **independently developed and maintained** by **Edd Rich B. Marcos** in early 2025 and provided to the PICE BulSU-SC officers for voluntary use during organizational events.

> **⚠️ This software is not open-source. It is not owned or maintained by PICE BulSU-SC.**  
> No part of the codebase, design, or deployment may be copied, modified, redistributed, or hosted without **express written permission from the author**.

**All rights reserved.**  
For licensing inquiries or formal acquisition discussions, please contact: **drichmarcos24@gmail.com**

---

## 📛 Domain Disclaimer

The deployment at `picebulsusc.pages.dev` was created for **ease of access only** and was **approved by the 2024–2025 term president of PICE BulSU-SC**.  
This domain **does not imply organizational ownership or control** of the system. Hosting remains fully under the author’s Cloudflare account.

---

## 👤 Credits

- **Lead Developer**: Edd Rich B. Marcos 
- Built with passion to support student-led innovation and streamline attendance.

