import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

const page = () => {
	return (
		<div className="flex flex-col justify-between min-h-screen bg-sky-950 ">
			<header>
				<Navbar />
			</header>
			<main className="bg-sky-950">
				<Skills />
			</main>
			<Footer />
		</div>
	);
};
export default page;
