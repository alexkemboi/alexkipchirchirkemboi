"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import alex from "../images/alex.jpg";
import Image from "next/image";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-sky-950">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex flex-row  justify-between sm:hidden">
						<button
							type="button"
							className="inline-flex items-center px-10 rounded-md text-gray-400 hover:text-white hover:bg-sky-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={toggleMenu}>
							<span className="sr-only">Open main menu</span>
							<FontAwesomeIcon
								icon={faBars}
								className="h-6 w-6"
							/>
						</button>
						<div className="relative m-2 flex h-12 w-12 bg-white p-2 items-center justify-center rounded-full dark:bg-sky-950 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
							<Image
								alt=""
								loading="lazy"
								width="32"
								height="32"
								decoding="async"
								data-nimg="1"
								className="h-8 w-8 rounded-full dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
								src={alex}
							/>
						</div>
					</div>
					<div className="flex items-center justify-center sm:items-center sm:justify-center sm-border-0 md:border md:border-1 rounded-full m-auto p-2">
						{/* <Link href="/">
							<div className="rounded-full overflow-hidden ml-10 mr-4  w-10 h-10">
								<Image
									src={alex}
									alt="Description"
								/>
							</div>
						</Link>
						<Link href="/">
							<span className="text-white font-bold text-xl">ALEX KEMBOI</span>
						</Link> */}

						<div className="hidden sm:block sm:ml-6 ">
							<div className="flex space-x-4">
								<Link href="/">
									<span className="text-gray-300 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Home
									</span>
								</Link>
								<Link href="/about">
									<span className="text-gray-300 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										About
									</span>
								</Link>
								<Link href="/portfolio">
									<span className="text-gray-300 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Portfolio
									</span>
								</Link>
								<Link href="/skills">
									<span className="text-gray-300 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Skills
									</span>
								</Link>
								<Link href="/contact">
									<span className="text-gray-300 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Contact Us
									</span>
								</Link>
								<Link href="/articles">
									<span className="text-gray-300 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Articles
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{isOpen && (
				<div
					className="border-r border-gray-500 sm:hidden absolute left-0 top-0 w-1/2 bg-sky-950 transition-transform transform h-1/2 animate-slideIn delay-200"
					id="mobile-menu">
					<div className="border-b border-gray-500 text-right rounded flex flex-row justify-between w-auto">
						<div className="rounded-full overflow-hidden w-10 m-2 h-auto ">
							<Image
								src={alex}
								alt="Description"
							/>
						</div>

						<button
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-sky-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={toggleMenu}>
							<span className="sr-only">Toggle menu</span>

							<FontAwesomeIcon
								icon={faTimes}
								className="h-6 w-6"
							/>
						</button>
					</div>
					<div className="px-2 pt-2 pb-3 space-y-1">
						<Link href="/">
							<span className="text-gray-300 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Home
							</span>
						</Link>
						<Link href="/about">
							<span className="text-gray-300 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								About
							</span>
						</Link>
						<Link href="/portfolio">
							<span className="text-gray-300 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Portfolio
							</span>
						</Link>
						<Link href="/skills">
							<span className="text-gray-300 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Skills
							</span>
						</Link>
						<Link href="/contact">
							<span className="text-gray-300 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Contact Us
							</span>
						</Link>
						<Link href="/articles">
							<span className="text-gray-300 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Articles
							</span>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
