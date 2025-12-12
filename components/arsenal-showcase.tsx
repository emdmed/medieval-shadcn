import { Component, Sword, Shield, Sparkles, Wand2, Layout, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
            <Component />The Gallery <Component />
          </h2>
        </div>
        <p className="mt-4 text-muted-foreground">
          - A collection of artifacts, forged for the modern realm -
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-20">
        {/* Command Elements Section */}
        <div className="border-4 border-secondary/60 bg-gradient-to-b from-primary/5 to-card p-8 md:p-10 lg:p-12 rounded" style={{ borderStyle: "groove" }}>
          <div className="mb-8 flex flex-col items-start">
            <div className="px-6 py-3 bg-secondary/90 shadow-md" style={{
              clipPath: "polygon(0% 0%, 100% 0%, 98% 50%, 100% 100%, 0% 100%, 2% 50%)"
            }}>
              <h3 className="text-2xl font-bold flex items-center gap-3 text-secondary-foreground">
                <Sword className="w-5 h-5" />
                Command Elements
                <Shield className="w-5 h-5" />
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              - Interactive controls to command your interface -
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <Card className="flex flex-col items-center justify-center p-6 min-h-[140px] hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center gap-3 p-0">
                <Button>Primary</Button>
                <p className="text-xs text-muted-foreground text-center">
                  · Primary Action ·
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center justify-center p-6 min-h-[140px] hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center gap-3 p-0">
                <Button variant="secondary">Secondary</Button>
                <p className="text-xs text-muted-foreground text-center">
                  · Secondary Action ·
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center justify-center p-6 min-h-[140px] hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center gap-3 p-0">
                <Button variant="outline">Outline</Button>
                <p className="text-xs text-muted-foreground text-center">
                  · Outlined Style ·
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center justify-center p-6 min-h-[140px] hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center gap-3 p-0">
                <Button variant="ghost">Ghost</Button>
                <p className="text-xs text-muted-foreground text-center">
                  · Subtle Presence ·
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center justify-center p-6 min-h-[140px] hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center gap-3 p-0">
                <Button variant="destructive">Destructive</Button>
                <p className="text-xs text-muted-foreground text-center">
                  · Destructive Action ·
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <div className="text-primary text-xl">•</div>
          <Separator className="flex-1" />
        </div>

        {/* Interactive Artifacts Section */}
        <div className="border-4 border-secondary/60 bg-gradient-to-b from-primary/5 to-card p-8 md:p-10 lg:p-12 rounded" style={{ borderStyle: "groove" }}>
          <div className="mb-8 flex flex-col items-start">
            <div className="px-6 py-3 bg-secondary/90 shadow-md" style={{
              clipPath: "polygon(0% 0%, 100% 0%, 98% 50%, 100% 100%, 0% 100%, 2% 50%)"
            }}>
              <h3 className="text-2xl font-bold flex items-center gap-3 text-secondary-foreground">
                <Sparkles className="w-5 h-5" />
                Interactive Artifacts
                <Wand2 className="w-5 h-5" />
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              - Components that respond to user interactions -
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-secondary/30">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Component className="w-4 h-4" />
                  Switch Component
                </CardTitle>
                <CardDescription>
                  Toggle between on and off states with medieval styling
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 flex items-center justify-center min-h-[100px]">
                <SwitchDemo />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-secondary/30">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Component className="w-4 h-4" />
                  Slider Component
                </CardTitle>
                <CardDescription>
                  Select values from a range with draggable controls
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 flex items-center justify-center min-h-[100px]">
                <SliderDemo />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-secondary/30">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Component className="w-4 h-4" />
                  Checkbox Component
                </CardTitle>
                <CardDescription>
                  Binary selection controls for forms and lists
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 flex items-center justify-center min-h-[100px]">
                <CheckboxDemo />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <div className="text-primary text-xl">•</div>
          <Separator className="flex-1" />
        </div>

        {/* Display Constructs Section */}
        <div className="border-4 border-secondary/60 bg-gradient-to-b from-primary/5 to-card p-8 md:p-10 lg:p-12 rounded" style={{ borderStyle: "groove" }}>
          <div className="mb-8 flex flex-col items-start">
            <div className="px-6 py-3 bg-secondary/90 shadow-md" style={{
              clipPath: "polygon(0% 0%, 100% 0%, 98% 50%, 100% 100%, 0% 100%, 2% 50%)"
            }}>
              <h3 className="text-2xl font-bold flex items-center gap-3 text-secondary-foreground">
                <Layout className="w-5 h-5" />
                Display Constructs
                <Boxes className="w-5 h-5" />
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              - Components that present content and information -
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="border-b border-secondary/30">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Component className="w-4 h-4" />
                  Badge
                </CardTitle>
                <CardDescription>
                  Small status indicators and labels for categorization
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <BadgeDemo />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="border-b border-secondary/30">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Component className="w-4 h-4" />
                  Card
                </CardTitle>
                <CardDescription>
                  Content containers with medieval borders and styling
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 flex items-center justify-center bg-muted/30 min-h-[300px]">
                <div className="scale-90 origin-center">
                  <CardDemo />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="border-b border-secondary/30">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Component className="w-4 h-4" />
                  Accordion
                </CardTitle>
                <CardDescription>
                  Collapsible content sections for organized information
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <AccordionDemo />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="border-b border-secondary/30">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Component className="w-4 h-4" />
                  Drawer
                </CardTitle>
                <CardDescription>
                  Sliding panels for additional content and navigation
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <DrawerDemo />
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
