import Image from 'next/image';
import livefeedbackLogo from '../../images/logos/live-feedback.png';
import { Badge } from 'src/components/Badge';
import { GetServerSideProps } from 'next';
import { PageTitle } from 'src/components/PageTitle';
import { StaticBadge } from 'src/components/notes/NotePreview';
import { GitHubIcon } from 'src/components/icons/GitHubIcon';
import { SocialLink } from 'src/components/SocialLink';
import { NextSeo } from 'next-seo';

import { getHighlighter } from 'shiki';
import { useEffect } from 'react';

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

const seoTitle = 'Live Feedback';
const seoDescription =
  'Inject Live Feedback script and start getting feedback on your website in real time from your developers, designers, and clients.';

export default function LiveFeedback({
  latestVersion,
  activateScript,
}: {
  latestVersion: string;
  activateScript: boolean;
}) {
  const social = [
    {
      name: 'GitHub repo',
      link: 'https://github.com/JulianKominovic/live-feedback',
      icon: GitHubIcon,
    },
    {
      name: 'Jsdelivr',
      link: 'https://cdn.jsdelivr.net/gh/JulianKominovic/live-feedback@latest/build/bundle.js',
      icon: (props: any) => (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>jsDelivr</title>
          <path d="M11.851 0L.811 4.02l1.56 14.7L11.85 24l9.6-5.28 1.74-14.76zm.062 4.622a6.668 6.75 0 0 1 2.666.572 12.507 12.507 0 0 0-2.59 1.95c-.045-.02-.092-.031-.138-.045a1.181 1.181 0 0 0-.346-.056c-.071 0-.141.01-.21.021a8.91 8.91 0 0 1-.615-2.318 6.668 6.75 0 0 1 1.171-.122 6.668 6.75 0 0 1 .062-.002zm-1.99.312a9.763 9.763 0 0 0 .69 2.504 1.213 1.213 0 0 0-.328.825 1.202 1.202 0 0 0 .18.63c-.937 1.294-1.656 2.803-1.905 4.31-.01.056-.013.11-.02.166-.282.09-.515.284-.656.54-.987-.333-1.885-.968-2.615-2.022a6.668 6.75 0 0 1-.026-.515 6.668 6.75 0 0 1 4.68-6.438zm5.507.709a6.668 6.75 0 0 1 2.53 2.9c-.377.953-1.049 1.892-1.893 2.727a1.242 1.242 0 0 0-.644-.184 1.243 1.243 0 0 0-.768.27c-.462-.354-.91-.737-1.318-1.168-.333-.35-.637-.73-.921-1.123.19-.215.31-.494.31-.802 0-.212-.061-.41-.159-.586 1.058-1.008 2.112-1.67 2.863-2.034zm-3.925 1.982a.624.624 0 0 1 .346.114.624.624 0 0 1 .292.524.624.624 0 0 1-.292.524.626.626 0 0 1-.346.113.634.634 0 0 1-.638-.637c0-.355.283-.638.638-.638zm-.441 1.771a1.205 1.205 0 0 0 .675.062c.036.05.075.097.112.148a11.438 11.438 0 0 0 .921 1.119 12.103 12.103 0 0 0 1.446 1.277c-.032.11-.054.224-.054.342a1.236 1.236 0 0 0 .066.38 9.91 9.91 0 0 1-2.118 1.042c-.087.029-.173.052-.261.078a7.735 7.735 0 0 1-1.87.332 1.15 1.15 0 0 0-.66-.773c.004-.024.005-.049.01-.073.219-1.333.873-2.73 1.733-3.934zm7.272.19a6.668 6.75 0 0 1 .245 1.786 6.668 6.75 0 0 1-.259 1.856 9.993 9.993 0 0 1-1.666-.63 1.243 1.243 0 0 0-.065-.713 9.434 9.434 0 0 0 1.745-2.3zm-2.913 2.101c.367 0 .657.291.657.658s-.291.657-.657.657c-.367 0-.658-.29-.658-.657s.29-.658.658-.658zm.837 1.59a10.79 10.79 0 0 0 1.802.688 6.668 6.75 0 0 1-6.149 4.157 6.668 6.75 0 0 1-.062-.004 6.668 6.75 0 0 1-.042 0c-.087-.042-.168-.08-.266-.129-.312-.154-.667-.352-.846-.5a3.796 3.796 0 0 1-1.294-2.03c.21-.111.38-.284.487-.495a8.428 8.428 0 0 0 1.96-.306 9.11 9.11 0 0 0 .513-.154 11.083 11.083 0 0 0 2.341-1.13c.205.143.452.23.719.23a1.248 1.248 0 0 0 .837-.328zm-10.707.116a5.761 5.761 0 0 0 2.212 1.298 1.146 1.146 0 0 0 .857.87 4.602 4.602 0 0 0 1.24 2.222 6.668 6.75 0 0 1-4.31-4.39zm3.327.464c.331 0 .595.263.595.596s-.264.595-.595.595a.59.59 0 0 1-.596-.595.591.591 0 0 1 .596-.596z" />
        </svg>
      ),
    },
  ];

  const injectScriptCode = highlighter.codeToHtml(
    `<script
    async
    repo="{your repo name}"
    owner="{repo owner}"
    src="https://cdn.jsdelivr.net/gh/JulianKominovic/live-feedback@latest/build/bundle.js"
    />
  `,
    {
      lang: 'html',
      theme: 'vitesse-dark',
    },
  );

  useEffect(() => {
    // Wake up the auth server in case user wants to try the script
    fetch('https://live-feedback.onrender.com').catch(() => {});
  }, []);

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/live-feedback`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <div className="w-full mx-auto mt-32 overflow-x-hidden max-w-7xl lg:px-8 ">
        <section className="px-4 sm:px-20">
          <div className="relative z-10 flex items-center justify-center w-20 h-20 p-4 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={livefeedbackLogo} alt="Live Feedback"></Image>
          </div>
          <Badge
            className="my-6"
            href="https://github.com/JulianKominovic/live-feedback/releases/latest"
          >
            Latest version {latestVersion === 'No version found' ? '' : `: ${latestVersion}`}
          </Badge>
          <PageTitle className="flex flex-wrap items-center gap-2">
            Live Feedback <StaticBadge>Work in progress</StaticBadge>
          </PageTitle>
          <p className="max-w-2xl mt-6 text-base text-balance" id="home-about">
            Inject Live Feedback script and start getting feedback on your website in real time from
            your developers, designers, and clients.
          </p>
          <div className="flex flex-wrap items-center gap-4 my-8">
            {social.map((socialProfile) => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`See ${socialProfile.name}`}
                href={socialProfile.link}
                icon={socialProfile.icon}
              />
            ))}
          </div>

          <a
            className="px-4 py-3 font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark hover:transition-colors"
            href={'/live-feedback?activate=' + !activateScript}
          >
            {activateScript ? 'Ok disable it for now...' : 'I want to try it right here!'}
          </a>
        </section>
        <hr className="mx-8 my-12 dark:border-zinc-800 sm:px-20 border-zinc-100" />
        <section className="w-full px-4 prose max-w-[90ch] dark:prose-dark sm:px-20">
          {/* Instructions */}
          <h2 className="">Instructions</h2>
          <p>Follow these simple steps and you will have Live Feedback running on your site.</p>
          <h3 className="">1 - Add the script in your app</h3>
          <div
            className="w-full font-mono"
            dangerouslySetInnerHTML={{ __html: injectScriptCode }}
          ></div>
          <h3>2 - Login</h3>
          <p>
            As soon as you add the script to your site a new window will open asking you to login
            and authorize the app.
          </p>
          <p>
            Live Feedback relies on Github API Rest. It uses the Github App authentication flow to
            create a token that allows the app to create issues on your behalf{' '}
            {'(Live Feedback stores your feedback as Github Issues)'}.{' '}
          </p>
          <p>
            The authentication flow is going to take place in{' '}
            <a href="https://live-feedback.onrender.com" target="_blank">
              this adhoc server
            </a>
            .
          </p>
          <a
            href="https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            You can read here what Live Feedback does the authentication flow
          </a>
          <h3>3 - Giving permission</h3>
          <p>
            Live Feedback uses Github Issues as <i>database</i> to save your feedback comments. So
            you will need to give permission to the app to create issues on your behalf in every
            repo.
          </p>
          <p>
            If you want to know more about the permissions that Live Feedback needs, you can check
          </p>

          <hr className="mx-8 my-12 dark:border-zinc-800 sm:px-20 border-zinc-100" />

          {/* Disclaimer */}
          <h2>Disclaimer</h2>
          <h3>Security</h3>
          <p>
            All your data is stored on Github.{' '}
            <a
              href="https://github.com/JulianKominovic/live-feedback/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              This app is open source
            </a>{' '}
            it means that you can check what is happening under the hood.
            <br />
            My wish is to make this app as client-side as possible. Unfortunately, since we are
            using Github API, we need to generate authentication tokens in the server to create
            issues on your behalf. The authentication flow is going to take place in{' '}
            <a href="https://live-feedback.onrender.com" target="_blank">
              this adhoc server
            </a>
            .
          </p>
          <a
            href="https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            You can read here what Live Feedback does the authentication flow
          </a>
          <h3>Privacy</h3>
          <p>
            Live Feedback does not store any personal information neither any data or content from
            your site.
          </p>
          <p>
            Open devtools panel, go to network and you will see every request Live Feedback makes.
            You can check the data that is being sent to the server and the responses.
          </p>
          <p>
            You token is stored in your browser cookies. It is used to authenticate the requests to
            Github API Rest. You can revoke the token at any time by deleting the cookie called{' '}
            <code>GH-LIVE-FEEDBACK-TOKEN</code>{' '}
          </p>
          <h3>Stability</h3>
          <p>
            This app is in beta. It means that it can have bugs that can affect the experience.
            Although I am doing my best to make it stable, I recommend you to test it in a
            non-production environment.
          </p>
          <h3>Your repos are safe</h3>
          <p>
            Live Feedback needs to create issues in your repos to store your feedback. It will only
            create issues in the repos that you give permission to. You can revoke the permissions
            at any time. Live Feedback permissions are limited to issues {'(read and write)'} and
            pull requests {'(read)'}.
          </p>
        </section>
      </div>
      {activateScript ? (
        <script
          async
          // @ts-ignore
          repo="live-feedback"
          owner="JulianKominovic"
          src="https://cdn.jsdelivr.net/gh/JulianKominovic/live-feedback@latest/build/bundle.js"
        />
      ) : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const activateScript = query?.activate === 'true';
  const latestVersion = await fetch(
    'https://api.github.com/repos/JulianKominovic/live-feedback/releases/latest',
    {
      cache: 'force-cache',
      next: {
        // 12 hours
        revalidate: 60 * 60 * 12,
      },
    },
  )
    .then((res) => res.json())
    .then((data) => data.tag_name || 'No version found')
    .catch(() => 'No version found');
  return {
    props: { latestVersion, activateScript },
  };
};
