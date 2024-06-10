import { NextSeo } from 'next-seo';

import { PageLayout } from '../../components/PageLayout';
import { Card } from 'src/components/Card';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';
import clsx from 'clsx';

const seoTitle = 'Bookmarks';
const seoDescription = 'Links to articles, tools, and resources that I find interesting.';

export const bookmarkCategories = [
  {
    name: 'VS Code',
    slug: 'vscode',
    itemsNumber: 0,
  },
];

type Props = {
  categories: typeof bookmarkCategories;
};

export default function Bookmarks({ categories }: { categories: typeof bookmarkCategories }) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/bookmarks`}
        openGraph={{
          images: [{ url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}` }],
        }}
      />
      <PageLayout title={seoTitle} intro={seoDescription}>
        {categories.map((category) => (
          <motion.div
            key={category.slug}
            initial={ANIMATION_FROM_PROPS}
            whileInView={ANIMATION_TO_PROPS}
            viewport={{ once: true }}
          >
            <article className="md:grid md:grid-cols-4 md:items-baseline">
              <Card className="md:col-span-3">
                <Card.Title href={`/bookmarks/${category.slug}`}>{category.name}</Card.Title>

                <Card.Description>Found {category.itemsNumber} items</Card.Description>
                <Card.Cta>Go to {category.name} bookmarks</Card.Cta>
              </Card>
            </article>
          </motion.div>
        ))}
      </PageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const fetchBookmarks = await Promise.allSettled(
    bookmarkCategories.map((category) => {
      return import('public/bookmarks/' + category.slug + '.json')
        .then((mod) => mod.default)
        .then((data) => ({ ...category, itemsNumber: data.length }));
    }),
  );
  return {
    props: {
      categories: fetchBookmarks
        .filter((promise) => promise.status === 'fulfilled')
        .map((promise) => (promise as PromiseFulfilledResult<any>).value),
    },
  };
};
