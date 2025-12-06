import { Component } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BadgeDemo } from "@/app/(demos)/badge-demo";
import { CardDemo } from "@/app/(demos)/card-demo";
import { CheckboxDemo } from "@/app/(demos)/checkbox-demo";
import { SliderDemo } from "@/app/(demos)/slider-demo";
import { AccordionDemo } from "@/app/(demos)/accordion-demo";
import { DrawerDemo } from "@/app/(demos)/drawer-demo";
import { SwitchDemo } from "@/app/(demos)/switch-demo";

export function ArsenalShowcase() {
  return (
    <div id="showcase" className="container mx-auto px-8 py-20">
      <div className="mb-16 flex flex-col items-center">
        {/* Medieval banner with single triangle cut on each side */}
        <div className="px-8 py-4 bg-secondary " style={{
          clipPath: "polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%, 5% 50%)"
        }}>
          <h2 className="text-4xl font-bold md:text-5xl flex items-center gap-4 text-primary-foreground">
            <Component />The Arsenal <Component />
          </h2>
        </div>
        <p className="mt-4 text-muted-foreground">
          - Instruments of craft, forged for the modern realm -
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-16">
        {/* Buttons Section */}
        <div>
          <h3 className="mb-6 text-2xl font-bold">Command Elements</h3>
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        {/* Interactive Components */}
        <div>
          <h3 className="mb-6 text-2xl font-bold">Interactive Artifacts</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">Switch</p>
              <SwitchDemo />
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">Slider</p>
              <SliderDemo />
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">Checkbox</p>
              <CheckboxDemo />
            </div>
          </div>
        </div>

        {/* Display Components */}
        <div>
          <h3 className="mb-6 text-2xl font-bold">Display Constructs</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <BadgeDemo />
            <CardDemo />
            <AccordionDemo />
            <DrawerDemo />
          </div>
        </div>

      </div>
    </div>
  );
}
