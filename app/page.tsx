import { HeroDemo } from "./(demos)/hero-demo";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArsenalShowcase } from "@/components/arsenal-showcase";
import { Button } from "@/components/ui/button";
import { BookOpen, Scroll, Palette, Flame } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <HeroDemo />

      {/* Component Gallery */}
      <ArsenalShowcase />
    </div>
  );
}
