// "use client";

// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		email: "",
// 		message: "",
// 	});

// 	const handleChange = (e: { target: { name: any; value: any; }; }) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const handleSubmit = async (e: { preventDefault: () => void; }) => {
// 		e.preventDefault();

// 		try {
// 			const response = await fetch("https://kemboialex.netlify.app/api", {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify(formData),
// 			});

// 			if (response.ok) {
// 				toast.info("Message sent successfully!");
// 				toast.success("Message sent successfully!");
// 				setFormData({ name: "", email: "", message: "" });
// 			} else {
// 				console.log(formData)
// 				toast.error("Message Not sent successfully!");
// 				const data = await response.json();
// 				toast.error(data.error || "Failed to send message. Please try again.");
// 			}
// 		} catch (error) {
// 			toast.error("An error occurred. Please try again.");
// 		}
// 	};

// 	return (
// 		<section id="contact" className="bg-sky-950 px-10 animate-fadeIn pb-5">
// 			<div className="card border border-gray-700 rounded">
// 				<div className="card-header text-zinc-600">
// 					<h1 className="text-center text-3xl font-bold text-teal-500">
// 						Contact me for your next project
// 					</h1>
// 				</div>
// 				<div className="card-body px-10 py-2">
// 					<form id="contactForm" onSubmit={handleSubmit}>
// 						<div className="mb-4">
// 							<label htmlFor="name" className="text-zinc-600 block">
// 								Name
// 							</label>
// 							<input
// 								type="text"
// 								className="w-full border text-gray-200 border-gray-100 bg-sky-950 text-zinc-600 rounded border-gray-700 bg-sky-950 py-2 px-3"
// 								id="name"
// 								name="name"
// 								value={formData.name}
// 								onChange={handleChange}
// 								required
// 							/>
// 						</div>
// 						<div className="mb-4">
// 							<label htmlFor="email" className="text-zinc-600 block">
// 								Email address
// 							</label>
// 							<input
// 								type="email"
// 								className="w-full border text-gray-200 border-gray-100 bg-sky-950 text-zinc-600 rounded border-gray-700 bg-sky-950 py-2 px-3"
// 								id="email"
// 								name="email"
// 								value={formData.email}
// 								onChange={handleChange}
// 								required
// 							/>
// 						</div>
// 						<div className="mb-4">
// 							<label htmlFor="message" className="text-zinc-600 block">
// 								Message
// 							</label>
// 							<textarea
// 								className="w-full border text-gray-200 border-gray-100 bg-sky-950 text-zinc-600 rounded border-gray-700 bg-sky-950 py-2 px-3"
// 								id="message"
// 								name="message"
// 								rows={5}
// 								value={formData.message}
// 								onChange={handleChange}
// 								required></textarea>
// 						</div>
// 						<button
// 							type="submit"
// 							className="rounded border border-gray-700 bg-sky-950 text-teal-500 py-2 px-4">
// 							Send Message
// 						</button>
// 					</form>
// 					<ToastContainer />
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Contact;









"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectRequirements = () => {
	const [formData, setFormData] = useState({
		projectName: "test",
		contactPerson: "test",
		email: "test",
		description: "test",
		budget: "test",
		deadline: "test",
		goals: "test",
	});

	const handleChange = (e: { target: { name: any; value: any; }; }) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:3000/api/sendemail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				toast.success("Requirements submitted successfully!");
				setFormData({
					projectName: "",
					contactPerson: "",
					email: "",
					description: "",
					budget: "",
					deadline: "",
					goals: "",
				});
			} else {
				const data = await response.json();
				toast.error(data.error || "Failed to submit requirements. Please try again.");
			}
		} catch (error) {
			toast.error("An error occurred. Please try again.");
		}
	};

	return (
		<section id="project-requirements" className="bg-sky-950 px-10 py-5">
			<div className="card border border-gray-300  rounded-lg shadow-lg">
				<div className="card-header">
					<h1 className="text-center text-2xl font-bold text-white">
						SUBMIT YOUR PROJECT REQUIREMENTS
					</h1>
				</div>
				<div className="card-body px-8 py-6">
					<form id="requirementsForm" onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="projectName" className="text-white block">
								Project Name
							</label>
							<input
								type="text"
								className="w-full border text-gray-200 border-gray-100 bg-sky-950 rounded-lg px-3 py-2"
								id="projectName"
								name="projectName"
								value={formData.projectName}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="contactPerson" className="text-white block">
								Contact Person
							</label>
							<input
								type="text"
								className="w-full border text-gray-200 border-gray-100 bg-sky-950 rounded-lg px-3 py-2"
								id="contactPerson"
								name="contactPerson"
								value={formData.contactPerson}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="text-white block">
								Email Address
							</label>
							<input
								type="email"
								className="w-full border text-gray-200 border-gray-100 bg-sky-950 rounded-lg px-3 py-2"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="description" className="text-white block">
								Project Description
							</label>
							<textarea
								className="w-full border text-gray-200 border-gray-100 bg-sky-950 rounded-lg px-3 py-2"
								id="description"
								name="description"
								rows={4}
								value={formData.description}
								onChange={handleChange}
								required></textarea>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
							<div>
								<label htmlFor="budget" className="text-white block">
									Estimated Budget ($)
								</label>
								<input
									type="number"
									className="w-full border text-gray-200 border-gray-100 bg-sky-950 rounded-lg px-3 py-2"
									id="budget"
									name="budget"
									value={formData.budget}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<label htmlFor="deadline" className="text-white block">
									Deadline
								</label>
								<input
									type="date"
									className="w-full border text-gray-200 border-gray-100 bg-sky-950 rounded-lg px-3 py-2"
									id="deadline"
									name="deadline"
									value={formData.deadline}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="mb-4">
							<label htmlFor="goals" className="text-white block">
								Project Goals
							</label>
							<textarea
								className="w-full border text-gray-200 border-gray-100 bg-sky-950 rounded-lg px-3 py-2"
								id="goals"
								name="goals"
								rows={3}
								value={formData.goals}
								onChange={handleChange}
								required></textarea>
						</div>
						<div className="text-center">
							<button
								type="submit"
								className="bg-sky-950 border border-gray-100  text-white rounded-lg px-6 py-2 hover:bg-sky-500">
								Submit Requirements
							</button>
						</div>
					</form>
					<ToastContainer />
				</div>
			</div>
		</section>
	);
};

export default ProjectRequirements;
