"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Sword, Shield, Scroll, Crown, Castle } from "lucide-react";

export function CommandDemo() {
  return (
    <Command className="w-full max-w-md rounded-lg border shadow-md">
      <CommandInput placeholder="Search kingdom commands..." />
      <CommandList>
        <CommandEmpty>No commands found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <Sword className="mr-2 size-4" />
            <span>Raise Army</span>
          </CommandItem>
          <CommandItem>
            <Shield className="mr-2 size-4" />
            <span>Fortify Defenses</span>
          </CommandItem>
          <CommandItem>
            <Scroll className="mr-2 size-4" />
            <span>Draft Decree</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Administration">
          <CommandItem>
            <Crown className="mr-2 size-4" />
            <span>Hold Court</span>
          </CommandItem>
          <CommandItem>
            <Castle className="mr-2 size-4" />
            <span>Manage Castles</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
