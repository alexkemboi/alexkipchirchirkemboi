"use client";

import About from "@/components/About";
import Home from "../../src/components/Home";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-950 via-slate-950 to-black text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      </div>

  
		<main className="pt-32">
  {/* Page Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          
        >
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Articles />
          <Contact />
        </motion.div>
</main>
  
    </div>
  );
}