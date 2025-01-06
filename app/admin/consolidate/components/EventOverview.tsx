import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, BarChart, Table, ArrowUpDown } from "lucide-react";
import { GraphPanel } from "./GraphPanel";

interface ConsolidatedSection {
  totalStudents: number;
  students: {
    name: string;
    timeIn?: string;
    timeOut?: string;
  }[];
  timeInCount: number;
  timeOutCount: number;
  [key: string]: any;
}

interface EventOverviewProps {
  consolidatedData: {
    sections?: { [key: string]: ConsolidatedSection } | undefined;
    dates?: string[] | undefined;
  } | null;
}

const EventOverview: React.FC<EventOverviewProps> = ({ consolidatedData }) => {
  const [displayMode, setDisplayMode] = useState<"table" | "graph">("table");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<
    keyof ConsolidatedSection | "section"
  >("section");

  const handleDisplayModeToggle = () => {
    setDisplayMode(displayMode === "table" ? "graph" : "table");
  };

  const sortRecords = useMemo(
    () =>
      (
        data: [string, ConsolidatedSection][],
        column: keyof ConsolidatedSection | "section",
        direction: "asc" | "desc",
      ): [string, ConsolidatedSection][] => {
        const sortedData = [...data].sort(
          ([sectionA, dataA], [sectionB, dataB]) => {
            if (column === "section") {
              // Custom sorting for sections like 1A, 2B, etc.
              const parseSection = (section: string) => {
                const match = section.match(/^(\d+)([A-Z])$/);
                if (match) {
                  return [parseInt(match[1], 10), match[2]];
                }
                return [Infinity, ""]; // Place malformed sections at the end
              };

              const [numA, charA] = parseSection(sectionA);
              const [numB, charB] = parseSection(sectionB);

              if (typeof numA === 'number' && typeof numB === 'number' && numA !== numB) {
                return direction === "asc" ? numA - numB : numB - numA;
              }
              if (typeof charA === 'string' && typeof charB === 'string' && charA !== charB) {
                return direction === "asc"
                  ? charA.localeCompare(charB)
                  : charB.localeCompare(charA);
              }
              return 0;
            } else {
              // Generic sorting for other columns
              const aValue = dataA[column] || "";
              const bValue = dataB[column] || "";

              if (aValue < bValue) {
                return direction === "asc" ? -1 : 1;
              }
              if (aValue > bValue) {
                return direction === "asc" ? 1 : -1;
              }
              return 0;
            }
          },
        );

        return sortedData;
      },
    [],
  );

  const handleSort = (column: keyof ConsolidatedSection | "section") => {
    let newDirection: "asc" | "desc";
    if (sortColumn === column) {
      newDirection = sortOrder === "asc" ? "desc" : "asc";
    } else {
      newDirection = "asc";
    }
    setSortColumn(column);
    setSortOrder(newDirection);
  };

  const getSortedSections = () => {
    if (!consolidatedData?.sections) return [];
    return sortRecords(
      Object.entries(consolidatedData.sections),
      sortColumn!,
      sortOrder,
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end">
        <Button variant="outline" size="icon" onClick={handleDisplayModeToggle}>
          {displayMode === "table" ? (
            <BarChart className="h-4 w-4" />
          ) : (
            <Table className="h-4 w-4" />
          )}
        </Button>
      </div>
      {displayMode === "table" ? (
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <table className="w-full table-auto text-sm border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2 text-center">
                    <Button
                      variant="link"
                      className="flex items-center justify-center w-full h-full"
                      onClick={() => handleSort("section")}
                    >
                      Section
                      {sortColumn === "section" ? (
                        sortOrder === "asc" ? (
                          <ArrowUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDown className="ml-1 h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      )}
                    </Button>
                  </th>
                  <th className="px-4 py-2 text-center">
                    <Button
                      variant="link"
                      className="flex items-center justify-center w-full h-full"
                      onClick={() => handleSort("totalStudents")}
                    >
                      Total Students (
                      {consolidatedData?.sections
                        ? Object.values(consolidatedData.sections).reduce(
                            (sum, section) => sum + section.totalStudents,
                            0,
                          )
                        : 0}
                      )
                      {sortColumn === "totalStudents" ? (
                        sortOrder === "asc" ? (
                          <ArrowUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDown className="ml-1 h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      )}
                    </Button>
                  </th>
                  <th className="px-4 py-2 text-center">
                    <Button
                      variant="link"
                      className="flex items-center justify-center w-full h-full"
                      onClick={() => handleSort("timeInCount")}
                    >
                      Time In (
                      {consolidatedData?.sections
                        ? Object.values(consolidatedData.sections).reduce(
                            (sum, section) => sum + section.timeInCount,
                            0,
                          )
                        : 0}
                      )
                      {sortColumn === "timeInCount" ? (
                        sortOrder === "asc" ? (
                          <ArrowUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDown className="ml-1 h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      )}
                    </Button>
                  </th>
                  <th className="px-4 py-2 text-center">
                    <Button
                      variant="link"
                      className="flex items-center justify-center w-full h-full"
                      onClick={() => handleSort("timeOutCount")}
                    >
                      Time Out (
                      {consolidatedData?.sections
                        ? Object.values(consolidatedData.sections).reduce(
                            (sum, section) => sum + section.timeOutCount,
                            0,
                          )
                        : 0}
                      )
                      {sortColumn === "timeOutCount" ? (
                        sortOrder === "asc" ? (
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
                {consolidatedData && getSortedSections()?.length > 0 ? (
                  getSortedSections().map(([section, data]) => (
                    <tr key={section} className="gap 1">
                      <td className="px-4 py-2 text-center">{section}</td>
                      <td className="px-4 py-2 text-center">
                        {data.totalStudents}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {data.timeInCount}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {data.timeOutCount}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-2 text-center text-gray-500"
                    >
                      No data to display yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end space-x-2"></div>
        </div>
      ) : (
        <GraphPanel consolidatedData={consolidatedData} />
      )}
    </div>
  );
};

export default EventOverview;
