import { Header } from "../components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LicensePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <main className="flex-1 p-8 overflow-y-auto docs-content">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">License Agreement</h1>
              <p className="text-muted-foreground">
                Terms governing the use of the Attendance Monitoring System (AMS). By using this
                application, you agree to these terms.
              </p>
            </div>

            {/* Ownership & License Grant */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  1. Ownership & License Grant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 space-y-4">
                <p>
                  This Attendance Monitoring System (AMS) is the proprietary intellectual
                  property of its developer, <strong>Edd Rich B. Marcos</strong>.
                </p>
                <p>
                  The PICE BulSU-SC organization is granted a limited, non-exclusive, and
                  revocable license to use the hosted version of this application for its
                  internal, non-commercial events. The domain <strong>picebulsusc.pages.dev</strong> is
                  used for convenience and does not imply a transfer of ownership.
                </p>
              </CardContent>
            </Card>

            {/* Restrictions */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  2. Restrictions on Use
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 space-y-2">
                <p>This is not open-source software. You may <strong>NOT</strong>:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Copy, modify, or reverse-engineer the application's source code.</li>
                  <li>Redistribute, sell, rent, or sublicense the application.</li>
                  <li>Remove or obscure any copyright notices.</li>
                  <li>Claim the application as the organization's property.</li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Availability & Termination */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  3. Maintenance & Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 space-y-4">
                <p>
                  This application is provided "AS IS" and is maintained on a voluntary basis.
                  The author is not liable for any data loss or system misuse.
                </p>
                <p>
                  The author reserves the right to update, modify, or decommission this
                  application at any time. For planned terminations of service, the author will
                  provide reasonable notice to the organization.
                </p>
              </CardContent>
            </Card>

            {/* Acquisition */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-4 px-6">
                <CardTitle className="text-xl font-bold text-gray-800">
                  4. Formal Acquisition
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 space-y-4">
                <p>
                  If the organization wishes to formally acquire full ownership, self-host, or
                  gain the right to modify the application, a separate written acquisition or
                  licensing agreement must be arranged with the author.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}