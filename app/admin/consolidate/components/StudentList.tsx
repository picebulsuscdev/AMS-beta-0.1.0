"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ArrowDown, ArrowUp, Filter, Brush } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import * as Tooltip from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

interface AttendanceRecord {
  id: string;
  userID: string;
  name: string;
  section: string;
  timeIn?: string;
  timeOut?: string;
  isMissing?: "timeIn" | "timeOut" | "both" | null;
  highlightClass?: string;
}

interface StudentListProps {
  allAttendanceRecords: AttendanceRecord[];
  masterlistSections: string[] | undefined;
}

const StudentList: React.FC<StudentListProps> = ({
  allAttendanceRecords,
  masterlistSections,
}) => {
  const [sortColumn, setSortColumn] =
    useState<keyof AttendanceRecord>("userID");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightMissing, setHighlightMissing] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [filterTimeIn, setFilterTimeIn] = useState(false);
  const [filterTimeOut, setFilterTimeOut] = useState(false);
  const [filterDidntAttend, setFilterDidntAttend] = useState(false);

  const [filterOptions, setFilterOptions] = useState({
    selectedSections: [],
    filterTimeIn: false,
    filterTimeOut: false,
    filterDidntAttend: false,
  });

  const [attendanceRecords, setAttendanceRecords] = useState<
    AttendanceRecord[]
  >([]);

  // Update attendance records and apply default sorting
  useEffect(() => {
    const recordsWithHighlightClass = allAttendanceRecords.map((record) => ({
      ...record,
      highlightClass: getRowHighlightClass(record, highlightMissing),
      isMissing: getIsMissing(record),
    }));
    setAttendanceRecords(
      [...recordsWithHighlightClass].sort((a, b) =>
        a.userID.localeCompare(b.userID),
      ),
    );
  }, [allAttendanceRecords, highlightMissing]);

  const sortRecords = useCallback(
    (
      data: AttendanceRecord[],
      column: keyof AttendanceRecord,
      direction: "asc" | "desc",
    ): AttendanceRecord[] => {
      return [...data].sort((a, b) => {
        const aValue = a[column] || "";
        const bValue = b[column] || "";
        if (aValue < bValue) return direction === "asc" ? -1 : 1;
        if (aValue > bValue) return direction === "asc" ? 1 : -1;
        return 0;
      });
    },
    [],
  );

  const handleSort = (column: keyof AttendanceRecord) => {
    const newDirection =
      sortColumn === column
        ? sortDirection === "asc"
          ? "desc"
          : "asc"
        : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);
    setAttendanceRecords(sortRecords(attendanceRecords, column, newDirection));
  };

  const getIsMissing = (
    record: AttendanceRecord,
  ): "timeIn" | "timeOut" | "both" | null => {
    if (!record.timeIn && !record.timeOut) {
      return "both";
    }
    if (!record.timeIn) {
      return "timeIn";
    }
    if (!record.timeOut) {
      return "timeOut";
    }
    return null;
  };

  const getFilteredRecords = useCallback(() => {
    let filteredRecords = [...attendanceRecords];
    if (searchQuery) {
      filteredRecords = filteredRecords.filter(
        (record) =>
          record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          record.section.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    if (filterOptions.selectedSections.length > 0) {
      filteredRecords = filteredRecords.filter((record) =>
        filterOptions.selectedSections.includes(record.section),
      );
    }
    if (filterOptions.filterTimeIn) {
      filteredRecords = filteredRecords.filter((record) => record.timeIn);
    }
    if (filterOptions.filterTimeOut) {
      filteredRecords = filteredRecords.filter((record) => record.timeOut);
    }
    if (filterOptions.filterDidntAttend) {
      filteredRecords = filteredRecords.filter(
        (record) => !record.timeIn && !record.timeOut,
      );
    }
    return filteredRecords;
  }, [attendanceRecords, searchQuery, filterOptions]);

  const filteredRecords = useMemo(
    () => getFilteredRecords(),
    [getFilteredRecords],
  );

  const timeInCount = useMemo(
    () => filteredRecords.filter((record) => record.timeIn).length,
    [filteredRecords],
  );

  const timeOutCount = useMemo(
    () => filteredRecords.filter((record) => record.timeOut).length,
    [filteredRecords],
  );

  const generateCSV = () => {
    if (!filteredRecords || filteredRecords.length === 0) return;

    const csvHeader = Object.keys(filteredRecords[0]).join(",");
    const csvRows = filteredRecords
      .map((record) => {
        const formattedValues = Object.values(record).map((value) =>
          typeof value === "string" && !isNaN(new Date(value).getTime())
            ? new Date(value).toLocaleString().replace(",", " |")
            : value,
        );
        return formattedValues.join(",");
      })
      .join("\n");

    const csvData = `${csvHeader}\n${csvRows}`;
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "attendance_records.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  const getRowHighlightClass = (
    record: AttendanceRecord,
    highlightMissing: boolean,
  ) => {
    if (highlightMissing) {
      if (!record.timeIn && !record.timeOut) {
        return "bg-gray-200";
      }
      if (!record.timeIn) {
        return "bg-blue-200";
      }
      if (!record.timeOut) {
        return "bg-green-200";
      }
    }
    return "";
  };

  const handleSectionChange = (section: string) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section],
    );
  };

  const resetFilters = () => {
    setFilterOptions({
      selectedSections: [],
      filterTimeIn: false,
      filterTimeOut: false,
      filterDidntAttend: false,
    });
    setSelectedSections([]);
    setFilterTimeIn(false);
    setFilterTimeOut(false);
    setFilterDidntAttend(false);
  };

  const applyFilters = () => {
    setFilterOptions({
      selectedSections,
      filterTimeIn,
      filterTimeOut,
      filterDidntAttend,
    });
    setOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Input
          type="text"
          placeholder="Search by Name or Section"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex items-center gap-2">
          {/* Tooltip for Highlight Missing Times */}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    highlightMissing && "bg-accent text-accent-foreground",
                  )}
                  onClick={() => setHighlightMissing(!highlightMissing)}
                >
                  <Brush className="h-4 w-4" />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="bottom"
                  className="bg-gray-700 text-white p-2 rounded shadow-md"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Highlight Tool</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-400 border border-gray-400"></div>
                      <span>Time In Only</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-400 border border-gray-400"></div>
                      <span>Time Out Only</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-400 border border-gray-400"></div>
                      <span>Didn't Attend</span>
                    </div>
                  </div>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
          {/* Filter Button */}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    filterOptions.selectedSections.length > 0 ||
                      filterTimeIn ||
                      filterTimeOut ||
                      filterOptions.filterDidntAttend
                      ? "bg-accent text-accent-foreground"
                      : "",
                  )}
                  onClick={() => {
                    console.log("Filter Button Clicked");
                    setOpen(true);
                    setSelectedSections(filterOptions.selectedSections);
                    setFilterTimeIn(filterOptions.filterTimeIn);
                    setFilterTimeOut(filterOptions.filterTimeOut);
                    setFilterDidntAttend(filterOptions.filterDidntAttend);
                  }}
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="bottom"
                  className="bg-gray-700 text-white p-2 rounded shadow-md"
                >
                  Apply Filters
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Dialog open={open} onOpenChange={setOpen}>
            {/* Removed DialogTrigger */}
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Filter Attendance Records</DialogTitle>
                <DialogDescription>
                  Apply filters for better sorting
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 gap-4 mt-4">
                {/* Sections Filter */}
                {masterlistSections && masterlistSections.length > 0 && (
                  <div className="col-span-1">
                    <span className="block font-medium">Sections</span>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {masterlistSections.sort().map((section) => (
                        <div key={section} className="flex items-center gap-2">
                          <Checkbox
                            checked={selectedSections.includes(section)}
                            onCheckedChange={() => handleSectionChange(section)}
                          />
                          <span>{section}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Time Filter */}
                <div className="col-span-1">
                  <span className="block font-medium">Time Status</span>
                  <div className="flex items-center gap-2 mt-2">
                    <Checkbox
                      checked={filterTimeIn}
                      onCheckedChange={() => setFilterTimeIn(!filterTimeIn)}
                    />
                    <span>Time In</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Checkbox
                      checked={filterTimeOut}
                      onCheckedChange={() => setFilterTimeOut(!filterTimeOut)}
                    />
                    <span>Time Out</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Checkbox
                      checked={filterDidntAttend}
                      onCheckedChange={() =>
                        setFilterDidntAttend(!filterDidntAttend)
                      }
                    />
                    <span>Didn't Attend</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="text-red-500 border-red-500 hover:bg-red-100"
                >
                  Reset Filters
                </Button>
                <Button
                  variant="default"
                  onClick={applyFilters}
                  className="bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors duration-200"
                >
                  Apply Filters
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="border border-gray-200 rounded-md overflow-hidden">
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
            {filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-2 text-center text-gray-500">
                  No data to display yet
                </td>
              </tr>
            ) : (
              filteredRecords.map((record) => (
                <tr key={record.id} className={record.highlightClass}>
                  <td className="text-center py-2 px-3">{record.userID}</td>
                  <td className="text-left py-2 px-3">{record.name}</td>
                  <td className="text-center py-2 px-3">{record.section}</td>
                  <td className="text-center py-2 px-3">{record.timeIn}</td>
                  <td className="text-center py-2 px-3">{record.timeOut}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end space-x-2"></div>
    </div>
  );
};

export default StudentList;
