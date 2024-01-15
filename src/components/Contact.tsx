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

const Contact = () => {
	useEffect(() => {}, []);
	return (
		<section
			id="contact border "
			className="bg-sky-950 px-10 animate-fadeIn">
			<div className="card border border-gray-700 rounded ">
				<div className="card-header text-zinc-600">
					<h1 className="text-center text-3xl md:text-3xl lg:text-3xl font-bold font-bold text-teal-500">
						Contact Me
					</h1>
				</div>
				<div className="card-body px-10 py-2">
					<form
						id="contactForm"
						action="javascript:void(0);">
						<div className="mb-4">
							<label
								htmlFor="name"
								className="text-zinc-600 block">
								Name
							</label>
							<input
								type="text"
								className="w-full border text-zinc-600 rounded border border-gray-700 bg-sky-950 py-2 px-3"
								id="name"
								name="name"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="text-zinc-600 block">
								Email address
							</label>
							<input
								type="email"
								className="w-full border text-zinc-600 rounded border border-gray-700 bg-sky-950 py-2 px-3"
								id="email"
								name="email"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="message"
								className="text-zinc-600 block">
								Message
							</label>
							<textarea
								className="w-full border text-zinc-600 rounded border border-gray-700 bg-sky-950 py-2 px-3"
								id="message"
								name="message"
								rows={5}
								required></textarea>
						</div>
						<button
							type="submit"
							className="rounded border border-gray-700 bg-sky-950 text-teal-500 border py-2 px-4">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
