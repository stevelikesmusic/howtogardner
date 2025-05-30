import React from 'react';
import { ImageProps } from 'next/image';
import Link from 'next/link';

interface FigureProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<ImageProps>;
  creator?: {
    name: string;
    url: string;
  };
  source?: {
    name: string;
    url: string;
  };
}

export function Figure({ creator, source, children, className, ...props }: FigureProps) {
  return (
    <figure
      className={`mt-10 mb-12 flex flex-col items-center ${className || ''}`}
      {...props}
    >
      {children}
      {creator?.url && source?.url && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Photo by{' '}
          <Link
            className="underline"
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {creator.name}
          </Link>{' '}
          on{' '}
          <Link
            className="underline"
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source.name}
          </Link>
        </figcaption>
      )}
    </figure>
  );
}
