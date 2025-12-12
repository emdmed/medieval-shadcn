import Ai02 from "./chat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IconPlus, IconHistory, IconSettings, IconCode, IconBulb, IconBug, IconBook } from "@tabler/icons-react";

const CAPABILITIES = [
  {
    icon: IconCode,
    title: "Craft Code",
    description: "Generate and explain the ancient scripts of programming",
  },
  {
    icon: IconBulb,
    title: "Seek Wisdom",
    description: "Answer thy questions with knowledge from the tomes",
  },
  {
    icon: IconBug,
    title: "Debug Curses",
    description: "Find and banish the demons that plague thy code",
  },
  {
    icon: IconBook,
    title: "Inscribe Scrolls",
    description: "Write comprehensive documentation and guides",
  },
];

const EXAMPLE_PROMPTS = [
  {
    category: "Coding Quests",
    prompts: [
      "Create a login spell with authentication",
      "Build a fortress API with REST",
      "Craft a responsive scroll layout",
    ],
  },
  {
    category: "Knowledge Seeking",
    prompts: [
      "Explain this ancient React rune",
      "What sorcery is TypeScript?",
      "How do async spells work?",
    ],
  },
  {
    category: "Debug Missions",
    prompts: [
      "Why does my code summon errors?",
      "Fix this broken enchantment",
      "Optimize my slow incantation",
    ],
  },
];

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">The Scribe&apos;s Chamber</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <IconPlus />
                New Scroll
              </Button>
              <Button variant="ghost" size="icon">
                <IconHistory />
              </Button>
              <Button variant="ghost" size="icon">
                <IconSettings />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        {/* Messages Area (Empty for now) */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-4xl">
              {/* Welcome Message */}
              <div className="mb-12 text-center">
                <div className="mb-4 text-6xl">📜</div>
                <h2 className="mb-4 text-4xl font-bold">How may I serve thee this day?</h2>
                <p className="text-lg text-muted-foreground">
                  Speak thy query or chooseth from the quests below
                </p>
              </div>

              {/* Capabilities */}
              <div className="mb-12 grid gap-4 md:grid-cols-2">
                {CAPABILITIES.map((capability) => {
                  const IconComponent = capability.icon;
                  return (
                    <Card key={capability.title}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <IconComponent className="h-5 w-5" />
                          {capability.title}
                        </CardTitle>
                        <CardDescription>{capability.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>

              <Separator className="my-8" />

              {/* Example Prompts */}
              <div className="space-y-6">
                <h3 className="text-center text-xl font-semibold">Quest Categories</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {EXAMPLE_PROMPTS.map((category) => (
                    <Card key={category.category}>
                      <CardHeader>
                        <CardTitle className="text-base">{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.prompts.map((prompt, index) => (
                            <li key={index}>
                              <Button
                                variant="ghost"
                                className="h-auto w-full justify-start whitespace-normal p-2 text-left text-sm"
                              >
                                {prompt}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Help Text */}
              <div className="mt-12 text-center text-sm text-muted-foreground">
                <p>The oracle remembers thy conversation throughout the session</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input Area (Fixed at Bottom) */}
        <div className="border-t bg-background">
          <div className="container mx-auto px-4 py-6">
            <div className="mx-auto max-w-3xl">
              <Ai02 />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
