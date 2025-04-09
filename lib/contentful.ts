import { createClient } from "contentful";

// const orig = {
//   systemTitle: 'Home',
//   slug: 'home',
//   fullPath: 'home',
//   type: 'Home',
//   body: [
//     {
//       systemTitle: 'Test hero',
//       image: [Object],
//       layout: 'default',
//       eyebrow: 'Eyebrow',
//       heading: 'Welcome to the bar',
//       body: 'Lorem ipsum dolor sit amet consectetur. Tortor arcu facilisi luctus id quam mauris quis cursus cursus aliquet viverra pretium.',
//       ctaLinks: [Array],
//       themeVariant: 'highlights',
//       sysType: 'componentHero',
//       sysId: '68LdQipSHoLtvSkAEtrF5k'
//     }
//   ],
//   published: true,
//   metadata: {
//     seoTitle: 'Homepage UK',
//     seoDescription: 'Test Page for testing',
//     seoSiteName: 'Homepage name UK',
//     seoImage: {
//       title: 'Test Image',
//       description: 'Test Image',
//       file: [Object],
//       sysType: 'Asset',
//       sysId: '1FzISBaC4Xz6yKAURfJpAU'
//     },
//     canonicalUrl: 'homepage',
//     noIndex: true,
//     noFollow: true,
//     noSnippet: true,
//     sysType: 'dataMetadata',
//     sysId: '2Tnrjzw3j8gYTxScGM8KEV'
//   },
//   metaTitle: 'Home',
//   metaDescription: 'Home page',
//   sys: {
//     space: { sys: [Object] },
//     id: 'uMf7kww9SujG3CAx1X0xB',
//     type: 'Entry',
//     createdAt: '2025-03-06T11:46:58.387Z',
//     updatedAt: '2025-04-02T08:11:12.684Z',
//     environment: { sys: [Object] },
//     publishedVersion: 33,
//     revision: 14,
//     contentType: { sys: [Object] },
//     locale: 'en-GB'
//   },
//   sysId: 'uMf7kww9SujG3CAx1X0xB',
//   sysType: 'page'
// }

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export type PageContent = {
  content: unknown;
  id: string;
  sys: string;
};

export type Page = {
  slug: string;
  type: string;
  body: PageContent[];
};

export async function getBySlug(
  slug: string,
  type: string,
  locale: string = "af"
): Promise<Page> {
  const entries = await client.getEntries({
    content_type: type,
    "fields.slug": slug,
    locale,
    include: 2,
  });

  if (!entries.items.length) {
    throw new Error(`No entry found for slug: ${slug}`);
  }

  const { fields, sys } = entries.items[0];

  return {
    slug: fields.slug as string,
    type: sys.contentType.sys.id,
    body: Object.keys(fields).map((key, i) => ({
      content: fields[key],
      sys: key,
      id: `${key}-${i}`,
    })),
  };
}

export const getPageSlugs = async (): Promise<string[]> => {
  return ["home", "about"];
};
