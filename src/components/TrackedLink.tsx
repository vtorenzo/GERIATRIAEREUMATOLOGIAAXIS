"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackOutboundClick } from "@/lib/links";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  children: ReactNode;
};

export default function TrackedLink({
  label,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackOutboundClick(label);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
