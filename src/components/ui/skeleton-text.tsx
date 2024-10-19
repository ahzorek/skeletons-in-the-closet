import React from 'react';
import { cn } from '@/lib/utils';

type LineBreak = number | true | false;

interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
  fontSize?: string;
  lineHeight?: number;
  lastLineLength?: number;
  enableLineBreaks?: boolean;
  lineBreaks?: LineBreak[];
  minLineLength?: number;
  maxLineLength?: number;
}

export function SkeletonText({
  lines = 3,
  fontSize = '1rem',
  lineHeight = 1.5,
  lastLineLength = 70,
  enableLineBreaks = true,
  lineBreaks,
  minLineLength = 70,
  maxLineLength = 100,
  className,
  ...props
}: SkeletonTextProps) {
  const getRandomLength = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getLineLength = (index: number): number => {
    if (index === lines - 1) return lastLineLength;
    if (!enableLineBreaks) return 100;

    if (lineBreaks && lineBreaks[index] !== undefined) {
      const breakValue = lineBreaks[index];
      if (typeof breakValue === 'number') return breakValue;
      if (breakValue === true) return getRandomLength(minLineLength, maxLineLength);
      return 100;
    }

    return getRandomLength(minLineLength, maxLineLength);
  };

  return (
    <div className={cn('space-y-2', className)} {...props}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-200 rounded animate-shimmer"
          style={{
            height: `calc(${fontSize} * ${lineHeight})`,
            width: `${getLineLength(index)}%`,
            backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0) 100%)',
            backgroundSize: '200% 100%',
          }}
        />
      ))}
    </div>
  );
}