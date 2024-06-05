export const ToolsSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid items-baseline max-w-3xl grid-cols-1 gap-y-8 md:grid-cols-4">
        <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{title}</h2>
        <div className="md:col-span-3">
          <ul role="list" className="space-y-16">
            {children}
          </ul>
        </div>
      </div>
    </section>
  );
};
