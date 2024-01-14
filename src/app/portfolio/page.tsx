import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Portfolio = () => {
	return (
		<div className="flex flex-col min-h-screen ">
			<header>
				<Navbar />
			</header>
			<main className="flex-1 bg-sky-900">Portfolio</main>
			<Footer />
		</div>
	);
};
export default Portfolio;
