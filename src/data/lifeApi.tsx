import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { XIcon } from '../components/icons/XIcon';

import LogoKoin from '../images/logos/logo-koin.png';
import LivefeedbackLogo from '../images/logos/live-feedback.svg';
import SittlyLogo from '../images/logos/sittly.png';
import ClippisIcon from '../images/logos/clipboard-manager.png';
import EmptyIcon from '../images/logos/empty.svg';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import {
  SimpleIcon,
  siAxios,
  siCypress,
  siDocker,
  siEsbuild,
  siEslint,
  siExpress,
  siFigma,
  siFramer,
  siGit,
  siGithub,
  siInsomnia,
  siJest,
  siNextdotjs,
  siNodedotjs,
  siPlaywright,
  siPostman,
  siPrettier,
  siRaycast,
  siReact,
  siReactrouter,
  siRollupdotjs,
  siRust,
  siShadcnui,
  siStorybook,
  siStyledcomponents,
  siTailwindcss,
  siTauri,
  siTermius,
  siTestinglibrary,
  siTypescript,
  siUbuntu,
  siVisualstudiocode,
  siVite,
  siVsco,
  siWebpack,
} from 'simple-icons';
export const Name = 'Julian Kominovic';

export const About = (
  <>
    {`Frontend developer with almost 3 years of experience in fintech sector. I enjoy creating development tools to make developers' life easier.`}
  </>
);

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'Live feedback',
    techStack: ['TypeScript', 'React', 'Browser Extension'],
    description:
      'Browser extension that allows you to share feedback with your development team in real-time, right on the website.',
    logo: LivefeedbackLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/JulianKominovic/live-feedback',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'Sittly',
    techStack: ['Tauri', 'Rust', 'TypeScript', 'React', 'Desktop App'],
    description: 'A simple launcher like Raycast or Alfred for Linux(gnome).',
    logo: SittlyLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/JulianKominovic/sittly-launcher',
    },
  },
  {
    title: 'Clippis',
    techStack: ['Tauri', 'Rust', 'TypeScript', 'React', 'Desktop App'],
    description: 'Another offline, cool looking, comfortable, clipboard manager.',
    logo: ClippisIcon,
    link: {
      label: 'github.com',
      href: 'https://github.com/JulianKominovic/clipboard-manager',
    },
  },
  {
    title: 'gnome-dbus-api',
    techStack: ['Rust', 'Library'],
    description:
      'Grew as a need for Sittly Launcher. A rust library to interact with low-level gnome DBUS API.',
    logo: EmptyIcon,
    link: {
      label: 'github.com',
      href: 'https://github.com/JulianKominovic/gnome-dbus-api',
    },
  },
];

export const SocialMedia = [
  { name: 'Twitter', link: 'https://twitter.com/juliankominovic', icon: XIcon },
  { name: 'Github', link: 'https://github.com/JulianKominovic', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://linkedin.com/in/jkominovic', icon: LinkedInIcon },
] as const;

export const Work = [
  {
    company: 'Koin',
    title: 'Software Engineer I',
    logo: LogoKoin,
    start: '2023',
    end: 'Present',
  },
  {
    company: 'Koin',
    title: 'Software Developer III',
    logo: LogoKoin,
    start: '2023',
    end: '2023',
  },
  {
    company: 'Koin',
    title: 'Software Developer II',
    logo: LogoKoin,
    start: '2022',
    end: '2023',
  },
  {
    company: 'Koin',
    title: 'Software Developer I',
    logo: LogoKoin,
    start: '2022',
    end: '2022',
  },
] as const;

export const CompaniesLinks = [
  {
    name: 'VisionMedia',
    link: 'https://www.visionmedia.com/',
  },
] as const;

export const Books = [
  {
    name: 'Atomic Habits by James Clear',
    link: 'https://amzn.to/3iqimpZ',
  },
] as const;

export const VideosWorthWatching = [
  {
    name: 'Steve Jobs 2005 Stanford Commencement Address',
    link: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
  },
  {
    name: 'Falcon Heavy & Starman',
    link: 'https://www.youtube.com/watch?v=A0FZIwabctw',
  },
] as const;

export const Podcasts = [
  {
    name: 'Lex Fridman Podcast',
    link: 'https://www.youtube.com/@lexfridman',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Andrew Wilkinson',
    link: 'https://twitter.com/awilkinson',
  },
] as const;

export const Blogs = [
  {
    name: 'Wait but why',
    link: 'https://waitbutwhy.com/',
  },
] as const;

export const TechRelated: Record<
  string,
  {
    title: string;
    description?: string;
    href: string;
    frecuency: 'everyday' | 'often' | 'sometimes' | 'rarely' | 'never';
    svgIcon?: SimpleIcon;
  }[]
> = {
  Workstation: [],
  'Development software': [
    {
      title: 'ESLint',
      description: 'Find and fix problems in your JavaScript code.',
      href: 'https://eslint.org/',
      frecuency: 'everyday',
      svgIcon: siEslint,
    },
    {
      title: 'Prettier',
      description: 'An opinionated code formatter.',
      href: 'https://prettier.io/',
      frecuency: 'everyday',
      svgIcon: siPrettier,
    },
    {
      title: 'Husky',
      description: 'Git hooks made easy.',
      href: 'https://typicode.github.io/husky/',
      frecuency: 'everyday',
    },
  ],
  'Unit testing': [
    {
      title: 'Jest',
      description: `Delightful JavaScript Testing. I use it for all my projects.`,
      href: 'https://jestjs.io/',
      frecuency: 'sometimes',
      svgIcon: siJest,
    },
    {
      title: 'React Testing Library',
      description: `Simple and complete testing utilities that encourage good testing practices.`,
      href: 'https://testing-library.com/docs/react-testing-library/intro/',
      frecuency: 'sometimes',
      svgIcon: siTestinglibrary,
    },
    {
      title: 'Cypress components',
      description: `Fast, easy and reliable testing for anything that runs in a browser.`,
      href: 'https://www.cypress.io/',
      frecuency: 'often',
      svgIcon: siCypress,
    },
  ],
  'E2E testing': [
    {
      title: 'Playwright',
      description: `Playwright is a Node library to automate the Chromium, WebKit and Firefox browsers with a single API.`,
      href: 'https://playwright.dev/',
      frecuency: 'often',
      svgIcon: siPlaywright,
    },
    {
      title: 'Cypress',
      description: `Fast, easy and reliable testing for anything that runs in a browser.`,
      href: 'https://www.cypress.io/',
      frecuency: 'often',
      svgIcon: siCypress,
    },
  ],
  Bundlers: [
    {
      title: 'Vite',
      description: `A build tool that aims to provide a faster and leaner development experience for modern web projects.`,
      href: 'https://vitejs.dev/',
      frecuency: 'often',
      svgIcon: siVite,
    },
    {
      title: 'Webpack',
      description: `A static module bundler for modern JavaScript applications.`,
      href: 'https://webpack.js.org/',
      frecuency: 'everyday',
      svgIcon: siWebpack,
    },
    {
      title: 'Esbuild',
      description: `My personal favourite. An extremely fast JavaScript bundler.`,
      href: 'https://esbuild.github.io/',
      frecuency: 'everyday',
      svgIcon: siEsbuild,
    },
    {
      title: 'Rollup',
      description: `A module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.`,
      href: 'https://rollupjs.org/guide/en/',
      frecuency: 'often',
      svgIcon: siRollupdotjs,
    },
    {
      title: 'Million',
      description: `An extremely fast and lightweight optimizing compiler.`,
      href: 'https://million.js.org/',
      frecuency: 'rarely',
    },
  ],
  UI: [
    {
      title: 'Tailwind CSS',
      description: `I use Tailwind CSS for all my projects. I can't imagine writing CSS without it.`,
      href: 'https://tailwindcss.com/',
      frecuency: 'everyday',
      svgIcon: siTailwindcss,
    },
    {
      title: 'Framer Motion',
      description: 'A production-ready motion library for React.',
      href: 'https://www.framer.com/motion/',
      frecuency: 'sometimes',
      svgIcon: siFramer,
    },
    {
      title: 'Shadcn-ui',
      description: 'Beatiful tailwind based UI library.',
      href: 'https://shadcn-ui.vercel.app/',
      frecuency: 'sometimes',
      svgIcon: siShadcnui,
    },
    {
      title: 'Emotion',
      description: 'A performant and flexible CSS-in-JS library.',
      href: 'https://emotion.sh/',
      frecuency: 'everyday',
    },
    {
      title: 'Styled-components',
      description:
        'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress',
      href: 'https://styled-components.com/',
      frecuency: 'everyday',
      svgIcon: siStyledcomponents,
    },
    {
      title: 'Storybook',
      description:
        'Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular.',
      href: 'https://storybook.js.org/',
      frecuency: 'everyday',
      svgIcon: siStorybook,
    },
  ],
  Frontend: [
    {
      title: 'React',
      description: `My main frontend technology. The most popular library for building user interfaces.`,
      href: 'https://reactjs.org/',
      frecuency: 'everyday',
      svgIcon: siReact,
    },
    {
      title: 'TypeScript',
      description: `I use TypeScript for all my projects. I can't imagine writing JavaScript without it. Provide static types to JavaScript code. Prevents a lot of bugs.`,
      href: 'https://www.typescriptlang.org/',
      frecuency: 'everyday',
      svgIcon: siTypescript,
    },

    {
      title: 'React-router v6',
      description: 'The most popular routing library for React. I tend to use wouter instead.',
      href: 'https://reactrouter.com/',
      frecuency: 'often',
      svgIcon: siReactrouter,
    },
    {
      title: 'Wouter',
      description: 'A tiny client-side routing library for React. Only 1.3kb minified and gzipped.',
      href: 'https://github.com/molefrog/wouter',
      frecuency: 'rarely',
    },
    {
      title: 'Axios',
      description: 'Promise based HTTP client for the browser and node.js',
      href: 'https://axios-http.com/',
      frecuency: 'everyday',
      svgIcon: siAxios,
    },
    {
      title: 'Zustand',
      description: 'A simple and fast way to create global state in React.',
      href: 'https://zustand.surge.sh/',
      frecuency: 'often',
    },
  ],
  Backend: [
    {
      title: 'Next.js',
      description: `My go-to fullstack technology. I use it for all my side-projects.`,
      href: 'https://nextjs.org/',
      frecuency: 'everyday',
      svgIcon: siNextdotjs,
    },
    {
      title: 'Node.js',
      description: `My go-to backend technology. I use it mainly for web servers and scripts.`,
      href: 'https://nodejs.org/',
      frecuency: 'everyday',
      svgIcon: siNodedotjs,
    },
    {
      title: 'Express.js',
      description: `The most popular Node.js framework. I use it everyday in a BFF architecture.`,
      href: 'https://expressjs.com/',
      frecuency: 'everyday',
      svgIcon: siExpress,
    },
  ],
  //"Rust (Tauri)"
  'System programming languages': [
    {
      title: 'Rust',
      description: `I've been learning Rust for a while now and I'm loving it. I've been using it to build desktop applications with Tauri.`,
      href: 'https://www.rust-lang.org/',
      frecuency: 'sometimes',
      svgIcon: siRust,
    },
    {
      title: 'Tauri',
      description: `I use Tauri to build desktop applications with Rust, HTML, and JavaScript.`,
      href: 'https://tauri.studio/',
      frecuency: 'sometimes',
      svgIcon: siTauri,
    },
  ],
  Software: [
    {
      title: 'Ubuntu Linux',
      description: 'Always been my favorite OS. I use it for work.',
      href: 'https://ubuntu.com/',
      frecuency: 'everyday',
      svgIcon: siUbuntu,
    },
    {
      title: 'Visual Studio Code',
      description: `I still miss WebStorm but at least VS Code does not consume 1000% CPU when I open it. And to be fair, it's a great editor.`,
      href: 'https://code.visualstudio.com/',
      frecuency: 'everyday',
      svgIcon: siVisualstudiocode,
    },
    {
      title: 'Terminal',
      description: `I'm honestly not even sure what features I get with this that aren't just part of the macOS Terminal but it's what I use.`,
      href: 'https://iterm2.com/',
      frecuency: 'everyday',
      svgIcon: siTermius,
    },
    {
      title: 'Figma',
      description: `I'm not a designer but it allows me to quickly mock up interfaces and play with my ideas. One day I'll learn how to use it properly.`,
      href: 'https://www.figma.com/',
      frecuency: 'sometimes',
      svgIcon: siFigma,
    },
    {
      title: 'Raycast',
      description: `Window management, quick access to my most used apps, and a bunch of other useful features. I use it every day.`,
      href: 'https://www.raycast.com/',
      frecuency: 'rarely',
      svgIcon: siRaycast,
    },
    {
      title: 'Git',
      href: 'https://git-scm.com/',
      frecuency: 'everyday',
      svgIcon: siGit,
    },
    {
      title: 'GitHub',
      href: 'http://github.com',
      frecuency: 'everyday',
      svgIcon: siGithub,
    },
    {
      title: 'Docker',
      frecuency: 'sometimes',
      href: 'https://www.docker.com/',
      svgIcon: siDocker,
    },
    {
      title: 'Postman',
      description: 'API Development Environment',
      href: 'https://www.postman.com/',
      frecuency: 'everyday',
      svgIcon: siPostman,
    },
    {
      title: 'Insomnia',
      description: 'API Development Environment',
      href: 'https://insomnia.rest/',
      frecuency: 'rarely',
      svgIcon: siInsomnia,
    },
  ],
} as const;
