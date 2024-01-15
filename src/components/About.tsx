"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import alex from "../images/kemboi.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faTwitter,
	faGithub
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
	const [showMore, setShowMore] = useState(false);

	const toggleReadMore = () => {
		setShowMore(!showMore);
	};
	useEffect(() => {}, []);
	return (
		<div className="md:flex md:flex-row mx-10  animate-fadeIn group group-hover:scale-100 group-hover:opacity-100">
			<div className="md:w-2/2 sm:w-2/2 sm:m-4 bg-sky-950  p-6 rounded-md group group-hover:scale-100 group-hover:opacity-100  border border-gray-700">
				<h1 className="text-center text-white w-50 m-auto text-3xl font-bold ">
					About Me
				</h1>
				<p className="text-white">
					My name is Alex Kemboi. I&apos;m a graduate from Kisii University in
					Kenya with a degree in Software Engineering. I&apos;m most passionate
					about giving back to the community, and my goal is to pursue this
					passion within the field of software engineering. In my free time I
					like working on open source projects. I seek to grow my career in a
					progressive organization where the blend of my talents and enhanced
					education skills will help to achieve the goals of the organization. I
					enjoy being challenged and engaging with projects that require me to
					work outside my comfort and knowledge set as I continue to learn and
					develop techniques that are important to me.
				</p>
				{!showMore && (
					<button
						className="btn btn-link text-teal-400 text-sm mt-2"
						onClick={toggleReadMore}>
						Read More &gt;
					</button>
				)}
			</div>
		</div>
	);
};

export default About;
