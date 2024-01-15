import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
			<link
				rel="icon"
				href="../images/alex.jpg"
				type="image/jpg"
			/>
			<body className="bg-sky-900">
				<div className="container m-auto border border-gray-500 animated-bounceIn lg:w-1/2">
					{children}
				</div>
			</body>
		</html>
	);
}
