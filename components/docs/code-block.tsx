"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  language: string;
  children: string;
  title?: string;
}

export function CodeBlock({ language, children, title }: CodeBlockProps) {
  return (
    <div className="group relative my-4 overflow-hidden rounded-lg border-2 border-muted transition-all hover:border-primary/50">
      {title && (
        <div className="border-b bg-muted px-4 py-2">
          <p className="text-sm font-medium">{title}</p>
        </div>
      )}
      <div className="relative">
        <div className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
          <CopyButton text={children.trim()} successMessage="Code copied to clipboard" />
        </div>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            background: "hsl(var(--muted) / 0.5)",
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-mono)",
            },
          }}
        >
          {children.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
