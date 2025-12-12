"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <div className="w-full max-w-sm">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose thy class..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="knight">Knight</SelectItem>
          <SelectItem value="archer">Archer</SelectItem>
          <SelectItem value="wizard">Wizard</SelectItem>
          <SelectItem value="rogue">Rogue</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
