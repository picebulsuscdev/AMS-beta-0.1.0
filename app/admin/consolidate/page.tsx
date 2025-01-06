"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Button } from "components/ui/button";
import { ArrowLeft, HelpCircle, Download, Loader2, Edit } from "lucide-react";
import FileDropZone from "./components/FileDropZone";
import AttendanceFileDropZone from "./components/AttendanceFileDropZone";
import Consolidator from "./components/Consolidator";
import SummaryTabs from "./components/SummaryTabs";
import { Input } from "components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "components/ui/dialog";
import { useCheckAdminAuthentication } from "utils/auth";
import { toast } from "sonner";

interface Student {
  id: string;
  name: string;
  section: string;
}

interface ConsolidatedData {
  sections: { [key: string]: ConsolidatedSection };
  dates: string[];
}

interface AttendanceRecord {
  id: string;
  "User ID": string;
  name: string;
  section: string;
  timeIn?: string;
  timeOut?: string;
  // ... other fields
}

interface ConsolidatedSection {
  totalStudents: number;
  students: {
    name: string;
    timeIn?: string | null;
    timeOut?: string | null;
    userID?: string;
  }[];
  timeInCount: number;
  timeOutCount: number;
  [key: string]: any;
}

export default function ConsolidatePage() {
  const authStatus = useCheckAdminAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === "unauthenticated") {
      toast.error("Session expired. Please login again.");
      router.push("/admin");
    }
  }, [authStatus, router]);

  const [eventName, setEventName] = useState("");
  const [tempEventName, setTempEventName] = useState(""); // Temporary state for the modal input
  const [consolidationFile, setConsolidationFile] = useState<File | null>(null);
  const [attendanceFiles, setAttendanceFiles] = useState<File[]>([]);
  const [consolidated, setConsolidated] = useState<ConsolidatedData | null>(
    null,
  );
  const [allAttendanceRecords, setAllAttendanceRecords] = useState<
    AttendanceRecord[]
  >([]);
  const [isConsolidating, setIsConsolidating] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [highlightMissing, setHighlightMissing] = useState<
    "timeIn" | "timeOut" | "both" | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSections, setFilteredSections] = useState<
    { [key: string]: ConsolidatedSection } | {}
  >({});
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<"section">("section");
  const [isEventNameModalOpen, setIsEventNameModalOpen] = useState(true);
  const consolidatorRef = useRef<any>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


  const handleConsolidationFileSelected = (file: File) => {
    setConsolidationFile(file);
  };

  const handleRemoveConsolidationFile = () => {
    setConsolidationFile(null);
  };

  const handleAttendanceFilesSelected = (files: File[]) => {
    setAttendanceFiles((prev) => [...prev, ...files]);
  };

  const handleRemoveAttendanceFile = (index: number) => {
    setAttendanceFiles((prev) => {
      const newFiles = prev.filter((_, i) => i !== index);
      return newFiles;
    });
  };

  const handleConsolidatedData = useCallback(
    (data: ConsolidatedData | null) => {
      console.log("handleConsolidatedData: Received data:", data);
      setAllAttendanceRecords([]);
      setConsolidated(data);
      if (data) {
        const allRecords = Object.values(data.sections).flatMap(
          (section: ConsolidatedSection) => {
            return section.students.map(
              (student: {
                userID?: string;
                name: string;
                timeIn?: string | null;
                timeOut?: string | null;
              }) => ({
                id: crypto.randomUUID(),
                "User ID": student.userID!,
                name: student.name,
                section:
                  Object.keys(data.sections).find(
                    (key) => data.sections[key] === section,
                  ) || "",
                timeIn: student.timeIn ?? undefined,
                timeOut: student.timeOut ?? undefined,
              }),
            ) as AttendanceRecord[];
          },
        );
        setAllAttendanceRecords(allRecords);
      }
    },
    [],
  );

  const downloadConsolidated = async () => {
    if (!consolidated) return;
    setIsDownloading(true);
    toast.loading("Preparing CSV File...", { id: "downloading-csv" });

    try {
      const csv = [
        ["User ID", "Name", "Section", "Time In", "Time Out"],
        ...Object.entries(consolidated.sections).flatMap(
          ([, data]: [string, ConsolidatedSection]) => {
            return data.students
              .sort((a: { userID?: string }, b: { userID?: string }) => {
                const numA = parseInt(a.userID || "0", 10);
                const numB = parseInt(b.userID || "0", 10);
                return numA - numB;
              })
              .map(
                (student: {
                  userID?: string;
                  name: string;
                  timeIn?: string | null;
                  timeOut?: string | null;
                }) => [
                  student.userID || "",
                  student.name,
                  Object.keys(consolidated.sections).find((key) =>
                    consolidated.sections[key].students.includes(student),
                  ) || "",
                  student.timeIn ?? "",
                  student.timeOut ?? "",
                ],
              );
          },
        ),
      ]
        .map((row) => row.join(","))
        .join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const filename = eventName
        ? `${eventName.replace(/[^a-zA-Z0-9]/g, "_")}_summary.csv`
        : `consolidated_attendance_${
            new Date().toISOString().split("T")[0]
          }.csv`;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success("CSV Downloaded Successfully", { id: "downloading-csv" });
    } catch (error) {
      toast.error("Error downloading CSV", { id: "downloading-csv" });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (!consolidated) {
      setFilteredSections({});
      return;
    }
    if (!query) {
      setFilteredSections(consolidated.sections || {});
      return;
    }
    const filtered: { [key: string]: ConsolidatedSection } = {};

    if (consolidated?.sections) {
      Object.entries(consolidated.sections).forEach(
        ([section, data]: [string, ConsolidatedSection]) => {
          const filteredStudents = data.students.filter((student: {
            name: string;
          }) => student.name.toLowerCase().includes(query.toLowerCase()));
          if (filteredStudents.length > 0) {
            filtered[section] = {
              ...data,
              students: filteredStudents,
              totalStudents: filteredStudents.length,
            };
          }
        },
      );
    }
    setFilteredSections(filtered);
  };

  const getMissingStatus = (timeIn?: string, timeOut?: string) => {
    if (highlightMissing === "both" && (!timeIn || !timeOut))
      return "bg-red-200";
    if (highlightMissing === "timeIn" && !timeIn) return "bg-yellow-200";
    if (highlightMissing === "timeOut" && !timeOut) return "bg-blue-200";
    return "";
  };

  const getDisplaySections = () => {
    return consolidated?.sections || {};
  };

  const handleSort = (column: "section") => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortSections = (sections: {
    [key: string]: ConsolidatedSection;
  }): [string, ConsolidatedSection][] => {
    const sectionsArray = Object.entries(sections);
    return sectionsArray.sort(([, dataA], [, dataB]) => {
      if (sortColumn === "section") {
        const sectionA = dataA;
        const sectionB = dataB;
        if (sortOrder === "asc") {
          return String(sectionA).localeCompare(String(sectionB));
        } else {
          return String(sectionB).localeCompare(String(sectionA));
        }
      }
      return 0;
    });
  };

  const handleConsolidateClick = useCallback(() => {
    console.log("Button clicked");
    if (consolidatorRef.current) {
      setIsConsolidating(true);
      consolidatorRef.current.consolidateFiles();
    }
  }, []);

  const getMasterlistSections = useMemo(() => {
    if (!consolidated?.sections) return [];
    return Object.keys(consolidated?.sections);
  }, [consolidated]);


    const handleEventNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempEventName(event.target.value);
    };

    const handleEventNameSubmit = () => {
        setEventName(tempEventName);
        setIsEventNameModalOpen(false);
    };


  const handleEditEventName = () => {
    setTempEventName(eventName); // Set the current event name as the initial value in the input
    setIsEventNameModalOpen(true);
    if (inputRef.current){
         setTimeout(() => {
            inputRef.current?.focus()
        }, 0)
    }
  };

    useEffect(() => {
    if (isEventNameModalOpen && inputRef.current) {
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }
    }, [isEventNameModalOpen]);


  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Consolidated Log</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/admin/dashboard")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/onboarding/administrator")}
          >
            <HelpCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex gap-4 flex-1 overflow-hidden">
        <div className="w-1/4 space-y-4 flex flex-col">
          <Card className="h-[150px]">
            <CardHeader>
              <CardTitle>Consolidation File</CardTitle>
            </CardHeader>
            <CardContent>
              <FileDropZone
                file={consolidationFile}
                onFileSelected={handleConsolidationFileSelected}
                onRemove={handleRemoveConsolidationFile}
                title="Consolidation File"
              />
            </CardContent>
          </Card>
          <Card className="flex-1 overflow-y-auto">
            <CardHeader>
              <CardTitle>Attendance Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <AttendanceFileDropZone
                files={attendanceFiles}
                onFilesSelected={handleAttendanceFilesSelected}
                onRemove={handleRemoveAttendanceFile}
                title="Attendance Logs"
              />
            </CardContent>
          </Card>
          <Button
            className="w-full mt-4"
            disabled={
              !consolidationFile || !attendanceFiles.length || isConsolidating
            }
            onClick={handleConsolidateClick}
          >
            {isConsolidating ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Consolidating...
              </div>
            ) : (
              "Consolidate Files"
            )}
          </Button>
          <Consolidator
            consolidationFile={consolidationFile}
            attendanceFiles={attendanceFiles}
            onConsolidated={handleConsolidatedData}
            setIsConsolidating={setIsConsolidating}
            setIsParsing={(isParsing) => console.log("Parsing: ", isParsing)}
            ref={consolidatorRef}
          />
        </div>
        <div className="w-3/4">
          <Card className="h-full overflow-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">
                    {eventName || "Event Name"}
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleEditEventName}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                {consolidated && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={downloadConsolidated}
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Download />
                    )}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="h-full flex-1 overflow-auto summary-panel">
              <div className="relative w-full h-full ">
                <SummaryTabs
                  consolidatedData={consolidated}
                  allAttendanceRecords={allAttendanceRecords}
                  masterlistSections={getMasterlistSections}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
         {/* Event Name Modal */}
      <Dialog
        open={isEventNameModalOpen}
        onOpenChange={setIsEventNameModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Event Name</DialogTitle>
            <DialogDescription>
              Please provide a name for this event.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Input
                  ref={inputRef}
                type="text"
                placeholder="Enter event name"
                className="text-lg"
                value={tempEventName}
                onChange={handleEventNameChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Enter") {
                    handleEventNameSubmit();
                  }
                }}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                onClick={handleEventNameSubmit}
              >
                Apply
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}