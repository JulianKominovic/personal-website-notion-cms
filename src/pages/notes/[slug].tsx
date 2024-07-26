import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { Code } from 'react-notion-x/build/third-party/code';
import { XIcon } from '../../components/icons/XIcon';
import { NoteLayout } from '../../components/notes/NoteLayout';
import { Note as NoteType, notesApi } from '../../lib/notesApi';
import { NotionRenderer } from 'react-notion-x';
import 'prismjs/components/prism-c';

type Props = {
  note: NoteType;
  noteContent: any;
};

export default function Note({
  note: { title, description, createdAt, slug },
  noteContent,
  previousPathname,
}: Props & { previousPathname: string }) {
  const url = `${process.env.NEXT_PUBLIC_URL}/notes/${slug}`;
  const openGraphImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/og?title=${title}&description=${description}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          images: [{ url: openGraphImageUrl }],
        }}
      />
      <ArticleJsonLd
        url={url}
        images={[openGraphImageUrl]}
        title={title}
        datePublished={createdAt}
        authorName="Julian Kominovic"
        description={description}
      />
      <NoteLayout
        meta={{ title, description, date: createdAt }}
        previousPathname={previousPathname}
      >
        <div className="pb-32">
          <NotionRenderer
            recordMap={noteContent}
            components={{
              Code,
            }}
          />

          <hr />

          <a
            className="block text-xl font-semibold no-underline group md:text-3xl"
            href={`http://x.com/share?text=${title}&url=${url}`}
          >
            <h4 className="flex flex-col max-w-lg duration-200 ease-in-out cursor-pointer group-hover:text-primary group-hover:fill-primary fill-white text-wrap">
              <XIcon className="w-10 h-10 my-6 text-black transition-transform transform group-hover:-rotate-12 dark:text-white group-hover:text-primary" />
              Click here to share this article with your friends on X if you liked it.
            </h4>
          </a>
        </div>
      </NoteLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug;
  const allNotes = await notesApi.getNotes();
  const note = allNotes.find((note) => note.slug === slug);

  if (!note) {
    return {
      notFound: true,
    };
  }

  const noteContent = await notesApi.getNote(note.id);

  return {
    props: {
      note,
      noteContent,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await notesApi.getNotes();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
};
