"use client";
import { useEffect } from "react";
import Image from "next/image";
import alex from "../images/alex.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faTwitter,
	faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	useEffect(() => {}, []);
	return (
		<section
			id="footer"
			className="bg-sky-950">
			<footer className="bg-sky-950 py-5 border-t border-gray-500">
				<div className="md:flex md:flex-row md:justify-between md:pl-10 md:pr-10 sm:flex sm:flex-col sm:justify-center sm:items-center sm:m-4">
					<div className="rounded-full md:border p-2 w-auto sm:m-2">
						<Link href="/home">
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
					<div className="rounded-full  p-2  md:flex md:flex-row md:justify-end md:items-end sm:flex sm:flex-row sm:justify-center sm:items-center">
						<p className="text-gray-400 text-sm text-center">
							© Alex K. Kemboi &copy; {new Date().getFullYear()}
						</p>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
