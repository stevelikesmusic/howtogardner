import Link from 'next/link';

export type ArticleSummaryCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export function ArticleSummaryCard({
  slug,
  title,
  excerpt,
  date,
}: ArticleSummaryCardProps) {
  return (
    <Link className="group block h-full" href={`/blog/${slug}`}>
      <div className="group h-full rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
        <div className="mb-4">
          <p className="mb-2 text-sm font-medium text-gray-500">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h3 className="mb-4 text-xl font-bold text-slate-800 group-hover:text-slate-900">
            {title}
          </h3>
        </div>
        <p className="mb-6 leading-relaxed text-gray-600">{excerpt}</p>
        <div className="flex items-center font-semibold text-slate-800 group-hover:text-slate-600">
          Read Article
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
