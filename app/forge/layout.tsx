import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Forge - Medieval UI Documentation",
  description: "Comprehensive guide to Medieval UI components, themes, and customization. Learn to build beautiful medieval-themed interfaces with 56 crafted components and 6 unique themes.",
  keywords: "medieval ui, react components, nextjs, tailwind, shadcn, ui library, medieval design",
};

export default function ForgeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
