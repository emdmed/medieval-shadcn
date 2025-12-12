import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "./code-block";

const themes = [
  {
    name: "light",
    displayName: "Light Theme",
    description: "The default medieval parchment theme with warm beige tones",
    isDark: false,
    colors: ["#d4af37", "#8b4513", "#f5e6d3", "#2c1810"],
  },
  {
    name: "dark",
    displayName: "Dark Theme",
    description: "A darker medieval theme inspired by castle chambers at night",
    isDark: true,
    colors: ["#d4af37", "#8b4513", "#1a1410", "#f5e6d3"],
  },
  {
    name: "estel",
    displayName: "Estel Theme",
    description: "LOTR-inspired parchment theme with elvish elegance",
    isDark: false,
    colors: ["#c9a961", "#8b7355", "#f4efe8", "#3d2817"],
  },
  {
    name: "estel-dark",
    displayName: "Estel Dark",
    description: "Dark variant inspired by Moria and Mirkwood",
    isDark: true,
    colors: ["#c9a961", "#8b7355", "#1c1814", "#f4efe8"],
  },
  {
    name: "haldir",
    displayName: "Haldir Theme",
    description: "Lothlórien elven guard theme with gold and crimson",
    isDark: false,
    colors: ["#d4af37", "#8b0000", "#faf8f3", "#2d1b1b"],
  },
  {
    name: "haldir-dark",
    displayName: "Haldir Dark",
    description: "Night guard variant with deep burgundy tones",
    isDark: true,
    colors: ["#d4af37", "#8b0000", "#1a1214", "#faf8f3"],
  },
];

export function ThemeShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-3xl font-bold">The Tapestry</h3>
        <p className="text-lg text-muted-foreground">
          Choose from 6 beautifully crafted medieval themes. Each theme provides a unique visual experience while maintaining consistency across all components.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {themes.map((theme) => (
          <Card key={theme.name} className="group transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="group-hover:text-primary transition-colors">{theme.displayName}</CardTitle>
                <Badge variant={theme.isDark ? "secondary" : "outline"}>
                  {theme.isDark ? "Dark" : "Light"}
                </Badge>
              </div>
              <CardDescription>{theme.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="mb-2 text-xs font-semibold text-muted-foreground">Color Palette</p>
                  <div className="grid grid-cols-4 gap-2">
                    {theme.colors.map((color, index) => (
                      <div key={index} className="space-y-1">
                        <div
                          className="h-12 w-full rounded-md border shadow-sm transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                        />
                        <p className="text-center text-xs font-mono text-muted-foreground">
                          {color}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-md border bg-muted/50 px-3 py-2">
                  <code className="text-xs">data-theme=&quot;{theme.name}&quot;</code>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Using Themes</CardTitle>
          <CardDescription>
            Set up theme switching in your application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-3 font-semibold">Install next-themes</h4>
            <CodeBlock language="bash">
              {`npm install next-themes`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Set up ThemeProvider</h4>
            <CodeBlock language="tsx">
              {`// app/layout.tsx
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          themes={["light", "dark", "estel", "estel-dark", "haldir", "haldir-dark"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Create Theme Switcher</h4>
            <CodeBlock language="tsx">
              {`"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() => setTheme("light")}
        variant={theme === "light" ? "default" : "outline"}
      >
        Light
      </Button>
      <Button
        onClick={() => setTheme("dark")}
        variant={theme === "dark" ? "default" : "outline"}
      >
        Dark
      </Button>
      <Button
        onClick={() => setTheme("estel")}
        variant={theme === "estel" ? "default" : "outline"}
      >
        Estel
      </Button>
      <Button
        onClick={() => setTheme("haldir")}
        variant={theme === "haldir" ? "default" : "outline"}
      >
        Haldir
      </Button>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Theme Customization</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            All themes use CSS custom properties (variables) defined in <code className="rounded bg-muted px-1 py-0.5">globals.css</code>.
            You can customize any theme by modifying these variables in your own stylesheet.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
