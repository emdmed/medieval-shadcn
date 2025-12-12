export interface ComponentMetadata {
  name: string;
  medievalName: string;
  category: "input" | "display" | "navigation" | "overlay" | "form" | "layout" | "data" | "feedback";
  description: string;
  installCommand: string;
  dependencies: string[];
  hasDemo: boolean;
}

export interface CodeExample {
  title: string;
  language: "bash" | "tsx" | "typescript" | "json" | "css";
  code: string;
  description?: string;
}

export interface ThemeInfo {
  name: string;
  displayName: string;
  description: string;
  isDark: boolean;
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}
