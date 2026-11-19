import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alex Kemboi about full stack builds, banking and enterprise integrations, or consulting.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <Contact />;
}
