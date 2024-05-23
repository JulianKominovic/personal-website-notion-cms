import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { Tool } from '../components/tools/Tool';
import { ToolsSection } from '../components/tools/ToolsSection';
import { Tools } from '../data/lifeApi';

const seoTitle = 'Tech Stack';
const seoDescription = 'Technologies I use, and other things I recommend.';

export default function Uses() {
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
          {Object.entries(Tools).map(([title, tools]) => (
            <ToolsSection key={title} title={title}>
              {tools.map((tool) => (
                <Tool key={tool.title} title={tool.title} href={tool.href}>
                  {tool.description}
                </Tool>
              ))}
            </ToolsSection>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
