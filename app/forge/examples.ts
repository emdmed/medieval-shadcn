import { CodeExample } from "@/types/docs";

export const installationExamples: CodeExample[] = [
  {
    title: "Initialize shadcn/ui",
    language: "bash",
    code: `npx shadcn@latest init`,
    description: "Set up shadcn/ui in your project first (if not already done)",
  },
  {
    title: "Install a component",
    language: "bash",
    code: `npx medievalui add button`,
    description: "Install the button component with all its dependencies",
  },
  {
    title: "Install multiple components",
    language: "bash",
    code: `npx medievalui add button card badge`,
    description: "Install multiple components at once",
  },
  {
    title: "Install styles",
    language: "bash",
    code: `npx medievalui add styles`,
    description: "Copy the medieval-themed globals.css to your project",
  },
  {
    title: "List all components",
    language: "bash",
    code: `npx medievalui list`,
    description: "View all available components",
  },
];

export const usageExamples: CodeExample[] = [
  {
    title: "Button Usage",
    language: "tsx",
    code: `import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <div className="flex gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`,
    description: "Basic button usage with different variants",
  },
  {
    title: "Card Usage",
    language: "tsx",
    code: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>The Quest Begins</CardTitle>
        <CardDescription>
          Embark on a journey through the medieval realm
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your adventure starts here...</p>
      </CardContent>
      <CardFooter>
        <Button>Begin Quest</Button>
      </CardFooter>
    </Card>
  )
}`,
    description: "Complete card example with all sections",
  },
  {
    title: "Form with Validation",
    language: "tsx",
    code: `import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

export function MyForm() {
  const form = useForm()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="kingdom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kingdom Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter thy kingdom..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`,
    description: "Form with react-hook-form integration",
  },
];

export const configurationExamples: CodeExample[] = [
  {
    title: "components.json",
    language: "json",
    code: `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`,
    description: "Required shadcn/ui configuration file",
  },
  {
    title: "tailwind.config.ts",
    language: "typescript",
    code: `import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}

export default config`,
    description: "Tailwind CSS configuration",
  },
  {
    title: "Theme Provider Setup",
    language: "tsx",
    code: `import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem
      themes={["light", "dark", "estel", "estel-dark", "haldir", "haldir-dark"]}
    >
      {children}
    </ThemeProvider>
  )
}`,
    description: "Set up theme provider for medieval themes",
  },
];

export const themeExamples: CodeExample[] = [
  {
    title: "Theme Switcher",
    language: "tsx",
    code: `"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex gap-2">
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("estel")}>Estel</Button>
      <Button onClick={() => setTheme("haldir")}>Haldir</Button>
    </div>
  )
}`,
    description: "Simple theme switcher component",
  },
];
