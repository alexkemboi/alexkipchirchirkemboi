import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ALEX KEMBOI",
	description: "This is a personal portfolio"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="shortcut icon"
					href="/favicon.ico"
				/>
			</head>
			<body className="bg-sky-50 mx-50">
				<div className="mx-auto border border-gray-500 animated-bounceIn">
					<header>
						<Navbar />
					</header>
					{children}
					<footer className="">
						<Footer />
					</footer>
				</div>
			</body>
		</html>
	);
}
