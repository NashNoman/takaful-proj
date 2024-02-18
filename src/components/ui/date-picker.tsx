"use client";

import * as React from "react";
import { format, subYears } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectSingleEventHandler } from "react-day-picker";
import { useState } from "react";

type Props = {
  className?: string;
  value: Date;
  onChange: SelectSingleEventHandler;
};

export function DatePicker({ className, value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const maxDate = subYears(new Date(), 18);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-auto justify-start text-left font-normal",
            className,
            !value && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          fromYear={1900}
          toYear={maxDate.getFullYear()}
          defaultMonth={maxDate}
          onSelect={(day, selectedDate, activeDate, e) => {
            onChange(day, selectedDate, activeDate, e);
            setIsOpen(false);
          }}
          disabled={(date) => date > maxDate || date < new Date("1900-01-01")}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
