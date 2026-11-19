import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Projects built by Alex Kemboi across business platforms, banking, e-commerce, health and education.",
  alternates: { canonical: "/portfolio" },
};

export default function Page() {
  return <Portfolio />;
}

/** Re-read live project titles and descriptions every 6 hours. */
export const revalidate = 21600;
