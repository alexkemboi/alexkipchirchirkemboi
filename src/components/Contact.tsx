"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";


export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    projectName: "",
    contactPerson: "",
    email: "",
    description: "",
    budget: "",
    deadline: "",
    goals: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/sendemail",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success(
          "Project requirements submitted successfully."
        );

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
        toast.error(
          "Unable to submit your request."
        );
      }
    } catch (error) {
      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-400
            "
          >
            Let's Work Together
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Start Your
            <span className="block bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Next Project
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-zinc-400">
            Tell me about your project and I'll
            help turn your idea into a scalable,
            modern solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Contact Information */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <h3 className="text-2xl font-bold text-white">
              Contact Information
            </h3>

            <p className="mt-4 text-zinc-400">
              Available for freelance,
              consulting, enterprise solutions,
              and long-term collaborations.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex gap-4">
                <Mail className="text-cyan-400" />
                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>
                  <p className="text-zinc-400">
                    alex@example.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-cyan-400" />
                <div>
                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>
                  <p className="text-zinc-400">
                    +254 xxx xxx xxx
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-cyan-400" />
                <div>
                  <h4 className="text-white font-semibold">
                    Location
                  </h4>
                  <p className="text-zinc-400">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="
              lg:col-span-2
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="projectName"
                  placeholder="Project Name"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                    outline-none
                    focus:border-cyan-500
                  "
                />

                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Contact Person"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                    outline-none
                    focus:border-cyan-500
                  "
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-500
                "
              />

              <textarea
                rows={5}
                name="description"
                placeholder="Project Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-500
                "
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                  "
                />

                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                  "
                />
              </div>

              <textarea
                rows={4}
                name="goals"
                placeholder="Project Goals"
                value={formData.goals}
                onChange={handleChange}
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  text-white
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-sky-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  hover:scale-105
                  disabled:opacity-50
                "
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Project
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

        <ToastContainer />
      </div>
    </section>
  );
}