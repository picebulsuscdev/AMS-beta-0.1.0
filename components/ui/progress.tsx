// components/ui/progress.tsx
import React from "react";

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export { Progress };
