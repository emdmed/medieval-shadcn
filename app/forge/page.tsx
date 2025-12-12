import Link from "next/link";
import { SectionBanner } from "@/components/docs/section-banner";
import { QuickStart } from "@/components/docs/quick-start";
import { InstallationGuide } from "@/components/docs/installation-guide";
import { ComponentList } from "@/components/docs/component-list";
import { ThemeShowcase } from "@/components/docs/theme-showcase";
import { DemoGallery } from "@/components/docs/demo-gallery";
import { MobileNav } from "@/components/docs/mobile-nav";
import { Separator } from "@/components/ui/separator";
import { Flame, Scroll, Sword, Palette, Home, ArrowUp, Github, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ForgePage() {
  return (
    <div className="scroll-smooth font-sans">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="size-5 text-primary" />
              <span className="font-semibold">Medieval UI</span>
              <Badge variant="secondary" className="ml-2">v0.0.4</Badge>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              <a href="#quick-start" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Quick Start
              </a>
              <a href="#installation" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Installation
              </a>
              <a href="#components" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Components
              </a>
              <a href="#demos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Demos
              </a>
              <a href="#themes" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Themes
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                <a href="https://github.com/medieval-ui/medieval-ui" target="_blank" rel="noopener noreferrer">
                  <Github className="size-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
                <Link href="/">
                  <Home className="mr-2 size-4" />
                  Home
                </Link>
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="mb-20 flex flex-col items-center text-center">
            <SectionBanner
              title="The Forge"
              icon={Flame}
              description="Where artifacts are forged for the modern realm"
            />
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Medieval UI is a collection of 56 beautifully crafted components with medieval aesthetics,
              built on top of shadcn/ui. Install components via CLI, customize to your needs, and create
              interfaces worthy of the ancient kingdoms.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#quick-start">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#components">Browse Components</a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="https://github.com/medieval-ui/medieval-ui" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 size-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Statistics */}
          <div className="mb-20 grid gap-6 md:grid-cols-3">
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Sword className="size-8 text-primary" />
                <CardTitle className="text-3xl">56</CardTitle>
                <CardDescription>Medieval Components</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From buttons to charts, every component crafted with medieval detail
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Palette className="size-8 text-primary" />
                <CardTitle className="text-3xl">6</CardTitle>
                <CardDescription>Unique Themes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Light and dark variants inspired by medieval and LOTR aesthetics
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Scroll className="size-8 text-primary" />
                <CardTitle className="text-3xl">CLI</CardTitle>
                <CardDescription>Install Tool</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  One command to install components with all dependencies
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-20" />

          {/* Quick Start Section */}
          <section id="quick-start" className="scroll-mt-24">
            <QuickStart />
          </section>

          <Separator className="my-20" />

          {/* Installation Guide Section */}
          <section id="installation" className="scroll-mt-24">
            <InstallationGuide />
          </section>

          <Separator className="my-20" />

          {/* Components Section */}
          <section id="components" className="scroll-mt-24">
            <ComponentList />
          </section>

          <Separator className="my-20" />

          {/* Demos Section */}
          <section id="demos" className="scroll-mt-24">
            <div className="space-y-8">
              <div>
                <SectionBanner
                  title="Interactive Demos"
                  icon={Sparkles}
                  description="Live examples of components in action"
                />
                <p className="mt-6 text-lg text-muted-foreground">
                  Explore live examples of every component. Switch between preview and code to see implementation details.
                  All demos feature medieval theming and follow best practices for accessibility.
                </p>
              </div>
              <DemoGallery />
            </div>
          </section>

          <Separator className="my-20" />

          {/* Themes Section */}
          <section id="themes" className="scroll-mt-24">
            <ThemeShowcase />
          </section>

          {/* Footer */}
          <div className="mt-20 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Built with ⚔️ by the Medieval UI community
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Open source and free to use. Based on shadcn/ui and Radix UI.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <Button
          size="icon"
          className="size-12 rounded-full shadow-lg"
          asChild
        >
          <a href="#" aria-label="Back to top">
            <ArrowUp className="size-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}
