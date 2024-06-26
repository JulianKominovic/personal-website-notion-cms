import React from 'react';

import { Container } from './Container';
import { NavLink, NavigationItems } from './Navigation';
import { ExternalLink } from './ExternalLink';

export const Footer = () => {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {NavigationItems.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {'Thanks to '}
                <ExternalLink href="https://jarocki.me/">{'Bartosz Jarocki'}</ExternalLink>{' '}
                {'for this amazing template.'}
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
};
