"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sword, Shield, Scroll, Crown } from "lucide-react";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Royal Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Kingdom Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Sword className="mr-2 size-4" />
          Raise Army
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Shield className="mr-2 size-4" />
          Fortify Walls
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Scroll className="mr-2 size-4" />
          Draft Decree
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Crown className="mr-2 size-4" />
          Hold Court
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
