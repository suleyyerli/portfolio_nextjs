import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const CodeContour = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono hover:bg-accent/100 transition-colors border border-accent p-1 text-primary rounded-sm ",
        className
      )}
      {...props}
    />
  );
};
