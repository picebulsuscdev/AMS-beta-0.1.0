"use client";

import { useCallback, forwardRef, useImperativeHandle, useState } from "react";
import { readString } from "react-papaparse";
import { toast } from "sonner";

interface Student {
  "User ID": string;
  Name: string;
  Section: string;
}

interface AttendanceRecord {
  id: string;
  "User ID": string;
  Name: string;
  Section: string;
  timeIn?: string | null;
  timeOut?: string | null;
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
}

interface ConsolidatedData {
  sections: { [key: string]: ConsolidatedSection };
  dates: string[];
}

interface ConsolidatorProps {
  consolidationFile: File | null;
  attendanceFiles: File[];
  onConsolidated: (data: ConsolidatedData | null) => void;
  setIsConsolidating: (isConsolidating: boolean) => void;
  setIsParsing: (isParsing: boolean) => void;
}

const Consolidator = forwardRef<any, ConsolidatorProps>(
  (
    {
      consolidationFile,
      attendanceFiles,
      onConsolidated,
      setIsConsolidating,
      setIsParsing,
    },
    ref,
  ) => {
    const formatTime = (time: string | null | undefined): string | null => {
      if (!time) return null;
      try {
        const [datePart, timePart] = time.split(" | ");
        if (!timePart) return null;
        const [hours, minutes] = timePart.split(":").map(Number);
        const date = new Date();
        date.setHours(hours, minutes);
        const formattedHours = date.getHours() % 12 || 12;
        const ampm = date.getHours() >= 12 ? "PM" : "AM";

        return `${formattedHours}:${String(date.getMinutes()).padStart(2, "0")} ${ampm}`;
      } catch (e) {
        return null;
      }
    };

    const getFileText = async (file: File): Promise<string> => {
      try {
        return await file.text();
      } catch (error) {
        console.error("Error reading file:", error);
        toast.error(`Error reading file: ${file.name}`);
        throw error;
      }
    };

    const consolidateFiles = useCallback(async () => {
      setIsConsolidating(true);
      setIsParsing(true);
      toast.loading("Starting consolidation...");

      if (!consolidationFile) {
        toast.error("No Consolidation File is selected.");
        setIsConsolidating(false);
        setIsParsing(false);
        toast.dismiss();
        return;
      }

      if (attendanceFiles.length === 0) {
        toast.error("No Attendance Log is selected.");
        setIsConsolidating(false);
        setIsParsing(false);
        toast.dismiss();
        return;
      }

      try {
        // Parse Consolidation File
        const consolidationText = await getFileText(consolidationFile);

        const parsedConsolidation = readString<Student>(consolidationText, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim(),
          complete: () => {},
        }) as any;
        // Check if parsedConsolidation.data exists and has data
        if (
          !parsedConsolidation?.data ||
          parsedConsolidation.data.length === 0
        ) {
          toast.error("Consolidation File could not be parsed.");
          console.error(
            "CSV Parsing Error (Consolidation):",
            parsedConsolidation,
          );
          setIsConsolidating(false);
          setIsParsing(false);
          toast.dismiss();
          return;
        }

        // Access the results property instead of data
        const students = parsedConsolidation.data;
        const studentErrors = parsedConsolidation.errors || [];

        if (studentErrors.length > 0 || !students) {
          toast.error("Consolidation File could not be parsed.");
          console.error("CSV Parsing Error (Consolidation):", studentErrors);
          setIsConsolidating(false);
          setIsParsing(false);
          toast.dismiss();
          return;
        }

        // Create a map of students by name
        const studentsMap = new Map<string, Student>(
          students.map((student: Student) => [student.Name.trim(), student]),
        );

        console.log("Students Map:", studentsMap);

        const attendanceRecordsByDate: { [date: string]: AttendanceRecord[] } =
          {};

        // Parse Attendance Files
        for (const file of attendanceFiles) {
          const fileText = await getFileText(file);
          const parsedAttendance = readString<AttendanceRecord>(fileText, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (header) => header.trim(),
            complete: () => {},
          }) as any;

          if (!parsedAttendance?.data || parsedAttendance.data.length === 0) {
            toast.error(`Error parsing attendance log: ${file.name}`);
            console.error(
              "CSV Parsing Error (Attendance Log):",
              parsedAttendance,
            );
            setIsConsolidating(false);
            setIsParsing(false);
            toast.dismiss();
            return;
          }

          // Access the results property instead of data
          const records = parsedAttendance.data;
          const attendanceErrors = parsedAttendance.errors || [];

          if (attendanceErrors.length > 0 || !records) {
            toast.error(`Error parsing attendance log: ${file.name}`);
            console.error(
              "CSV Parsing Error (Attendance Log):",
              attendanceErrors,
            );
            setIsConsolidating(false);
            setIsParsing(false);
            toast.dismiss();
            return;
          }

          console.log("Attendance Header:", Object.keys(records[0] || {}));
          records.forEach((record: AttendanceRecord) => {
            const date = record.timeIn
              ? new Date(record.timeIn).toLocaleDateString()
              : "Unknown";

            if (date && record.Name) {
              if (!attendanceRecordsByDate[date]) {
                attendanceRecordsByDate[date] = [];
              }
              const student = studentsMap.get(record.Name.trim());

              if (student) {
                attendanceRecordsByDate[date].push({
                  ...record,
                  "User ID": student["User ID"],
                  Section: student.Section,
                  timeIn: formatTime(record.timeIn) || null,
                  timeOut: formatTime(record.timeOut) || null,
                });
              } else {
                console.warn(
                  `No matching student found for record: ${record.Name}`,
                );
              }
            }
          });
        }

        // Consolidate Data
        const consolidatedData: ConsolidatedData = {
          sections: {},
          dates: Object.keys(attendanceRecordsByDate),
        };

        for (const [date, records] of Object.entries(attendanceRecordsByDate)) {
          const sectionRecords: { [section: string]: ConsolidatedSection } = {};

          records.forEach((record) => {
            const sectionName = record.Section || "Unknown Section";

            if (!sectionRecords[sectionName]) {
              sectionRecords[sectionName] = {
                totalStudents: 0,
                students: [],
                timeInCount: 0,
                timeOutCount: 0,
              };
            }

            const { timeIn, timeOut } = record;

            if (timeIn) sectionRecords[sectionName].timeInCount++;
            if (timeOut) sectionRecords[sectionName].timeOutCount++;

            sectionRecords[sectionName].students.push({
              name: record.Name,
              timeIn,
              timeOut,
              userID: record["User ID"],
            });

            sectionRecords[sectionName].totalStudents++;
          });

          for (const [section, data] of Object.entries(sectionRecords)) {
            if (!consolidatedData.sections[section]) {
              consolidatedData.sections[section] = data;
            } else {
              consolidatedData.sections[section] = {
                totalStudents:
                  consolidatedData.sections[section].totalStudents +
                  data.totalStudents,
                students: [
                  ...consolidatedData.sections[section].students,
                  ...data.students,
                ],
                timeInCount:
                  consolidatedData.sections[section].timeInCount +
                  data.timeInCount,
                timeOutCount:
                  consolidatedData.sections[section].timeOutCount +
                  data.timeOutCount,
              };
            }
          }
        }

        onConsolidated(consolidatedData);
        toast.success("Consolidation complete!");
      } catch (error: any) {
        console.error("Error during consolidation:", error);
        toast.error("Error during consolidation, please check your files.");
      } finally {
        setIsConsolidating(false);
        setIsParsing(false);
        toast.dismiss();
      }
    }, [
      consolidationFile,
      attendanceFiles,
      onConsolidated,
      setIsConsolidating,
      setIsParsing,
      formatTime,
    ]);

    useImperativeHandle(ref, () => ({
      consolidateFiles,
    }));

    return null;
  },
);

Consolidator.displayName = "Consolidator";
export default Consolidator;