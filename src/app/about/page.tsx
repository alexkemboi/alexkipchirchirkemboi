import type { Metadata } from "next";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, experience and education of Alex Kemboi, a software engineer working on core banking and systems integration.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <About />
      <Experience />
      <Education />
    </>
  );
}
