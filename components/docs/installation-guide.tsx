import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "./code-block";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export function InstallationGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-3xl font-bold">Installation & Setup</h3>
        <p className="text-lg text-muted-foreground">
          Learn how to set up Medieval UI in your project and configure it for optimal use.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Prerequisites</CardTitle>
          <CardDescription>
            Before installing Medieval UI, ensure you have these tools ready
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Required Software</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Node.js 18.0.0 or higher</li>
              <li>npm, pnpm, or yarn package manager</li>
              <li>A Next.js 13+ project (App Router)</li>
              <li>Tailwind CSS v4 configured</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h4 className="text-2xl font-bold">Step-by-Step Installation</h4>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="step-1">
            <AccordionTrigger className="text-lg font-semibold">
              Step 1: Initialize shadcn/ui
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="text-muted-foreground">
                Medieval UI is built on top of shadcn/ui. If you haven&apos;t already, initialize shadcn/ui in your project:
              </p>
              <CodeBlock language="bash">
                {`npx shadcn@latest init`}
              </CodeBlock>
              <p className="text-sm text-muted-foreground">
                This will create a <code className="rounded bg-muted px-1 py-0.5">components.json</code> file and set up your project structure.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-2">
            <AccordionTrigger className="text-lg font-semibold">
              Step 2: Install Medieval Styles
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="text-muted-foreground">
                Install the medieval-themed global styles to get the full medieval aesthetic:
              </p>
              <CodeBlock language="bash">
                {`npx medievalui add styles`}
              </CodeBlock>
              <p className="text-sm text-muted-foreground">
                This copies the <code className="rounded bg-muted px-1 py-0.5">globals.css</code> file with medieval themes to your project.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-3">
            <AccordionTrigger className="text-lg font-semibold">
              Step 3: Install Components
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="text-muted-foreground">
                Install any component you need. The CLI automatically handles all dependencies:
              </p>
              <CodeBlock language="bash">
                {`# Install a single component
npx medievalui add button

# Install multiple components
npx medievalui add button card badge

# List all available components
npx medievalui list`}
              </CodeBlock>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-4">
            <AccordionTrigger className="text-lg font-semibold">
              Step 4: Configure Theme Provider (Optional)
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="text-muted-foreground">
                To enable theme switching between the 6 medieval themes, set up next-themes:
              </p>
              <CodeBlock language="bash">
                {`npm install next-themes`}
              </CodeBlock>
              <p className="text-sm text-muted-foreground">
                Then wrap your app with the ThemeProvider:
              </p>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Alert>
        <AlertCircle className="size-4" />
        <AlertDescription>
          <strong>Important:</strong> Medieval UI components require the <code className="rounded bg-muted px-1 py-0.5">@/*</code> path alias to be configured in your tsconfig.json. This is automatically set up by shadcn/ui init.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Troubleshooting</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="issue-1">
              <AccordionTrigger>Styles not applying</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm">
                <p>Make sure your <code className="rounded bg-muted px-1 py-0.5">globals.css</code> is imported in your root layout:</p>
                <CodeBlock language="tsx">
                  {`import './globals.css'`}
                </CodeBlock>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="issue-2">
              <AccordionTrigger>Components not found</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm">
                <p>Verify your <code className="rounded bg-muted px-1 py-0.5">components.json</code> has the correct path alias configured:</p>
                <CodeBlock language="json">
                  {`{
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`}
                </CodeBlock>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="issue-3">
              <AccordionTrigger>TypeScript errors</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm">
                <p>Ensure your <code className="rounded bg-muted px-1 py-0.5">tsconfig.json</code> includes the path mappings:</p>
                <CodeBlock language="json">
                  {`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}
                </CodeBlock>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
