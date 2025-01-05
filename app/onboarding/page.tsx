// introductory page
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">
          PICE BulSU SC - Attendance Monitoring System (AMS)
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the PICE BulSU SC - Attendance Monitoring System (AMS).
          This web-based application streamlines the process of tracking student
          attendance during organization events for the officers of PICE BulSU
          SC. The system utilizes QR code scanning to record student's time-in
          and time-out, allowing for efficient attendance management.
        </p>
        <p className="text-lg text-gray-700">
          This system was built to help the PICE BulSU SC Officers to easily
          track the attendance of students during the organization events. Here
          are the things you need to know to get started.
        </p>
      </div>

      <Card className="shadow-md mb-4">
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <h3 className="font-semibold">QR Code Scanning</h3>
              <p>Track student attendance by scanning their unique QR codes.</p>
            </li>
            <li>
              <h3 className="font-semibold">Time Recording</h3>
              <p>
                Automatically record the time-in and time-out of students during
                the scanning process.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Data Management</h3>
              <p>Generate comprehensive summaries of attendance data.</p>
            </li>
            <li>
              <h3 className="font-semibold">Batch QR Generation</h3>
              <p>Admin can generate QR codes for multiple students.</p>
            </li>
            <li>
              <h3 className="font-semibold">Data Consolidation</h3>
              <p>Merge multiple scanned data and generate summaries.</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-md mb-4">
        <CardHeader>
          <CardTitle>Before you begin</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Please read the documentation thoroughly before using the AMS. This
            will ensure that you understand how the system works and how to
            effectively use its features.
          </p>
          <p>
            If you have read the documentation and are ready to use the system,
            you may access it here:
          </p>
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 transition duration-300 block mt-2"
          >
            Access the System Here
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
