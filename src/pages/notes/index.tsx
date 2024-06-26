import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Badge } from '../../components/Badge';
import { PageLayout } from '../../components/PageLayout';
import { NotePreview } from '../../components/notes/NotePreview';
import { Note, notesApi } from '../../lib/notesApi';

const seoTitle = 'Notes';
const seoDescription =
  'All of my thoughts on programming, building products, and more. Not structured.';

interface Props {
  notes: Note[];
  tags: Array<string>;
}

export default function Notes({ notes, tags }: Props) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/notes`}
        openGraph={{
          images: [{ url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}` }],
        }}
      />
      <PageLayout
        title="Notes on software, building products, and other stuff."
        intro="All of my thoughts on programming, building products and other random stuff. Not structured."
      >
        <h3
          id="tags"
          className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
        >
          Tags
        </h3>
        <div className="flex flex-wrap max-w-xl gap-1 mt-4 font-mono">
          {tags.map((tag) => (
            <Badge id={tag} key={tag} href={`/tags/${tag}`}>
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex flex-col max-w-3xl space-y-16">
            {notes.map((note) => (
              <NotePreview key={note.slug} note={note} />
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const notes = await notesApi.getNotes('desc');

  return {
    props: {
      notes,
      tags: Array.from(new Set(notes.map((post) => post.tags).flat())),
    },
    revalidate: 10,
  };
};
