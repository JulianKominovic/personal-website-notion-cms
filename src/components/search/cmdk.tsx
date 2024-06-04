import { useRouter } from 'next/router';
import { Command } from 'cmdk';
import { useState, useEffect } from 'react';
import { useDebounceFunction } from 'src/lib/useDebounceFunction';
import { AnimatePresence, motion } from 'framer-motion';
import isAppleDevice from 'src/lib/is-apple-device';
import OnlyClientSide from 'src/lib/OnlyClientSide';
declare global {
  interface Window {
    pagefind?: {
      search: (query: string) => Promise<{ results: any[] }> | { results: any[] };
    };
  }
}

export default function Cmdk() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { debounce } = useDebounceFunction(1000);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === 'undefined') {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ './pagefind/pagefind.js'
          );
        } catch (e) {
          window.pagefind = { search: () => ({ results: [] }) };
        }
      }
    }
    loadPagefind();

    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  return (
    <>
      <OnlyClientSide>
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button
              cmdk-raycast-open-trigger=""
              type="button"
              aria-label="Open cmdk"
              className="!h-10 !px-3 !text-base py-2 transition !rounded-full shadow-lg pointer-events-auto group bg-white/90 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 dark:fill-zinc-700 dark:stroke-zinc-500 stroke-primary transition [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-primary [@media_not_(prefers-color-scheme:dark)]:stroke-primary"
              >
                <path
                  d="M20.3133 11.1566C20.3133 16.2137 16.2137 20.3133 11.1566 20.3133C6.09956 20.3133 2 16.2137 2 11.1566C2 6.09956 6.09956 2 11.1566 2C16.2137 2 20.3133 6.09956 20.3133 11.1566Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
                <path
                  d="M17.1001 18.1224L20.7664 21.7887C21.0487 22.071 21.5064 22.071 21.7887 21.7887C22.071 21.5064 22.071 21.0487 21.7887 20.7664L18.1224 17.1001C17.809 17.4671 17.4671 17.809 17.1001 18.1224Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </motion.div>
        </AnimatePresence>
      </OnlyClientSide>

      <div>
        <Command.Dialog shouldFilter={false} open={open} onOpenChange={setOpen}>
          <div cmdk-raycast-top-shine="" />
          <Command.Input
            value={query}
            onValueChange={(value) => {
              setQuery(value);
              setLoading(true);
              debounce(async () => {
                if (window.pagefind) {
                  const search = await window.pagefind.search(value);
                  console.log(search);
                  const results = await Promise.all(
                    search.results.map(async (result: any) => {
                      return {
                        id: result.id,
                        data: await result.data(),
                      };
                    }),
                  );
                  setResults(results);
                }
                setLoading(false);
              });
            }}
            autoFocus
            placeholder="Are you looking for something?"
          />
          <hr cmdk-raycast-loader="" />
          <Command.List>
            {loading && <Command.Loading />}
            <Command.Empty>No results found.</Command.Empty>
            {results.map((result: any) => {
              const url = result.data.url
                .replace('/_next/static/chunks/pages/server/pages/', '/')
                .replace('.html', '');

              return (
                <Command.Item
                  onSelect={() => {
                    router.push(url);
                    setOpen(false);
                  }}
                  value={result.id}
                  key={result.id}
                  className="!grid !grid-cols-[1fr_3fr] !gap-8 !py-3 !h-fit"
                >
                  <h3>{result.data.meta.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: result.data.excerpt }} />
                </Command.Item>
              );
            })}
          </Command.List>

          <div cmdk-raycast-footer="">
            <button cmdk-raycast-open-trigger="" className="items-center">
              Close
              <kbd className="!w-fit !px-2 !rounded-md">Esc</kbd>
            </button>
            <button cmdk-raycast-open-trigger="" className="items-center">
              Go to
              <kbd className="!w-fit !px-2 !rounded-md">↵</kbd>
            </button>
          </div>
        </Command.Dialog>
      </div>
    </>
  );
}
