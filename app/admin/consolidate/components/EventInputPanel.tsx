// components/EventInputPanel.tsx
import React from "react";
import { Input } from "@/components/ui/input";

interface EventInputPanelProps {
  eventName: string;
  setEventName: (name: string) => void;
}

const EventInputPanel: React.FC<EventInputPanelProps> = ({
  eventName,
  setEventName,
}) => {
  return (
    <div className="mb-4">
      <Input
        type="text"
        placeholder="Enter Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="text-lg font-semibold"
      />
    </div>
  );
};

export default EventInputPanel;
