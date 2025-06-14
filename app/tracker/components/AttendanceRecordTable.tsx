import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Download, ArrowUpDown, ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { initDB, getAllItems } from "@/utils/indexedDB";
import { useMediaQuery } from "usehooks-ts";
import { toast } from "sonner";
import { formatTimeTo12Hour } from "@/utils/format";

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
      if (!record || !record.name || !record.section || !record.userID) return false;
      return (
        record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.userID.toLowerCase().includes(searchQuery.toLowerCase())
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

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search by User ID, Name, or Section"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="border border-gray-200 rounded-md overflow-hidden overflow-x-auto">
        <table className="table-auto w-full text-sm border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            {/* Table Headers */}
            <tr>
              <th className="text-center py-2 px-3">
                <Button
                  variant="link"
                  className="flex items-center justify-center w-full h-full"
                  onClick={() => handleSort("userID")}
                >
                  User ID
                  {sortColumn === "userID" ? (
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
              <th className="text-center py-2 px-3">
                <Button
                  variant="link"
                  className="flex items-center justify-center w-full h-full"
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
              <th className="text-center py-2 px-3">
                <Button
                  variant="link"
                  className="flex items-center justify-center w-full h-full"
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
              <th className="text-center py-2 px-3">
                <Button
                  variant="link"
                  className="flex items-center justify-center w-full h-full"
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
              <th className="text-center py-2 px-3">
                <Button
                  variant="link"
                  className="flex items-center justify-center w-full h-full"
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
                <td colSpan={5} className="px-4 py-2 text-center text-gray-500">
                  No data to display yet
                </td>
              </tr>
            ) : (
              sortedRecords.map((record) => (
                <tr key={record.id}>
                  <td className="text-center py-2 px-3">{record.userID}</td>
                  <td className="text-left py-2 px-3">{record.name}</td>
                  <td className="text-center py-2 px-3">{record.section}</td>
                  <td className="text-center py-2 px-3">{formatTimeTo12Hour(record.timeIn)}</td>
                  <td className="text-center py-2 px-3">{formatTimeTo12Hour(record.timeOut)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceRecordTable;
