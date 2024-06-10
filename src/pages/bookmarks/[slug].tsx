import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Card } from 'src/components/Card';
import { PageLayout } from 'src/components/PageLayout';
import { Bookmark } from 'src/types/Bookmark';
import { bookmarkCategories } from '.';
import { LinkIcon } from 'src/components/icons/LinkIcon';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

type Props = {
  bookmarks: Bookmark[];
  category: (typeof bookmarkCategories)[0];
};

export default function BookmarkCategory({ bookmarks, category }: Props) {
  const title = `${category.name} bookmarks`;
  const description = `Check out the ${category.itemsNumber} bookmarks in this category`;
  const cardWidth = 400;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${process.env.NEXT_PUBLIC_URL}/bookmarks/${category.slug}`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${title}&description=${description}`,
            },
          ],
        }}
      />
      <PageLayout title={title} intro={description}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ [cardWidth]: 1, [cardWidth * 2]: 2, [cardWidth * 3]: 3 }}
        >
          <Masonry gutter="52px">
            {bookmarks.map(({ ogTitle, ogUrl, ogImage, ogDescription }) => (
              <Card className="h-full" key={ogTitle}>
                {ogImage?.[0].url ? (
                  <div className="relative z-10 flex items-center justify-center object-contain w-full p-2 overflow-hidden bg-white shadow-md h-52 shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 rounded-2xl">
                    <img
                      src={ogImage[0].url}
                      alt={`Logo of ${ogTitle}`}
                      className="object-scale-down w-full h-auto p-1"
                    />
                  </div>
                ) : null}
                <div className="mt-6">
                  <Card.Title href={ogUrl}>{ogTitle}</Card.Title>
                </div>
                <Card.Description>{ogDescription}</Card.Description>
                {ogUrl && (
                  <div className="relative z-10 flex mt-auto text-sm font-medium transition text-zinc-400 group-hover:text-primary dark:text-zinc-200">
                    <p className="flex items-center">
                      <LinkIcon className="flex-none w-6 h-6" />
                      <span className="ml-2">{new URL(ogUrl).host}</span>
                      <span className="w-1 h-1 ml-2 bg-green-700 rounded-full" />
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </PageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug;
  const category = bookmarkCategories.find((category) => category.slug === slug);
  if (!category) {
    return {
      notFound: true,
    };
  }
  const bookmarks = await import('public/bookmarks/' + slug + '.json')
    .then((mod) => mod.default)
    .then((data) => ({ ...category, itemsNumber: data.length, bookmarks: data }));

  return {
    props: {
      bookmarks: bookmarks.bookmarks,
      category: { itemsNumber: bookmarks.itemsNumber, name: bookmarks.name, slug: bookmarks.slug },
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = bookmarkCategories.map((category) => ({ params: { slug: category.slug } }));

  return {
    paths: categories,
    fallback: 'blocking',
  };
};
