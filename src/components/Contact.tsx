"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e: { target: { name: any; value: any; }; }) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		try {
			const response = await fetch("https://dainty-druid-2763c3.netlify.app/api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				toast.info("Message sent successfully!");
				toast.success("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			} else {
				console.log(formData)
				toast.error("Message Not sent successfully!");
				const data = await response.json();
				toast.error(data.error || "Failed to send message. Please try again.");
			}
		} catch (error) {
			toast.error("An error occurred. Please try again.");
		}
	};

	return (
		<section id="contact" className="bg-sky-950 px-10 animate-fadeIn pb-5">
			<div className="card border border-gray-700 rounded">
				<div className="card-header text-zinc-600">
					<h1 className="text-center text-3xl font-bold text-teal-500">
						Contact Me
					</h1>
				</div>
				<div className="card-body px-10 py-2">
					<form id="contactForm" onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="name" className="text-zinc-600 block">
								Name
							</label>
							<input
								type="text"
								className="w-full border text-zinc-600 rounded border-gray-700 bg-sky-950 py-2 px-3"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="text-zinc-600 block">
								Email address
							</label>
							<input
								type="email"
								className="w-full border text-zinc-600 rounded border-gray-700 bg-sky-950 py-2 px-3"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="text-zinc-600 block">
								Message
							</label>
							<textarea
								className="w-full border text-zinc-600 rounded border-gray-700 bg-sky-950 py-2 px-3"
								id="message"
								name="message"
								rows={5}
								value={formData.message}
								onChange={handleChange}
								required></textarea>
						</div>
						<button
							type="submit"
							className="rounded border border-gray-700 bg-sky-950 text-teal-500 py-2 px-4">
							Send Message
						</button>
					</form>
					<ToastContainer />
				</div>
			</div>
		</section>
	);
};

export default Contact;
