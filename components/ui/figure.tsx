import React from 'react';
import { ImageProps } from 'next/image';

interface FigureProps extends React.HTMLAttributes<HTMLDivElement> {
  caption: React.ReactNode;
  children: React.ReactElement<ImageProps>;
}

export function Figure({ caption, children, className, ...props }: FigureProps) {
  return (
    <figure
      className={`mt-10 mb-12 flex flex-col items-center ${className || ''}`}
      {...props}
    >
      {children}
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
