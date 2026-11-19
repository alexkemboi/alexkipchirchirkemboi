import type { Metadata } from "next";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description:
    "Frontend development, backend engineering, data analysis and visualisation, systems integration, cloud and DevOps, and AI product development.",
  alternates: { canonical: "/skills" },
};

export default function Page() {
  return <Skills />;
}
