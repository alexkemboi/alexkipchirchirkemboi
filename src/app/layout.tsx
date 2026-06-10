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
			<body
  className="
    min-h-screen
    bg-gradient-to-br
    from-sky-950
    via-slate-950
    to-black
    text-white
    overflow-x-hidden
  "
>
  {/* Global Background Effects */}
  <div className="fixed inset-0 -z-10">
    <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
    <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />
  </div>

  <div
    className="
      relative
      mx-auto
      min-h-screen
      max-w-7xl
      px-4
      sm:px-6
      lg:px-8
      animate-fadeIn
    "
  >
    <header>
      <Navbar />
    </header>

    <main>
      {children}
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</body>
		</html>
	);
}
