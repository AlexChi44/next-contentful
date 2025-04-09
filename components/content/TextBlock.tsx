// components/content/TextBlock.tsx
import { PageContent } from "@/lib/contentful";

export default function TextBlock({ content }: PageContent) {
  if (typeof content !== "string") return null;
  return <p className="text-lg mt-10">{content}</p>;
}
