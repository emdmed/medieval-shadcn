import { HeroDemo } from "./(demos)/hero-demo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialogDemo } from "./(demos)/alert-dialog-demo";
import { BadgeDemo } from "./(demos)/badge-demo";
import { CardDemo } from "./(demos)/card-demo";
import { CheckboxDemo } from "./(demos)/checkbox-demo";
import { SliderDemo } from "./(demos)/slider-demo";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <HeroDemo />

      {/* Under Construction */}
      <div className="container mx-auto px-8 py-12">
        <Card className="mx-auto max-w-2xl overflow-hidden pb-0">
          <CardHeader>
            <CardTitle>Under Construction</CardTitle>
            <CardDescription>
              The forge burns bright. New artifacts are being crafted in the smithy.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <img
              src="/images/construction.jpg"
              alt="Under construction"
              className="h-full w-full object-cover"
            />
          </CardContent>
        </Card>
      </div>

      {/* Component Demos */}
      <div id="showcase" className="container mx-auto px-8 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">The Arsenal</h2>
          <p className="mt-4 text-muted-foreground">
            Instruments of craft, forged for the modern realm
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
            </div>
          </div>

          {/* Interactive Components */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Interactive Artifacts</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">Slider</p>
                <SliderDemo />
              </div>
              <div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">Checkbox</p>
                <CheckboxDemo />
              </div>
              <div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">Badge</p>
                <BadgeDemo />
              </div>
            </div>
          </div>

          {/* Display Components */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Display Constructs</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <CardDemo />
              <AlertDialogDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
