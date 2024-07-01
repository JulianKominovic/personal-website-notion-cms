import Image from 'next/image';

import { Project } from '../data/lifeApi';
import { Badge } from './Badge';
import { Card } from './Card';
import { LinkIcon } from './icons/LinkIcon';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="h-full" key={project.title}>
      <div className="relative z-10 flex items-center justify-center w-16 h-16 p-2 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={project.logo}
          alt={`Logo of ${project.title}`}
          className="object-contain w-10 h-10 p-1"
          unoptimized
        />
      </div>
      <div className="mt-6">
        {project.link ? (
          <Card.Title href={project.link.href}>{project.title}</Card.Title>
        ) : (
          <Card.Title>{project.title}</Card.Title>
        )}
      </div>
      <Card.Description>{project.description}</Card.Description>
      <p className="z-10 flex flex-wrap gap-1 mt-6 mb-6 font-mono">
        {project.techStack.map((techStackItem) => (
          <Badge key={techStackItem}>{techStackItem}</Badge>
        ))}
      </p>
      <div className="relative z-10 flex mt-auto text-sm font-medium transition text-zinc-400 group-hover:text-primary dark:text-zinc-200">
        {project.link ? (
          <p className="flex items-center">
            <LinkIcon className="flex-none w-6 h-6" />
            <span className="ml-2">{project.link.label}</span>
            {project.status === 'online' || !project.status ? (
              <span className="w-1 h-1 ml-2 bg-green-700 rounded-full" />
            ) : (
              <span className="w-1 h-1 ml-2 bg-red-700 rounded-full" />
            )}
          </p>
        ) : (
          <p className="flex items-center text-zinc-400 gap-x-2">
            Shut down <span className="w-1 h-1 bg-red-700 rounded-full" />
          </p>
        )}
      </div>
    </Card>
  );
};
