"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import alex from "../images/alex.jpg";
import Image from "next/image";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const body = document.body;
		if (darkMode) {
			body.classList.add("dark-mode");
		} else {
			body.classList.remove("dark-mode");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	return (
		<nav className="bg-sky-950">
			<div className="max-w-full flex mx-auto px-2 sm:px-6 lg:px-8  border-0">
				<div className="relative flex items-center justify-between h-16 w-full ">
					<div className="absolute inset-y-0 left-0 flex flex-row  justify-between sm:hidden  w-full">
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
						<div className="relative m-2 flex h-12 w-full bg-white bg-white p-2 items-end justify-end rounded-full dark:bg-sky-950 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ml-auto">
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
					<div className=" flex items-center justify-center sm:items-center sm:justify-center sm-border-0 md:border md:border-1 border-zinc-400 rounded-full m-auto p-2">
						<div className="hidden sm:block sm:ml-6 ">
							<div className="flex space-x-4">
								<Link href="/">
									<span className="text-zinc-400 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Home
									</span>
								</Link>
								<Link href="/about">
									<span className="text-zinc-400 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										About
									</span>
								</Link>
								<Link href="/portfolio">
									<span className="text-zinc-400 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Portfolio
									</span>
								</Link>
								<Link href="/skills">
									<span className="text-zinc-400 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Skills
									</span>
								</Link>
								<Link href="/contact">
									<span className="text-zinc-400 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Contact Us
									</span>
								</Link>
								<Link href="/articles">
									<span className="text-zinc-400 hover:bg-sky-950 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Articles
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<button
					className="w-10  m-4"
					onClick={toggleDarkMode}>
					{darkMode ? (
						<>
							<FontAwesomeIcon
								icon={faMoon}
								className="w-6 h-6 m-2 text-zinc-400"
							/>
						</>
					) : (
						<>
							<FontAwesomeIcon
								icon={faSun}
								className="w-6 h-6 m-2 text-zinc-400"
							/>
						</>
					)}
				</button>
			</div>
			{isOpen && (
				<div
					className="z-50 border-r border-b group-hover:opacity-100 border-gray-500 sm:hidden absolute left-0 top-0 w-1/2 bg-sky-950 transition-transform transform h-5/8 animate-slideIn delay-200"
					id="mobile-menu">
					<div className="border-b  border-gray-500 text-right flex flex-row justify-between w-auto h-1/2 z-10">
						<div className="rounded-full overflow-hidden w-10 m-2 h-auto ">
							<Image
								src={alex}
								alt="Description"
							/>
						</div>

						<button
							type="button"
							className="inline-flex  p-2 rounded-md text-gray-400 hover:text-white hover:bg-sky-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
					<div className="px-2 pt-2 pb-3 space-y-1 bg-sky-950">
						<Link href="/">
							<span className="text-zinc-400 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Home
							</span>
						</Link>
						<Link href="/about">
							<span className="text-zinc-400 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								About
							</span>
						</Link>
						<Link href="/portfolio">
							<span className="text-zinc-400 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Portfolio
							</span>
						</Link>
						<Link href="/skills">
							<span className="text-zinc-400 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Skills
							</span>
						</Link>
						<Link href="/contact">
							<span className="text-zinc-400 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Contact Us
							</span>
						</Link>
						<Link href="/articles">
							<span className="text-zinc-400 hover:bg-sky-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
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
