"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-card-glass rounded-[1.25rem] border border-white/8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
