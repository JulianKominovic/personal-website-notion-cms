import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { XIcon } from '../components/icons/XIcon';

import LogoKoin from '../images/logos/logo-koin.png';
import LivefeedbackLogo from '../images/logos/live-feedback.svg';
import SittlyLogo from '../images/logos/sittly.png';
import ClippisIcon from '../images/logos/clipboard-manager.png';
import EmptyIcon from '../images/logos/empty.svg';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

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

export const Quotes = [] as const;

export const Tools = {
  Workstation: [],
  Software: [
    {
      title: 'Visual Studio Code',
      description: `I still miss WebStorm but at least VS Code does not consume 1000% CPU when I open it. And to be fair, it's a great editor.`,
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'iTerm2',
      description: `I'm honestly not even sure what features I get with this that aren't just part of the macOS Terminal but it's what I use.`,
      href: 'https://iterm2.com/',
    },
    {
      title: 'TablePlus',
      description: `Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.`,
      href: 'https://tableplus.com/',
    },
    {
      title: 'Figma',
      description: `I'm not a designer but it allows me to quickly mock up interfaces and play with my ideas. One day I'll learn how to use it properly.`,
      href: 'https://www.figma.com/',
    },
    {
      title: 'Notion',
      description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas.`,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Raycast',
      description: `Window management, quick access to my most used apps, and a bunch of other useful features. I use it every day.`,
      href: 'https://www.raycast.com/',
    },
    {
      title: '1Password',
      description: `Not much to say here. It's a great password manager.`,
      href: 'https://1password.com/',
    },
    {
      title: 'Cron',
      description: `Calendar application done right`,
      href: 'https://cron.com/',
    },
  ],
} as const;
