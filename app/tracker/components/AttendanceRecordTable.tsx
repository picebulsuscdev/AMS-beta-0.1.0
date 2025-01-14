import React, { useState, useEffect, useMemo } from "react";
import { Download, ArrowUpDown, ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { initDB, getAllItems } from "@/utils/indexedDB";
import { useMediaQuery } from "usehooks-ts";
import { toast } from "sonner";

interface AttendanceRecord {
  id: string;
  userID: string;
  name: string;
  section: string;
  timeIn?: string;
  timeOut?: string;
}

interface AttendanceRecordTableProps {
  attendanceRecords: AttendanceRecord[] | undefined;
}

const AttendanceRecordTable: React.FC<AttendanceRecordTableProps> = ({
  attendanceRecords: initialAttendanceRecords,
}) => {
  const [attendanceRecords, setAttendanceRecords] = useState<
    AttendanceRecord[]
  >([]);
  const [trackerName, setTrackerName] = useState<string | null>(null);
  const [trackerSection, setTrackerSection] = useState<string | null>(null);
  const [sortColumn, setSortColumn] = useState<keyof AttendanceRecord | null>(
    "name",
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await initDB();
        const records = await getAllItems("attendance");
        setAttendanceRecords(records);

        const trackerInfoArray = await getAllItems("trackerInfo");
        const trackerInfo = trackerInfoArray.find(
          (item) => item.id === "trackerInfo",
        );
        setTrackerName(trackerInfo?.trackerName ?? null);
        setTrackerSection(trackerInfo?.trackerSection ?? null);
        console.log("useEffect - Fetched tracker info:", {
          trackerName: trackerInfo?.trackerName,
          trackerSection: trackerInfo?.trackerSection,
        });
      } catch (error) {
        console.error("Error fetching attendance records:", error);
      }
    };

    fetchData();
  }, []);

  const sortRecords = useMemo(
    () =>
      (
        data: AttendanceRecord[] | undefined,
        column: keyof AttendanceRecord,
        direction: "asc" | "desc",
      ): AttendanceRecord[] => {
        if (!data || !column) return [];
        const sortedData = [...data].sort((a, b) => {
          const aValue = a[column] || "";
          const bValue = b[column] || "";

          if (aValue < bValue) {
            return direction === "asc" ? -1 : 1;
          }
          if (aValue > bValue) {
            return direction === "asc" ? 1 : -1;
          }
          return 0;
        });
        return sortedData;
      },
    [],
  );

  const handleSort = (column: keyof AttendanceRecord) => {
    let newDirection: "asc" | "desc";

    if (sortColumn === column) {
      newDirection = sortDirection === "asc" ? "desc" : "asc";
    } else {
      newDirection = "asc";
    }
    setSortColumn(column);
    setSortDirection(newDirection);
  };

  const getFilteredRecords = () => {
    if (!attendanceRecords) return [];
    return attendanceRecords.filter((record) => {
      if (!record || !record.name || !record.section) return false;
      return (
        record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.section.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };

  const sortedRecords = useMemo(() => {
    return sortRecords(
      attendanceRecords,
      sortColumn as keyof AttendanceRecord,
      sortDirection,
    );
  }, [attendanceRecords, sortColumn, sortDirection, sortRecords]);

  const timeInCount = useMemo(() => {
    return attendanceRecords?.filter((record) => record.timeIn).length || 0;
  }, [attendanceRecords]);

  const timeOutCount = useMemo(() => {
    return attendanceRecords?.filter((record) => record.timeOut).length || 0;
  }, [attendanceRecords]);

  const generateCSV = async () => {
    if (!attendanceRecords || attendanceRecords.length === 0) {
      toast.error("No attendance records to download.");
      return;
    }

    toast.loading("Generating CSV...", { id: "csv-download" });

    const csvHeader = `id,User ID,Name,Section,timeIn,timeOut,validator.piceamslogs`;
    const csvRows = attendanceRecords
      .map((record) => {
        const formattedTimeIn = record.timeIn
          ? new Date(record.timeIn).toLocaleString().replace(",", " |")
          : "null";
        const formattedTimeOut = record.timeOut
          ? new Date(record.timeOut).toLocaleString().replace(",", " |")
          : "null";

        return `${record.id},${record.userID},${record.name},${record.section},${formattedTimeIn},${formattedTimeOut},`;
      })
      .join("\n");

    const csvData = `${csvHeader}\n${csvRows}`;

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    const fileName = `${trackerSection || "Records"} - ${trackerName || "Attendance"}.csv`;
    link.download = fileName;
    console.log("generateCSV - File name:", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("CSV generated successfully!", { id: "csv-download" });
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search by Name or Section"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ScrollArea className="w-full">
        <table
          className={`table-auto w-full text-sm ${isMobile ? "min-w-[600px]" : ""}`}
        >
          <thead>
            <tr>
              <th className="text-left">
                <Button
                  variant="link"
                  className="flex items-center"
                  onClick={() => handleSort("name")}
                >
                  Name
                  {sortColumn === "name" ? (
                    sortDirection === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    )
                  ) : (
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  )}
                </Button>
              </th>
              <th className="text-left">
                <Button
                  variant="link"
                  className="flex items-center"
                  onClick={() => handleSort("section")}
                >
                  Section
                  {sortColumn === "section" ? (
                    sortDirection === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    )
                  ) : (
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  )}
                </Button>
              </th>
              <th className="text-left">
                <Button
                  variant="link"
                  className="flex items-center"
                  onClick={() => handleSort("timeIn")}
                >
                  Time In ({timeInCount})
                  {sortColumn === "timeIn" ? (
                    sortDirection === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    )
                  ) : (
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  )}
                </Button>
              </th>
              <th className="text-left">
                <Button
                  variant="link"
                  className="flex items-center"
                  onClick={() => handleSort("timeOut")}
                >
                  Time Out ({timeOutCount})
                  {sortColumn === "timeOut" ? (
                    sortDirection === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    )
                  ) : (
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  )}
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {getFilteredRecords().length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-4 text-muted-foreground"
                >
                  No records found
                </td>
              </tr>
            ) : (
              sortedRecords.map((record) => (
                <tr key={record.id}>
                  <td>{record.name}</td>
                  <td>{record.section}</td>
                  <td>{record.timeIn}</td>
                  <td>{record.timeOut}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </ScrollArea>
      <div className="mt-4 flex justify-end space-x-2">
        <Button
          variant="outline"
          onClick={generateCSV}
          disabled={!attendanceRecords || attendanceRecords.length === 0}
        >
          <Download className="h-4 w-4 mr-2" />
          Download CSV
        </Button>
      </div>
    </div>
  );
};

export default AttendanceRecordTable;
