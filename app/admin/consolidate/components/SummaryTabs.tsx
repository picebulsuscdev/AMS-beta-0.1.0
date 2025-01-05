// components/SummaryTabs.tsx
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EventOverview from "./EventOverview";
import StudentList from "./StudentList";

interface SummaryTabsProps {
  consolidatedData: any; // Replace 'any' with a more specific type if possible
  allAttendanceRecords: any;
  masterlistSections: string[];
}

const SummaryTabs: React.FC<SummaryTabsProps> = ({
  consolidatedData,
  allAttendanceRecords,
  masterlistSections,
}) => {
  const [activeTab, setActiveTab] = useState("eventOverview");

  return (
    <Tabs
      defaultValue="eventOverview"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <TabsList className="w-full flex justify-center">
        <TabsTrigger value="eventOverview">Event Overview</TabsTrigger>
        <TabsTrigger value="studentList">Student List</TabsTrigger>
      </TabsList>
      <TabsContent value="eventOverview">
        <EventOverview consolidatedData={consolidatedData} />
      </TabsContent>
      <TabsContent value="studentList">
        <StudentList
          allAttendanceRecords={allAttendanceRecords}
          masterlistSections={masterlistSections}
        />
      </TabsContent>
    </Tabs>
  );
};

export default SummaryTabs;
