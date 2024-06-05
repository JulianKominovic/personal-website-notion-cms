import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="px-3 py-2 transition rounded-full shadow-lg group bg-white/90 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <SunIcon className="block w-6 h-6 transition dark:hidden dark:fill-zinc-700 dark:stroke-zinc-500 stroke-primary group-hover:stroke-zinc-400" />
          <MoonIcon className="hidden w-6 h-6 transition dark:fill-zinc-700 dark:stroke-zinc-500 stroke-primary group-hover:stroke-zinc-400 dark:block" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
