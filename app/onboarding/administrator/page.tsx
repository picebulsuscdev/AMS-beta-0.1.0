// admin page
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function AdministratorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Administrator</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          This section is for administrators who manage student data and
          attendance reports.
        </p>
      </div>

      <Alert className="bg-blue-100">
        <Info className="h-4 w-4" />
        <AlertTitle>Note</AlertTitle>
        <AlertDescription className="max-w-2xl">
          This administrator page is not optimized for mobile use. Please use a
          desktop or laptop for the best experience.
        </AlertDescription>
      </Alert>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Accessing the Administrator Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="max-w-2xl">
            <strong>Login:</strong> Enter your username and password on the
            administrator login page to access the admin dashboard.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Generate Batch QR Code</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="max-w-2xl mb-4">
            The Generate Batch QR Code feature enables you to create unique QR
            codes for each student in batches. This makes it easier for the
            students to check-in and out by using the QR Codes instead of manual
            tracking.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <h3 className="font-semibold">Initiate QR Code Generation</h3>
              <p className="max-w-2xl">
                Click the "Generate Batch QR Code" button to start the process.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Input Student Data</h3>
              <p className="max-w-2xl">
                You can import student data via CSV file (using the template),
                or manually input the information using the provided fields.
                Make sure to follow the correct format.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Fill Student Information</h3>
              <p className="max-w-2xl">
                Include all the necessary student data such as their name and
                section. Ensure that all the information is accurate.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Remove Student Data</h3>
              <p className="max-w-2xl">
                If you want to remove a specific student from the list, just
                click the trashcan icon beside the student.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Remove All Student Data</h3>
              <p className="max-w-2xl">
                If you wish to clear all the student data, click the "Clear All"
                button. All students in the current list will be removed.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Summary</h3>
              <p className="max-w-2xl">
                Before generating the QR codes, review the "Summary" section.
                Here you will see a breakdown of student data by section. Make
                sure that the data is correct before proceeding.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Generate Codes</h3>
              <p className="max-w-2xl">
                Once your student data is correct, click the “Generate QR Codes”
                button, and the system will produce a unique QR code for each
                student.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Download QR Codes</h3>
              <p className="max-w-2xl">
                The system automatically downloads a single ZIP file once the QR
                code generation process is finished. This file contains a
                consolidation file with all student data that will serve as a
                database, as well as folders with the individual QR codes for
                each section.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Consolidate Attendance Logs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="max-w-2xl mb-4">
            The Consolidate Attendance Logs feature allows you to merge and
            analyze attendance data collected from various sources. This is
            useful for generating reports and getting insights into overall
            event attendance.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <h3 className="font-semibold">Select Consolidation File</h3>
              <p className="max-w-2xl">
                The consolidation file is a CSV that contains the basic student
                information that will be used to match and consolidate
                attendance logs. Drag and drop or click to select your file.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Select Attendance Log Files</h3>
              <p className="max-w-2xl">
                The tracker log files are individual CSV files generated by the
                tracker devices during each scanning session. Drag and drop or
                click to select the tracker log file(s) to merge and analyze.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Consolidate Files</h3>
              <p className="max-w-2xl">
                Once your consolidation file and log files are selected, click
                on the “Consolidate Files” button. The system will merge all the
                data and output consolidated data.
              </p>
            </li>
          </ol>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">View Event Overview</h3>
            <p className="max-w-2xl">
              After consolidating the attendance logs, an overview will be
              displayed, showing a chart of the total students, total time-in,
              and total time-out for each section.
            </p>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">View Student List:</h3>
              <p className="max-w-2xl">
                You can view the student details for that specific event (Name,
                section, time-in, and time-out).
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Sort Attendance Data:</h3>
              <p className="max-w-2xl">
                You can click on the headings to sort the data:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>User ID:</strong> Sort ascending or descending.
                </li>
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
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Search Function:</h3>
              <p className="max-w-2xl">
                Use the search bar to search for specific attendees by name or
                section.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Highlight Tool:</h3>
              <p className="max-w-2xl">
                You can highlight the status of the student by using the drop
                down of Highlight Tool
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Time In Only:</strong> Highlight student who only has
                  a time in.
                </li>
                <li>
                  <strong>Time Out Only:</strong> Highlight student who only has
                  a time out.
                </li>
                <li>
                  <strong>Didn't Attend:</strong> Highlight student who doesn't
                  have a time in and a time out.
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Filter Attendance Records:</h3>
              <p className="max-w-2xl">
                You can filter the students to appear in the list using the
                Filter Attendance Records option.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Section:</strong> You can filter base on the section.
                </li>
                <li>
                  <strong>Time Status:</strong> You can filter if the student
                  has a time in or a time out or doesn't attend the event.
                </li>
              </ul>
            </div>

            <p className="max-w-2xl">
              <strong>Reset Filters:</strong> Reset the applied filter.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Sign Out</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="max-w-2xl">
            Click on the "Sign Out" button when done using the system to go back
            to the admin login screen.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
