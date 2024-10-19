import React from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonImageProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: number;
  width?: number | string;
  height?: number | string;
}

export function SkeletonImage({
  aspectRatio = 16 / 9,
  width = '100%',
  height,
  className,
  ...props
}: SkeletonImageProps) {
  return (
    <Skeleton
      className={cn('w-full h-auto', className)}
      style={{
        aspectRatio: aspectRatio,
        width: width,
        height: height || 'auto',
      }}
      {...props}
    />
  );
}