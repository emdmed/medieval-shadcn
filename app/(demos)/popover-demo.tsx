"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info } from "lucide-react";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Info className="mr-2 size-4" />
          Quest Info
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium">Quest Details</h4>
          <p className="text-sm text-muted-foreground">
            Journey to the ancient ruins and retrieve the lost artifact. Beware of the guardian dragon!
          </p>
          <div className="pt-2">
            <p className="text-xs font-semibold">Reward: 1000 gold</p>
            <p className="text-xs font-semibold">Difficulty: Hard</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
