"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
};

/**
 * Fades content up once as it enters the viewport.
 * Reduced motion: a quick fade with no movement. Always the same element,
 * so server-rendered markup and the hydrated tree never diverge.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={
        reduce
          ? { duration: 0.2 }
          : { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }
      }
    >
      {children}
    </Component>
  );
}
