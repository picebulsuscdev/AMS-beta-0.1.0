import { Header } from "../components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link"; // Make sure to import Link

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <main className="flex-1 p-8 overflow-y-auto docs-content">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Use</h1>
              <p className="text-muted-foreground">
                Last updated: August 02, 2025. By using the AMS, you agree to these terms.
              </p>
            </div>

            {/* Section 1: Agreement to Terms */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700">
                <p>
                  This Attendance Monitoring System (AMS) is provided solely for use by
                  authorized officers of the Philippine Institute of Civil Engineers –
                  Bulacan State University Student Chapter (PICE BulSU-SC). Your access to and
                  use of the application is conditioned on your acceptance of and compliance with
                  these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Section 2: How the System Works */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  2. System Operation & Data Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 space-y-4">
                <p>
                  The AMS is a cloud-free application. It does not require user accounts, and
                  it <strong>does not</strong> transmit or store personal data on any external
                  server.
                </p>
                <p>
                  All attendance data you process is stored locally within your device's
                  browser storage (IndexedDB). It is your responsibility to safeguard this
                  data. Clearing your browser cache or history will result in permanent data
                  loss.
                </p>
              </CardContent>
            </Card>

            {/* Section 3: User Responsibilities */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  3. User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 space-y-2">
                <p>As a user, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Use the AMS only for official PICE BulSU-SC events.</li>
                  <li>
                    Handle exported data (e.g., CSV files) securely and in accordance with
                    the organization's data privacy practices.
                  </li>
                  <li>Not share access with unauthorized individuals.</li>
                  <li>Report any bugs or issues to the developer promptly.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 4: Disclaimer of Warranty */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  4. Disclaimer & Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700">
                <p>
                  The application is provided on an "AS IS" and "AS AVAILABLE" basis. The
                  developer makes no warranties regarding its reliability or suitability for
                  any purpose and is not liable for any data loss, damages, or issues
                  arising from its use.
                </p>
              </CardContent>
            </Card>

            {/* Section 5: Governing License */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  5. Governing License
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700">
                <p>
                  These Terms are a user-friendly summary of the binding legal agreement.
                  Your use of this application is fully governed by the official{" "}
                  <Link href="/license" className="text-blue-600 hover:underline">
                    License Agreement
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}