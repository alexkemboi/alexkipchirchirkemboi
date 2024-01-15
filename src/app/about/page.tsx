import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Home from "@/components/Home";

const page = () => {
	return (
		<div className="flex flex-col justify-between min-h-screen bg-sky-950">
			<header>
				<Navbar />
			</header>
			<main className="bg-sky-950">
				<Home />
				<About />
			</main>
			<Footer />
		</div>
	);
};
export default page;
