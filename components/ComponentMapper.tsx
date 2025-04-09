// components/ComponentMapper.tsx
import { Page, PageContent } from "@/lib/contentful";
import TextBlock from "./content/TextBlock";
import ImageBlock from "./content/ImageBlock";
import Posts from "@/components/ui/posts/Posts";
import BrandRail from "./ui/BrandRail/BrandRail";

type LayoutProps = {
  page: Page;
};

export function ComponentMapper({ page }: LayoutProps) {
  // in depend from page will be generate content

  return (page.body ?? []).map((data: PageContent) => {
    const Content = {
      title: TextBlock,
      coverImg: ImageBlock,
      postsExisting: Posts,
      brandRail: BrandRail,
    }[data.sys]; // getting content

    if (!Content) {
      return null;
    }

    return <Content key={data.id} {...data} />;
  });
}
