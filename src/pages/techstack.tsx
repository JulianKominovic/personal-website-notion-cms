import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { Tool } from '../components/tools/Tool';
import { ToolsSection } from '../components/tools/ToolsSection';
import { TechRelated } from '../data/lifeApi';
import { Badge } from 'src/components/Badge';
import clsx from 'clsx';

const seoTitle = 'Tech Stack';
const seoDescription = 'Technologies I use, and other things I recommend.';

export default function Techstack() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/techstack`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <PageLayout title={seoDescription} intro="Here's a big list of all my tech stack">
        <div className="space-y-20">
          {Object.entries(TechRelated)
            .filter(([title, techTools]) => title && techTools.length > 0)
            .map(([title, tools]) => (
              <ToolsSection key={title} title={title}>
                {tools
                  .sort((a, b) => {
                    const frecuencies = ['everyday', 'often', 'sometimes', 'rarely', 'never'];
                    return frecuencies.indexOf(a.frecuency) - frecuencies.indexOf(b.frecuency);
                  })
                  .map((tool) => {
                    return (
                      <Tool
                        id={tool.title}
                        key={tool.title}
                        icon={
                          <>
                            {tool.svgIcon?.path && (
                              <svg
                                className="w-6 h-6 text-4xl font-bold tracking-tight fill-zinc-600 dark:fill-zinc-400"
                                dangerouslySetInnerHTML={{
                                  __html: tool.svgIcon.svg,
                                }}
                              />
                            )}
                            <Badge
                              className={clsx(
                                tool.frecuency === 'everyday'
                                  ? '!bg-green-300 !dark:bg-green-400 !text-black !dark:text-black'
                                  : tool.frecuency === 'often'
                                    ? '!bg-lime-300 !dark:bg-yellow-400 !text-black !dark:text-black'
                                    : tool.frecuency === 'sometimes'
                                      ? '!bg-orange-300 !dark:bg-orange-400 !text-black !dark:text-black'
                                      : tool.frecuency === 'rarely'
                                        ? '!bg-gray-300 !dark:bg-gray-400 !text-black !dark:text-black'
                                        : '!bg-red-300 !dark:bg-red-400 !text-black !dark:text-black',
                                '!text-[10px] !font-medium !tracking-wider !leading-3 !uppercase',
                              )}
                            >
                              {tool.frecuency}
                            </Badge>
                          </>
                        }
                        title={tool.title}
                        href={tool.href}
                      >
                        {tool.description}
                      </Tool>
                    );
                  })}
              </ToolsSection>
            ))}
        </div>
      </PageLayout>
    </>
  );
}
