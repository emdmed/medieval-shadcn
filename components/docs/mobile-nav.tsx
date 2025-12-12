"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 border-b bg-background px-8 py-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            <a
              href="#quick-start"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Quick Start
            </a>
            <a
              href="#installation"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Installation
            </a>
            <a
              href="#components"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Components
            </a>
            <a
              href="#demos"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Demos
            </a>
            <a
              href="#themes"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Themes
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
