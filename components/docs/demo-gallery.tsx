import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "./code-block";
import { demosByCategory } from "@/app/forge/demo-data";

export function DemoGallery() {
  return (
    <div className="space-y-12">
      {Object.entries(demosByCategory).map(([category, demos]) => (
        <div key={category}>
          <h4 className="mb-6 text-2xl font-bold">{category}</h4>
          <div className="grid gap-6 md:grid-cols-2">
            {demos.map((demo) => (
              <Card
                key={demo.name}
                className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{demo.medievalName}</CardTitle>
                      <p className="mt-1 font-mono text-sm text-muted-foreground">
                        {demo.name}
                      </p>
                    </div>
                    <Badge>{demo.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="preview">
                    <TabsList className="w-full">
                      <TabsTrigger value="preview" className="flex-1">
                        Preview
                      </TabsTrigger>
                      <TabsTrigger value="code" className="flex-1">
                        Code
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="mt-4">
                      <div className="flex min-h-[200px] items-center justify-center rounded-lg border bg-muted/50 p-8">
                        <demo.component />
                      </div>
                    </TabsContent>
                    <TabsContent value="code" className="mt-4">
                      <CodeBlock language="tsx">{demo.code}</CodeBlock>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
