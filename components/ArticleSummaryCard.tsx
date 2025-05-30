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
      href={`/blog/${slug}`}
      className="block h-full group border-slate-200 hover:shadow-lg transition-shadow justify-between rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
      tabIndex={0}
    >
      <Card className="h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
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
          <span className="text-green-600 hover:text-green-700 font-medium">
            Read more →
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
