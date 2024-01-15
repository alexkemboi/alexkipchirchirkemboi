"use client";
import { useEffect } from "react";
import Image from "next/image";
import alex from "../images/ikonex.jpg";
import capture from "../images/Capture.jpg";
import certs from "../images/certs.png";
import afrecommerce from "../images/afrecommerce.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faTwitter,
	faGithub
} from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
	const portfolioData = [
		{
			id: 1,
			title: "Mediconnect",
			description:
				"Creating technology to empower civilians to explore space on their own terms.",
			imageUrl: certs,
			websiteUrl: "https://mediconnectapp.netlify.app"
		},
		{
			id: 2,
			title: "Africommerce",
			description:
				"A platform connecting tech enthusiasts and fostering collaboration.",
			imageUrl: afrecommerce,
			websiteUrl: "https://afrecommerce.netlify.app"
		},
		{
			id: 3,
			title: "Ikonex",
			description:
				"An interactive coding platform for learning and practicing programming.",
			imageUrl: alex,
			websiteUrl: "https://ikonex.co.ke"
		},
		{
			id: 4,
			title: "Personal Portfolio",
			description:
				"This a personal portfolio detailing my skill set and projects completed.",
			imageUrl: capture,
			websiteUrl: "https://alexkipchirchirkemboi.netlify.app"
		}
	];

	useEffect(() => {}, []);
	return (
		<section
			id="Portfolio"
			className="bg-sky-950  animated-fadeIn">
			<h1 className="font-bold text-3xl lg:text-2xl sm:text-5xl xl:text-3xl text-center text-teal-400">
				Portfolio
			</h1>
			<h1 className="text-2xl font-bold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-400 px-10">
				Things I’ve made trying to put my dent in the universe.
			</h1>
			<p className="mt-1 text-base text-zinc-600 dark:text-zinc-400 px-10">
				I’ve worked on tons of little projects over the years but these are the
				ones that I’m most proud of. Many of them are open-source, so if you see
				something that piques your interest, check out the code and contribute
				if you have ideas for how it can be improved.
			</p>
			<div className=" grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 sm:gap-1 px-10">
				{portfolioData.map((item) => (
					<div
						key={item.id}
						className=" p-10 group  group-hover:opacity-100  flex flex-col justify-start rounded m-10 border">
						<div className="relative flex flex-col items-start">
							<div className="relative z-10 bg-white items-center justify-center  dark:bg-sky-900 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
								<Image
									alt=""
									loading="lazy"
									decoding="async"
									data-nimg="1"
									className=" rounded shadow "
									src={item.imageUrl}
								/>
							</div>
							<h2 className="mt-1 text-base font-semibold text-zinc-800 dark:text-zinc-100">
								<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
								<a href={item.websiteUrl}>
									<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
									<span className="relative z-10 text-zinc-400">
										{item.title}
									</span>
								</a>
							</h2>
							<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
								{item.description}
							</p>
							<p className="relative z-10  flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
								<svg
									viewBox="0 0 24 24"
									aria-hidden="true"
									className="h-6 w-6 flex-none text-zinc-400">
									<path
										d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
										fill="currentColor"></path>
								</svg>
								<span className="ml-2 text-zinc-400">{item.websiteUrl}</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
