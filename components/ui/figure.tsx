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

export function Figure({
  creator,
  source,
  children,
  className,
  ...props
}: FigureProps) {
  return (
    <figure
      className={`mt-10 mb-12 flex flex-col items-center ${className || ''}`}
      {...props}
    >
      {children}
      {creator?.url && source?.url && (
        <figcaption className="text-muted-foreground mt-2 text-center text-sm">
          Photo by{' '}
          <Link
            className="underline"
            href={creator.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {creator.name}
          </Link>{' '}
          on{' '}
          <Link
            className="underline"
            href={source.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {source.name}
          </Link>
        </figcaption>
      )}
    </figure>
  );
}
