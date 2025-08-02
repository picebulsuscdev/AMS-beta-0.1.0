import { Header } from "../components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChangelogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <main className="flex-1 p-8 overflow-y-auto docs-content">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Page Header */}
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Changelog</h1>
            </div>

            {/* v0.3.1 – Housekeeping Update - THIS IS THE NEW, STRATEGIC ENTRY */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  August 2, 2025 – v0.3.1 – Housekeeping Update
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Improvements & Fixes</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    <strong>Performance Tuning:</strong> Optimized core components for faster load
                    times and smoother performance ahead of the new academic year.
                  </li>
                  <li>
                    <strong>Documentation Links:</strong> Added links to the License, Terms, and
                    Changelog in the footer for easier access to important information.
                  </li>
                  <li>
                    <strong>Code Maintenance:</strong> General code refactoring and cleanup for
                    better long-term stability and security.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* v0.3.0 – Beta Release */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  June 14, 2025 – v0.3.0 – Beta Release
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">New Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Introduced the <strong>Changelog</strong> page to track release updates.</li>
                  <li>Introduced the <strong>PDF</strong> format when exporting records.</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">Fixes</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Resolved inconsistent <strong>"INVALID DATE"</strong> issue in records.</li>
                </ul>
              </CardContent>
            </Card>

            {/* v0.2.0 – Experimental Release */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  February 12, 2025 – v0.2.0 – Experimental Release
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Improvements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Refreshed <strong>UI</strong> with an updated color scheme for a better experience.</li>
                  <li>Added <strong>Camera Focus Toggle</strong>: Auto-focus is now default. Tap to enable manual focus for scanning near or far QR codes.</li>
                  <li>Introduced browser compatibility warnings to reduce issues on unsupported platforms.</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">Bug Fixes</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Fixed duplicate attendance entries. Records now merge correctly.</li>
                  <li>Resolved inconsistent <strong>"INVALID DATE"</strong> issue in records.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Previous versions... */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  January 25, 2025 – v0.1.1 – Beta Trial
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Initial trial version released to officers for real-use testing.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  January 1, 2025 – v0.1.0 – Developer Demo
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  First working version demoed to executive officers for planning and feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  December 12, 2024 – v0.0.0 – Day Zero
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Official start of AMS development.
                </p>
              </CardContent>
            </Card>

          </div>
        </main>
      </div>
    </div>
  );
}