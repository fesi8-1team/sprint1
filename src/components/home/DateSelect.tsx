"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function DateSelect() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Select>
        <SelectTrigger className="w-auto">
          <SelectValue
            placeholder={date ? date.toLocaleDateString() : "날짜 선택"}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow"
            />
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
