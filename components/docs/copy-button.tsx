"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
  successMessage?: string;
  className?: string;
}

export function CopyButton({ text, successMessage = "Copied to clipboard", className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      toast.success(successMessage);
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleCopy}
      className={className}
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </Button>
  );
}
