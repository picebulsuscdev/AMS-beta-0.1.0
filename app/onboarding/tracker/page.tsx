// tracker page
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function TrackerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Tracker</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          This section is for officers responsible for taking attendance during
          events.
        </p>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <h3 className="font-semibold">Access the Tracker</h3>
              <p className="max-w-2xl">
                Access the AMS on your browser using a mobile device.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Tracker Information</h3>
              <p className="max-w-2xl">Fill out the form:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Name of Tracker:</strong> Input your name.
                </li>
                <li>
                  <strong>Section:</strong> Input your section.
                </li>
                <li>
                  <strong>Event Name:</strong> Input the name of the event you
                  are monitoring.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Start Tracking</h3>
              <p className="max-w-2xl">Click on the Start Tracking button.</p>
            </li>
          </ol>

          <Alert className="bg-white-100">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important Note</AlertTitle>
            <AlertDescription className="max-w-2xl">
              All session data is stored locally on your device. Avoid clearing
              your browser cache while using the system to prevent data loss.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Taking Attendance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <h3 className="font-semibold">QR Code Scanner:</h3>
              <p className="max-w-2xl">
                Once you have started tracking, you will see the QR Code Scanner
                interface.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Take Attendance:</strong> Select the Take Attendance
                  tab.
                </li>
                <li>
                  <strong>Time In / Time Out:</strong> Set the toggle to Time In
                  mode, and press Start Scanning to scan the QR Code.
                </li>
                <li>Position the student's QR code within the frame.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Start Scanning:</h3>
              <p className="max-w-2xl">
                Click the Start Scanning button to activate the camera scanner.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Scan QR Codes:</h3>
              <p className="max-w-2xl">
                The system will automatically record the student's time-in or
                time-out. A successful scan will display the student's
                information with the timestamp.
              </p>
              <p className="max-w-2xl">Repeat the process for each student.</p>
            </li>
          </ol>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Scanner Status:</h3>
            <p className="max-w-2xl">
              The system will show the scanner status in two states:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Scanner Inactive:</strong> Scanner is not active, ready
                to start scanning.
              </li>
              <li>
                <strong>Scanner Active:</strong> Scanner is active and ready to
                scan a QR Code.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Recent Scans:</h3>
            <p className="max-w-2xl">
              You can see a list of the most recent scans to verify.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Viewing Attendance Records</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <h3 className="font-semibold">Access Attendance Records</h3>
              <p className="max-w-2xl">Select the Attendance Records tab.</p>
            </li>
            <li>
              <h3 className="font-semibold">View Attendance Data</h3>
              <p className="max-w-2xl">
                View the list of student attendees (Name, section, time-in, and
                time-out).
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Sort Attendance Data</h3>
              <p className="max-w-2xl">
                You can click on the headings to sort the data:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Name:</strong> Sort alphabetically A-Z or Z-A.
                </li>
                <li>
                  <strong>Section:</strong> Sort alphabetically A-Z or Z-A.
                </li>
                <li>
                  <strong>Time In:</strong> Sort ascending or descending.
                </li>
                <li>
                  <strong>Time Out:</strong> Sort ascending or descending.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Search Function:</h3>
              <p className="max-w-2xl">
                Use the search bar to search for specific attendees by name or
                section.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Download CSV:</h3>
              <p className="max-w-2xl">
                Click the "Download CSV" button to save the attendance records
                for documentation.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Sign Out</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="max-w-2xl">
            Click on the "Sign Out" button when done using the system to go back
            to the tracker login screen.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
