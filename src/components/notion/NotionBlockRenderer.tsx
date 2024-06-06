import { TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Quote } from '../Quote';
import { getHighlighter } from 'shiki';

// `getHighlighter` is async, it initializes the internal and
// loads the themes and languages specified.
const highlighter = await getHighlighter({
  themes: ['vitesse-light', 'vitesse-dark'],
  langs: [
    'javascript',
    'typescript',
    'tsx',
    'jsx',
    'html',
    'css',
    'sass',
    'shellscript',
    'json',
    'yaml',
    'markdown',
    'plaintext',
  ],
});

//TODO: improve types here, cleanup the code
type Props = {
  block: any;
};

export const NotionBlockRenderer = ({ block }: Props) => {
  const { type, id } = block;
  const value = block[type];
  switch (type) {
    case 'code':
      // then later you can use `highlighter.codeToHtml` synchronously
      // with the loaded themes and languages.
      const code = highlighter.codeToHtml(block.code.rich_text[0].plain_text, {
        lang: block.code.language,
        theme: 'vitesse-dark',
      });
      return <div id={id} className="font-mono" dangerouslySetInnerHTML={{ __html: code }}></div>;
    case 'callout':
      return (
        <div
          id={id}
          className={clsx('p-4 my-4 border-l-4', {
            'bg-blue-100 dark:bg-blue-800 border-blue-200 dark:border-blue-600':
              value.color === 'blue_background',
            'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-600':
              value.color === 'gray_background',
            'bg-green-100 dark:bg-green-800 border-green-200 dark:border-green-600':
              value.color === 'green_background',
            'bg-yellow-100 dark:bg-yellow-800 border-yellow-200 dark:border-yellow-600':
              value.color === 'yellow_background',
            'bg-red-100 dark:bg-red-800 border-red-200 dark:border-red-600':
              value.color === 'red_background',
            'bg-purple-100 dark:bg-purple-800 border-purple-200 dark:border-purple-600':
              value.color === 'purple_background',
            'bg-pink-100 dark:bg-pink-800 border-pink-200 dark:border-pink-600':
              value.color === 'pink_background',
            'bg-orange-100 dark:bg-orange-800 border-orange-200 dark:border-orange-600':
              value.color === 'orange_background',
            'bg-cyan-100 dark:bg-cyan-800 border-cyan-200 dark:border-cyan-600':
              value.color === 'cyan_background',
            'bg-teal-100 dark:bg-teal-800 border-teal-200 dark:border-teal-600':
              value.color === 'teal_background',
            'bg-lime-100 dark:bg-lime-800 border-lime-200 dark:border-lime-600':
              value.color === 'lime_background',
            'bg-amber-100 dark:bg-amber-800 border-amber-200 dark:border-amber-600':
              value.color === 'amber_background',
          })}
        >
          <NotionText textItems={value.rich_text} />
        </div>
      );
    case 'paragraph':
      return (
        <p id={id}>
          <NotionText textItems={value.rich_text} />
        </p>
      );
    case 'quote':
      return <Quote key={id} quote={value.rich_text[0].plain_text} />;
    case 'heading_1':
      return (
        <h1 id={id}>
          <NotionText textItems={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 id={id}>
          <NotionText textItems={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 id={id}>
          <NotionText textItems={value.rich_text} />
        </h3>
      );
    case 'bulleted_list':
      return (
        <ul className="list-disc list-outside">
          {value.children.map((block: any) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </ul>
      );
    case 'numbered_list':
      return (
        <ol className="list-decimal list-outside">
          {value.children.map((block: any) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </ol>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="pl-0" id={id}>
          <NotionText textItems={value.rich_text} />
          {!!value.children &&
            value.children.map((block: any) => (
              <NotionBlockRenderer key={block.id} block={block} />
            ))}
        </li>
      );
    case 'to_do':
      return (
        <div id={id}>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <NotionText textItems={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details id={id}>
          <summary>
            <NotionText textItems={value.rich_text} />
          </summary>
          {value.children?.map((block: any) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </details>
      );
    case 'child_page':
      return <p id={id}>{value.title}</p>;
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure id={id}>
          <Image
            className="object-cover"
            placeholder="blur"
            src={src}
            alt={caption}
            blurDataURL={value.placeholder}
            width={value.size.width}
            height={value.size.height}
          />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr id={id} key={id} />;
    case 'file':
      const src_file = value.type === 'external' ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure id={id}>
          <div>
            📎{' '}
            <Link href={src_file} passHref>
              {lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case 'bookmark':
      const href = value.url;
      return (
        <a id={id} href={href} target="_brank">
          {href}
        </a>
      );
    default:
      return (
        <>❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})</>
      );
  }
};

const NotionText = ({ textItems }: { textItems: TextRichTextItemResponse[] }) => {
  if (!textItems) {
    return null;
  }

  return (
    <>
      {textItems.map((textItem) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = textItem;
        return (
          <span
            key={text.content}
            className={clsx({
              'font-bold': bold,
              'font-mono font-semibold bg-zinc-600 text-zinc-200 px-1 py-0.5 m-1 rounded-md': code,
              italic: italic,
              'line-through': strikethrough,
              underline: underline,
            })}
            style={color !== 'default' ? { color } : {}}
          >
            {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
          </span>
        );
      })}
    </>
  );
};
