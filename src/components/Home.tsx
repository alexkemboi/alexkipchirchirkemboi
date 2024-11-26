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

const Home = () => {
	const downloadCV = () => { };
	useEffect(() => { }, []);
	return (
		<section
			id="home"
			className="bg-sky-950 animate-fadeIn ">
			<div className="card ">
				<div className="card-content">
					<div className="flex flex-col lg:flex lg:flex-col m-10">
						<div className="bg-sky-950">
							<div className="rounded-full overflow-hidden w-40 h-40 m-4">
								<Image
									src={alex}
									alt="Description"
								/>
							</div>
						</div>

						<div className="bg-sky-950 overflow-hidden ">
							<div className="text-left bg-sky-950 transform transition-transform ease-in-out duration-500 ">
								<p className="text-zinc-400 text-2xl lg:text-2xl sm:text-5xl xl:text-3xl font-bold mb-2 lg:w-2/3">
									Full stack Software developer, in Nairobi, Kenya. I am
									creative, a problem solver, and a critical thinker.
								</p>
								<p className="w-2/3 text-sm text-zinc-600 dark:text-zinc-400">
									I&apos;m a software engineer with a strong emphasis on web
									development. My skillset extends to encompass a wide array of
									technologies. This extensive range of expertise enables me to
									create robust and versatile applications with confidence.
								</p>

								<button
									type="button"
									className="btn border border-zinc-400  shadow-5xl rounded py-1 px-10 text-teal-400 my-4 font-bold"
									onClick={downloadCV}>
									<a href={`/resume`}>
										<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
										<span className="relative z-10 text-teal-500">
											Resume &gt;
										</span>
									</a>

								</button>

								<div className="flex flex-row">
									<Link
										href="https://www.linkedin.com/in/alex-kemboi-9642a3166"
										target="_blank"
										rel="noopener noreferrer"
										className="text-dark">
										<FontAwesomeIcon
											icon={faLinkedin}
											className="w-6 h-6 m-2 text-zinc-400"
										/>
									</Link>
									<Link
										href="https://www.twitter.com/alexkemboi97"
										target="_blank"
										rel="noopener noreferrer"
										className="text-dark">
										<FontAwesomeIcon
											icon={faTwitter}
											className="w-6 h-6 m-2 text-zinc-400"
										/>
									</Link>
									<Link
										href="https://www.github.com/alexkemboi"
										target="_blank"
										rel="noopener noreferrer"
										className="text-dark">
										<FontAwesomeIcon
											icon={faGithub}
											className="w-6 h-6 m-2 text-zinc-400"
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
