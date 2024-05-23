import { Card } from '../Card';

export const Tool = ({
  title,
  href,
  children,
  icon,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <Card as="li">
      {icon ? <Card.Eyebrow className="flex items-center gap-2">{icon}</Card.Eyebrow> : null}
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
};
