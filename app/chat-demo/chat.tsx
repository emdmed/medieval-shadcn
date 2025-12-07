"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  IconAlertTriangle,
  IconArrowUp,
  IconFileSpark,
  IconGauge,
  IconPhotoScan,
} from "@tabler/icons-react";
import { useRef, useState } from "react";

const PROMPTS = [
  {
    icon: IconFileSpark,
    text: "Inscribe the scrolls",
    prompt:
      "Craft comprehensive scrolls of knowledge for this codebase, including instructions for setup, references to the ancient arts, and examples of usage.",
  },
  {
    icon: IconGauge,
    text: "Enhance swiftness",
    prompt:
      "Examine the codebase for bottlenecks in performance and suggest enchantments to improve loading times and runtime efficiency.",
  },
  {
    icon: IconAlertTriangle,
    text: "Vanquish 3 curses",
    prompt:
      "Search through the codebase to identify and banish 3 critical curses, providing detailed accounts for each exorcism.",
  },
];

const MODELS = [
  {
    value: "gpt-5",
    name: "The Grand Wizard",
    description: "Most powerful oracle",
  },
  {
    value: "gpt-4o",
    name: "The Swift Sage",
    description: "Quick and knowledgeable",
  },
  {
    value: "gpt-4",
    name: "The Wise Elder",
    description: "Reliable and precise",
  },
  {
    value: "claude-3.5",
    name: "The Code Scribe",
    description: "Master of ancient scripts",
  },
];

export default function Ai02() {
  const [inputValue, setInputValue] = useState("");
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handlePromptClick = (prompt: string) => {
    if (inputRef.current) {
      inputRef.current.value = prompt;
      setInputValue(prompt);
      inputRef.current.focus();
    }
  };

  const handleModelChange = (value: string) => {
    const model = MODELS.find((m) => m.value === value);
    if (model) {
      setSelectedModel(model);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <Card className="p-4">
        <Textarea
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Speak thy query unto the oracle..."
          className="mb-4"
        />

        <div className="flex items-center gap-2">
          <Select value={selectedModel.value} onValueChange={handleModelChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue>{selectedModel.name}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {MODELS.map((model) => (
                <SelectItem key={model.value} value={model.value}>
                  <div>
                    <div>{model.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {model.description}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" title="Attach illuminated manuscripts">
              <IconPhotoScan />
            </Button>

            <Button size="icon" disabled={!inputValue}>
              <IconArrowUp />
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-2">
        {PROMPTS.map((prompt) => {
          const IconComponent = prompt.icon;
          return (
            <Button
              key={prompt.text}
              variant="outline"
              onClick={() => handlePromptClick(prompt.prompt)}
            >
              <IconComponent />
              {prompt.text}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
