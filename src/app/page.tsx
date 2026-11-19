import Home from "@/components/Home";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Solutions from "@/components/Solutions";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Home />
      <Highlights />
      <About />
      <Experience />
      <Skills />
      <Solutions />
      <Portfolio />
      <Education />
      <Articles />
      <Contact />
    </>
  );
}

/** Re-read live project titles and descriptions every 6 hours. */
export const revalidate = 21600;
