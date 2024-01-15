import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const page = () => {
	return (
		<div className="flex flex-col justify-between min-h-screen bg-sky-950">
			<header>
				<Navbar />
			</header>
			<main className=" bg-sky-950">
				<Contact />
			</main>
			<Footer />
		</div>
	);
};
export default page;
