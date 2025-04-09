import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { getBySlug } from "@/lib/contentful";

type PageParams = {
  locale: "en-US" | "af";
  slug?: SlugsKeys[];
};

type SlugsKeys = "blogs-page" | "the-global-bar-page";

const typeMapping: Record<SlugsKeys, "blogsPage" | "testPageGlobalBar"> = {
  "blogs-page": "blogsPage",
  "the-global-bar-page": "testPageGlobalBar",
};

const getType = (
  slug: SlugsKeys
): "blogsPage" | "testPageGlobalBar" | undefined => {
  return typeMapping[slug];
};

export default async function DynamicPage({ params }: { params: PageParams }) {
  const { locale, slug: [slug] = [] } = params;

  const type = getType(slug);

  if (!type) {
    notFound();
  }

  const pageBySlug = await getBySlug(slug, type, locale);

  return <Layout page={pageBySlug} type={type} />;
}

// Optional static path generation
// export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
//   const entries = await client.getEntries<PageContent>({
//     content_type: "page",
//     locale,
//   });

//   return entries.items.map((entry) => ({
//     slug: entry.fields.slug ? entry.fields.slug.split("/") : [],
//   }));
// }
