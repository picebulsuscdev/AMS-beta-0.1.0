import React, { useRef } from "react";
import { useAccordion, useAccordionItem } from "@react-aria/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

interface AccordionItemProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  value: string;
}

const AccordionItem = ({ title, children, value }: AccordionItemProps) => {
  const ref = useRef(null);
  const { buttonProps, contentProps, isExpanded } = useAccordionItem(
    {
      value,
    },
    ref,
  );

  return (
    <div className="border rounded-md mt-2">
      <Button
        {...buttonProps}
        variant="ghost"
        className="flex justify-between items-center w-full py-2 text-left border-b"
        ref={ref}
      >
        {title}
        {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
      <div
        {...contentProps}
        className={`overflow-hidden transition-all ${
          isExpanded ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
}

const Accordion = ({
  children,
  type = "single",
  defaultValue,
  value,
  onChange,
}: AccordionProps) => {
  const ref = useRef(null);
  const { accordionProps } = useAccordion(
    {
      children,
      defaultExpandedKeys: defaultValue ? [defaultValue].flat() : undefined,
      expandedKeys: value ? [value].flat() : undefined,
      onExpandedChange: (keys) => {
        if (onChange) {
          onChange(type === "single" ? keys[0] : Array.from(keys));
        }
      },
      disabledKeys: [],
      selectionMode: type,
    },
    ref,
  );

  return (
    <div {...accordionProps} ref={ref} className="space-y-2">
      {children}
    </div>
  );
};

export { Accordion, AccordionItem };
