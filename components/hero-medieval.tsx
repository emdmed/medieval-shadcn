import * as React from "react"
import { Button } from "@/components/ui/button"
import { Flower, Component } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function HeroMedieval() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10">
        <ThemeToggle />
      </div>
      <div className="grid min-h-[calc(100vh-8rem)] grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="flex flex-col space-y-6">


          <div className="flex gap-4 items-center sm:gap-6">
            <div className="hidden sm:flex gap-2 items-center shrink-0">
              <Flower className="w-5 h-5 sm:w-6 sm:h-6" />
              <Component className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-5xl leading-tight">
              Components Forged
              <br />
              in Ancient Tradition
            </h1>
            <div className="hidden sm:flex gap-2 items-center shrink-0">
              <Component className="w-5 h-5 sm:w-6 sm:h-6" />
              <Flower className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            Tempered with geometric precision. Wrought upon the anvil of shadcn/ui.
            Each piece crafted for the modern realm.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Button size="lg" asChild>
              <a href="#showcase">+ Enter the Arsenal +</a>
            </Button>
            <Button size="lg" variant="outline" disabled>
              The Scrolls
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <div className="aspect-square w-full max-w-md lg:max-w-full border-4 sm:border-6 border-primary border-double bg-muted">
            <img
              src="/images/lady-unicorn.jpg"
              alt="Medieval components showcase"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
