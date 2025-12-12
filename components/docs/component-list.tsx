import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { components, componentsByCategory } from "@/app/forge/data";
import { CopyButton } from "./copy-button";
import { Button } from "@/components/ui/button";

const categoryColors: Record<string, string> = {
  input: "bg-blue-500/10 text-blue-500",
  display: "bg-green-500/10 text-green-500",
  navigation: "bg-purple-500/10 text-purple-500",
  overlay: "bg-orange-500/10 text-orange-500",
  form: "bg-pink-500/10 text-pink-500",
  layout: "bg-cyan-500/10 text-cyan-500",
  data: "bg-yellow-500/10 text-yellow-500",
  feedback: "bg-red-500/10 text-red-500",
};

const categoryLabels: Record<string, string> = {
  input: "Input",
  display: "Display",
  navigation: "Navigation",
  overlay: "Overlay",
  form: "Form",
  layout: "Layout",
  data: "Data",
  feedback: "Feedback",
};

export function ComponentList() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-3xl font-bold">The Arsenal</h3>
        <p className="text-lg text-muted-foreground">
          Browse all {components.length} medieval artifacts. Each component is crafted with attention to detail and medieval aesthetics.
        </p>
      </div>

      {Object.entries(componentsByCategory).map(([category, categoryComponents]) => (
        <div key={category} className="space-y-6">
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-bold">{categoryLabels[category]}</h4>
            <Badge variant="secondary">{categoryComponents.length} components</Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categoryComponents.map((component) => (
              <Card key={component.name} className="group flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{component.medievalName}</CardTitle>
                      <p className="mt-1 text-sm font-mono text-muted-foreground">{component.name}</p>
                    </div>
                    <Badge className={categoryColors[component.category]} variant="secondary">
                      {categoryLabels[component.category]}
                    </Badge>
                  </div>
                  <CardDescription className="mt-2">
                    {component.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  {component.dependencies.length > 0 && (
                    <div>
                      <p className="mb-2 text-xs font-semibold text-muted-foreground">Dependencies:</p>
                      <div className="flex flex-wrap gap-1">
                        {component.dependencies.map((dep) => (
                          <Badge key={dep} variant="outline" className="text-xs">
                            {dep}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex items-center gap-2">
                  <div className="flex-1 overflow-hidden rounded-md border bg-muted/50 px-3 py-2 transition-colors group-hover:bg-muted">
                    <code className="text-xs">{component.installCommand}</code>
                  </div>
                  <CopyButton
                    text={component.installCommand}
                    successMessage={`${component.name} install command copied`}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Each component comes with full TypeScript support and follows React best practices. All dependencies are automatically installed when you add a component.
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/medieval-ui/medieval-ui" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
