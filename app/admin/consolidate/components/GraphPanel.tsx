import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

interface GraphPanelProps {
  consolidatedData: {
    sections?: { [key: string]: ConsolidatedSection } | undefined;
    dates?: string[] | undefined;
  } | null;
}

export const GraphPanel: React.FC<GraphPanelProps> = ({ consolidatedData }) => {
  const data = useMemo(() => {
    if (!consolidatedData?.sections) return [];

    // Transform and sort data alphabetically by section
    return Object.entries(consolidatedData.sections)
      .map(([section, data]) => ({
        section,
        totalStudents: data.totalStudents,
        timeIn: data.timeInCount,
        timeOut: data.timeOutCount,
      }))
      .sort((a, b) => a.section.localeCompare(b.section)); // Sort by section
  }, [consolidatedData]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="section" />
        <YAxis />
        <Tooltip />
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{ paddingTop: 10 }} // Add spacing between chart and legend
        />
        <Bar dataKey="totalStudents" fill="#808080" name="Total Students" />
        <Bar dataKey="timeIn" fill="#82ca9d" name="Time In" />
        <Bar dataKey="timeOut" fill="#8884d8" name="Time Out" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphPanel;
