import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "./code-block";
import { CheckCircle2 } from "lucide-react";

export function QuickStart() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-3xl font-bold">Begin Your Quest</h3>
        <p className="text-lg text-muted-foreground">
          Welcome, brave developer, to the Medieval UI Forge. Here you shall learn to craft interfaces worthy of the ancient kingdoms. Follow these scrolls to begin your journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-2xl font-bold text-primary">I</span>
            </div>
            <CardTitle>Prepare Your Smithy</CardTitle>
            <CardDescription>
              Ensure your development realm is ready
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Node.js 18 or higher</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>React 18 or higher</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Next.js 13+ (App Router)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Tailwind CSS v4</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-2xl font-bold text-primary">II</span>
            </div>
            <CardTitle>Forge Your First Artifact</CardTitle>
            <CardDescription>
              Install your first medieval component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock language="bash">
              {`# Initialize shadcn/ui first
npx shadcn@latest init

# Install button component
npx medievalui add button`}
            </CodeBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-2xl font-bold text-primary">III</span>
            </div>
            <CardTitle>Wield Your Creation</CardTitle>
            <CardDescription>
              Use the component in your code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock language="tsx">
              {`import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Summon Action</Button>
}`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Quick Tip</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The medieval-ui CLI automatically installs all required dependencies for each component. You don&apos;t need to manually install Radix UI or other packages.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
