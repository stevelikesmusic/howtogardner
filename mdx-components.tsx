import type { MDXComponents } from 'mdx/types';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    // h1: ({ children }) => (
    //   <h1 className="text-4xl font-bold text-slate-900 mb-6 mt-8 first:mt-0">
    //     {children}
    //   </h1>
    // ),
    // h2: ({ children }) => (
    //   <h2 className="text-3xl font-bold text-slate-900 mb-6">{children}</h2>
    // ),
    // h3: ({ children }) => (
    //   <h3 className="text-2xl font-semibold text-slate-900 mb-4">{children}</h3>
    // ),
    // h4: ({ children }) => (
    //   <h4 className="text-xl font-semibold text-slate-900 mb-2 mt-4">{children}</h4>
    // ),

    // // Paragraphs and text
    // p: ({ children }) => (
    //   <p className="text-slate-700 leading-relaxed mb-6">{children}</p>
    // ),

    // // Lists
    // ul: ({ children }) => (
    //   <ul className="list-disc list-inside text-slate-700 mb-8 space-y-1">{children}</ul>
    // ),
    // ol: ({ children }) => (
    //   <ol className="list-decimal list-inside text-slate-700 mb-4 space-y-1">
    //     {children}
    //   </ol>
    // ),
    // li: ({ children }) => <li className="ml-4">{children}</li>,

    // Links
    // How to properly link?
    a: ({ href, children }) => {
      const isInternal =
        href?.startsWith('#') || ['localhost', 'howtogardner'].includes(href);
      const props = isInternal ? {} : { target: '_blank' };

      return (
        <Link
          {...props}
          className="font-medium text-slate-800 underline decoration-2 underline-offset-2 transition-colors hover:text-slate-600 hover:decoration-slate-400"
          href={href || '#'}
        >
          {children}
        </Link>
      );
    },

    // Images
    img: (props) => (
      <Image
        className="my-6 rounded-lg"
        height={props.height || 600}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        width={props.width || 800}
        {...(props as ImageProps)}
      />
    ),

    // Code blocks
    pre: ({ children }) => (
      <pre className="mb-6 overflow-x-auto rounded-lg bg-slate-900 p-4 text-slate-100">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-2 py-1 font-mono text-sm text-slate-900">
        {children}
      </code>
    ),

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-slate-400 pl-4 text-slate-600 italic">
        {children}
      </blockquote>
    ),

    // Tables
    table: ({ children }) => (
      <div className="mb-6 overflow-x-auto">
        <table className="min-w-full border border-slate-200">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-slate-200 bg-slate-50 px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-slate-200 px-4 py-2">{children}</td>
    ),

    // Custom components
    Badge,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,

    ...components,
  };
}
