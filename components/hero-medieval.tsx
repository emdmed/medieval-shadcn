import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function HeroMedieval() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid min-h-screen grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="flex flex-col">
          <Badge variant="secondary" className="w-fit">
            SOON
          </Badge>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            Components Forged
            <br />
            in Ancient Tradition
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Tempered with geometric precision. Wrought upon the anvil of shadcn/ui.
            Each piece crafted for the modern realm.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#showcase">+ Enter the Arsenal +</a>
            </Button>
            <Button size="lg" variant="outline" disabled>
              The Scrolls
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex items-center justify-center">
          <div className="aspect-square w-full border-6 border-primary border-double bg-muted">
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
