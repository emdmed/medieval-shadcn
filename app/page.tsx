import { HeroDemo } from "./(demos)/hero-demo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArsenalShowcase } from "@/components/arsenal-showcase";

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
      <ArsenalShowcase />
    </div>
  );
}
