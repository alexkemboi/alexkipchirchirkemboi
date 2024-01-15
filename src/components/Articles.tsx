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
	useEffect(() => {}, []);
	return (
		<main className="flex-auto mb-10">
			<div className="px-10">
				<div className="mx-auto w-full">
					<div className="relative ">
						<div className="mx-auto max-w-2xl lg:max-w-5xl">
							<header className="max-w-2xl">
								<h4 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
									Writing on software design, company building, and the
									aerospace industry.
								</h4>
								<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
									All of my long-form thoughts on programming, leadership,
									product design, and more, collected in chronological order.
								</p>
							</header>
							<div className="mt-16 sm:mt-20">
								<div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
									<div className="flex max-w-3xl flex-col space-y-16">
										<article className="md:grid md:grid-cols-4 md:items-baseline">
											<div className="md:col-span-3 group relative flex flex-col items-start">
												<h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
													<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
													<a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
														<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
														<span className="relative z-10">
															Crafting a design system for a multiplanetary
															future
														</span>
													</a>
												</h2>
												<time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
													<span
														className="absolute inset-y-0 left-0 flex items-center"
														aria-hidden="true">
														<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
													</span>
													September 5, 2022
												</time>
												<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
													Most companies try to stay ahead of the curve when it
													comes to visual design, but for Planetaria we needed
													to create a brand that would still inspire us 100
													years from now when humanity has spread across our
													entire solar system.
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
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"></path>
													</svg>
												</div>
											</div>
											<time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
												September 5, 2022
											</time>
										</article>
										<article className="md:grid md:grid-cols-4 md:items-baseline">
											<div className="md:col-span-3 group relative flex flex-col items-start">
												<h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
													<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
													<a href="/articles/introducing-animaginary">
														<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
														<span className="relative z-10">
															Introducing Animaginary: High performance web
															animations
														</span>
													</a>
												</h2>
												<time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
													<span
														className="absolute inset-y-0 left-0 flex items-center"
														aria-hidden="true">
														<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
													</span>
													September 2, 2022
												</time>
												<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
													When you’re building a website for a company as
													ambitious as Planetaria, you need to make an
													impression. I wanted people to visit our website and
													see animations that looked more realistic than reality
													itself.
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
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"></path>
													</svg>
												</div>
											</div>
											<time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
												September 2, 2022
											</time>
										</article>
										<article className="md:grid md:grid-cols-4 md:items-baseline">
											<div className="md:col-span-3 group relative flex flex-col items-start">
												<h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
													<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
													<a href="/articles/rewriting-the-cosmos-kernel-in-rust">
														<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
														<span className="relative z-10">
															Rewriting the cosmOS kernel in Rust
														</span>
													</a>
												</h2>
												<time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
													<span
														className="absolute inset-y-0 left-0 flex items-center"
														aria-hidden="true">
														<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
													</span>
													July 14, 2022
												</time>
												<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
													When we released the first version of cosmOS last
													year, it was written in Go. Go is a wonderful
													programming language, but it’s been a while since I’ve
													seen an article on the front page of Hacker News about
													rewriting some important tool in Go and I see articles
													on there about rewriting things in Rust every single
													week.
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
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"></path>
													</svg>
												</div>
											</div>
											<time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
												July 14, 2022
											</time>
										</article>
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
