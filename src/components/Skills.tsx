"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import alex from "../images/alex.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
	faHtml5,
	faCss3Alt,
	faJs,
	faBootstrap,
	faReact,
	faJava,
	faAws,
	faNodeJs,
	faAngular,
	faCuttlefish,
	faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
	faCloud,
	faCode,
	faDatabase,
	faCode as faDatabaseSolid
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
	const [skillCards, setSkillCards] = useState<JSX.Element[] | undefined>();

	useEffect(() => {
		setSkillCards(generateCards());
	}, []);
	const skillsData = [
		{
			id: 1,
			name: "HTML5",
			color: "bg-red-500",
			icon: (
				<FontAwesomeIcon
					icon={faHtml5}
					className="text-red-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 2,
			name: "CSS3",
			color: "bg-gray-800",
			icon: (
				<FontAwesomeIcon
					icon={faCss3Alt}
					className="text-gray-800 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 3,
			name: "Javascript",
			color: "bg-yellow-500",
			icon: (
				<FontAwesomeIcon
					icon={faJs}
					className="text-yellow-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 4,
			name: "Bootstrap",
			color: "bg-purple-500",
			icon: (
				<FontAwesomeIcon
					icon={faBootstrap}
					className="text-purple-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 5,
			name: "React",
			color: "bg-blue-500",
			icon: (
				<FontAwesomeIcon
					icon={faReact}
					className="text-blue-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 6,
			name: "MongoDB",
			color: "bg-yellow-500",
			icon: (
				<FontAwesomeIcon
					icon={faDatabase}
					className="text-yellow-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 7,
			name: "Java",
			color: "bg-blue-500",
			icon: (
				<FontAwesomeIcon
					icon={faJava}
					className="text-blue-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 8,
			name: "AWS",
			color: "bg-green-500",
			icon: (
				<FontAwesomeIcon
					icon={faAws}
					className="text-green-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 9,
			name: "C",
			color: "bg-red-500",
			icon: (
				<FontAwesomeIcon
					icon={faCode}
					className="text-red-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 10,
			name: "NodeJS",
			color: "bg-gray-600",
			icon: (
				<FontAwesomeIcon
					icon={faNodeJs}
					className="text-gray-600 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 11,
			name: "MySQL",
			color: "bg-green-500",
			icon: (
				<FontAwesomeIcon
					icon={faDatabase}
					className="text-green-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 12,
			name: "Angular",
			color: "bg-red-500",
			icon: (
				<FontAwesomeIcon
					icon={faAngular}
					className="text-red-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 13,
			name: "Azure",
			color: "bg-gray-800",
			icon: (
				<FontAwesomeIcon
					icon={faCloud}
					className="text-gray-800 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 14,
			name: "C#",
			color: "bg-gray-600",
			icon: (
				<FontAwesomeIcon
					icon={faCuttlefish}
					className="text-gray-600 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 15,
			name: "ASP.NET",
			color: "bg-purple-500",
			icon: (
				<FontAwesomeIcon
					icon={faCode}
					className="text-purple-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		},
		{
			id: 16,
			name: "Git",
			color: "bg-blue-500",
			icon: (
				<FontAwesomeIcon
					icon={faGithub}
					className="text-blue-500 text-2xl mx-auto text-center"
				/>
			),
			progress: 80
		}
	];
	const generateCards = () => {
		return skillsData.map((skill, index) => (
			<div
				className="rounded hover:scale-105 flex items-start w-full m-1 p-2"
				key={index}>
				<div
					className={`w-2/3 h-full  flex flex-col rounded-l ${skill.color} p-2`}>
					<h6 className="text-white font-bold text-center">{skill.name}</h6>
					<div
						className={`w-${skill.progress} bg-sky-950`}
						role="progressbar"
						aria-valuenow={skill.progress}
						aria-valuemin={0}
						aria-valuemax={100}></div>
				</div>
				<div className="w-1/3 text-center bg-white rounded-r p-2">
					{skill.icon}
				</div>
			</div>
		));
	};

	return (
		<section
			id="Skills"
			className="bg-sky-950  px-10 mb-20">
			<div>
				<h4 className="text-2xl lg:text-2xl sm:text-5xl xl:text-3xl font-black text-center text-teal-400">
					Skills
				</h4>
				<p className="text-zinc-600 dark:text-zinc-400 w-full">
					I am a creative,a problem solver and a critical thinker, proficient in
					the following technology stacks.
				</p>
			</div>
			<div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1">
				{skillCards}
			</div>
		</section>
	);
};

export default Skills;
