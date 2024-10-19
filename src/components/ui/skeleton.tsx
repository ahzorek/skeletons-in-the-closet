import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-shimmer bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent bg-[length:400%_100%] rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }