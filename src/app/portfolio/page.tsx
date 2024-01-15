import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

const page = () => {
	return (
		<div className="flex flex-col min-h-screen ">
			<header>
				<Navbar />
			</header>
			<main className="flex-1 bg-sky-950">
				<Portfolio />
			</main>
			<Footer />
		</div>
	);
};
export default page;
