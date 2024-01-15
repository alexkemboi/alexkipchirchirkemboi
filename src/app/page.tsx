import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";

const page = () => {
	return (
		<div className="flex flex-col min-h-screen container m-auto bg-sky-950">
			<header className="border-0 border-gray-700">
				<Navbar />
			</header>
			<main className="flex-1 bg-sky-950">
				<Home />
				<About />
				<Skills />
				<Portfolio />
				<Articles />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};
export default page;
