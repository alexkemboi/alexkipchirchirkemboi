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
	const downloadCV = () => {};
	useEffect(() => {}, []);
	return (
		<section
			id="home"
			className="bg-sky-950 ">
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
							<div className="text-left bg-sky-950 transform transition-transform ease-in-out duration-500 animate-slideIn">
								<p className="text-white text-2xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:w-2/3">
									Full stack Software developer, in Nairobi, Kenya. I am
									creative, a problem solver, and a critical thinker.
								</p>
								<p className="w-2/3 text-sm">
									I&apos;m a software engineer with a strong emphasis on web
									development. My skillset extends to encompass a wide array of
									technologies. This extensive range of expertise enables me to
									create robust and versatile applications with confidence.
								</p>

								<button
									type="button"
									className="btn bg-sky-900 shadow-5xl rounded py-1 px-10 text-white"
									onClick={downloadCV}>
									Resume
								</button>

								<div className="flex flex-row">
									<Link
										href="https://www.linkedin.com/in/alex-kemboi-9642a3166"
										target="_blank"
										rel="noopener noreferrer"
										className="text-dark">
										<FontAwesomeIcon
											icon={faLinkedin}
											className="w-6 h-6 m-2"
										/>
									</Link>
									<Link
										href="https://www.twitter.com/alexkemboi97"
										target="_blank"
										rel="noopener noreferrer"
										className="text-dark">
										<FontAwesomeIcon
											icon={faTwitter}
											className="w-6 h-6 m-2"
										/>
									</Link>
									<Link
										href="https://www.github.com/alexkemboi"
										target="_blank"
										rel="noopener noreferrer"
										className="text-dark">
										<FontAwesomeIcon
											icon={faGithub}
											className="w-6 h-6 m-2"
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
