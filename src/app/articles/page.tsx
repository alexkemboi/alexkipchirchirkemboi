import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Articles from "@/components/Articles";

const page = () => {
	return (
		<div className="flex flex-col min-h-screen bg-sky-950">
			<header>
				<Navbar />
			</header>
			<main className="flex-1 bg-sky-950">
				<Articles />
			</main>
			<Footer />
		</div>
	);
};
export default page;
