import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';

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
    <Link
      className="group block h-full justify-between rounded-xl border-slate-200 transition-shadow hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      href={`/blog/${slug}`}
      tabIndex={0}
    >
      <Card className="flex h-full flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-lg transition-colors group-hover:text-green-600">
            {title}
          </CardTitle>
          <CardDescription>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>{excerpt}</CardContent>
        <CardFooter className="pt-0">
          <span className="font-medium text-green-600 hover:text-green-700">
            Read more →
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
