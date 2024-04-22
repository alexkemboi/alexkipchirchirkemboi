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

const Articles = () => {
	const articlesData = [
		{
			id: 1,
			title: "Introduction to Git Version Control",
			slug: "introduction-to-git-version-control",
			date: "January 10, 2023",
			excerpt:
				"Learn the basics of Git version control, including how to initialize a repository, make commits, and collaborate with others on your projects."
		},
		{
			id: 2,
			title: "Demystifying DevOps: A Comprehensive Guide",
			slug: "demystifying-devops-comprehensive-guide",
			date: "February 15, 2023",
			excerpt:
				"Explore the key principles and practices of DevOps, bridging the gap between development and operations to enhance collaboration and productivity."
		},
		{
			id: 3,
			title:
				"Continuous Integration and Continuous Deployment (CI/CD) Explained",
			slug: "ci-cd-explained",
			date: "March 20, 2023",
			excerpt:
				"Understand the concepts behind CI/CD and how it streamlines the software development process by automating testing, integration, and deployment."
		},
		{
			id: 4,
			title: "Comprehensive Guide to Software Testing Strategies",
			slug: "comprehensive-guide-to-software-testing",
			date: "April 25, 2023",
			excerpt:
				"Explore various software testing strategies, including unit testing, integration testing, and end-to-end testing, to ensure the quality of your applications."
		}
	];
	useEffect(() => {
		// Add any additional logic you may need
	}, []);

	return (
		<main className="flex-auto mb-10 animate-fadeIn">
			<div className="px-10">
				<div className="mx-auto w-full">
					<div className="relative ">
						<div className="mx-auto">
							<header className="mx-w-2xl group group-hover:opacity-100">
								<h1 className="font-bold text-3xl lg:text-2xl sm:text-5xl xl:text-3xl text-center text-teal-400">
									Articles
								</h1>
								<h4 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100"></h4>
								<p className=" text-base text-zinc-600 dark:text-zinc-400">
									Writing on software design, company building, and the
									aerospace industry. All of my long-form thoughts on
									programming, leadership, product design, and more, collected
									in chronological order.
								</p>
							</header>
							<div className="mt-4  ">
								<div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
									<div className="flex  flex-col space-y-1">
										{articlesData.map((article) => (
											<article
												key={article.id}
												className="md:grid md:grid-cols-4 md:items-baseline ">
												<div className="md:col-span-3 group  relative flex flex-col items-start mt-10">
													<h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
														<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
														<a href={`/articles/${article.slug}`}>
															<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
															<span className="relative z-10 text-teal-500">
																{article.title}
															</span>
														</a>
													</h2>
													<time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-teal-500 dark:text-teal-500 pl-3.5">
														<span
															className="absolute inset-y-0 left-0 flex items-center"
															aria-hidden="true">
															<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
														</span>
														{article.date}
													</time>
													<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
														{article.excerpt}
													</p>
													<div
														aria-hidden="true"
														className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
														Read article
														<svg
															viewBox="0 0 16 16"
															fill="none"
															aria-hidden="true"
															className="ml-1 h-4 w-4 stroke-current">
															<path
																d="M6.75 5.75 9.25 8l-2.5 2.25"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"></path>
														</svg>
													</div>
												</div>
												<time className="mt-1 hidden md:block relative z-10 order-first mb-3  items-center text-sm text-zinc-400 dark:text-zinc-500">
													{article.date}
												</time>
											</article>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Articles;
