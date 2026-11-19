"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { profile } from "@/lib/content";
import { buttonClass } from "./ui/Button";
import Reveal from "./ui/Reveal";

const emptyForm = {
  projectName: "",
  contactPerson: "",
  email: "",
  description: "",
  budget: "",
  deadline: "",
  goals: "",
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thanks. Your project details are on their way to me.");
        setFormData(emptyForm);
      } else {
        toast.error("Unable to submit your request.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: "Based in", value: profile.location },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-dark relative overflow-hidden bg-navy py-20 text-white md:py-28"
    >
      <div className="container-site grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal className="flex flex-col">
          <p className="eyebrow text-white">
            <span className="text-amber">08</span>
            <span>Contact</span>
          </p>
          <h2
            id="contact-title"
            className="display mt-5 text-[clamp(2.3rem,1.2rem+3.8vw,4rem)]"
          >
            Have a system to build <span className="text-amber">or integrate?</span>
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-[1.65] text-mist">
            I take on full stack builds, banking and enterprise integrations,
            and consulting. Tell me what you need and I&apos;ll reply within a
            couple of working days.
          </p>

          <ul className="mt-10 space-y-5 border-t border-white/10 pt-8">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-white/15 text-amber">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-steel">
                    {label}
                  </span>
                  {href ? (
                    <a href={href} className="break-all text-[17px] font-semibold hover:text-amber">
                      {value}
                    </a>
                  ) : (
                    <span className="text-[17px] font-semibold">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 self-start border-b-2 border-amber pb-1 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"
          >
            Download my CV
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(PDF, opens in a new tab)</span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[18px] border border-white/10 bg-ink/40 p-6 md:p-10"
          >
            <h3 className="font-display text-lg font-extrabold uppercase tracking-[0.02em]">
              Start a project
            </h3>
            <p className="mt-1 text-sm text-steel">Fields marked * are required.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="projectName" className="field-label">Project name *</label>
                <input id="projectName" type="text" name="projectName" value={formData.projectName} onChange={handleChange} required className="field" />
              </div>
              <div>
                <label htmlFor="contactPerson" className="field-label">Your name *</label>
                <input id="contactPerson" type="text" name="contactPerson" autoComplete="name" value={formData.contactPerson} onChange={handleChange} required className="field" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="field-label">Email *</label>
                <input id="email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required className="field" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="description" className="field-label">Project description *</label>
                <textarea id="description" rows={4} name="description" value={formData.description} onChange={handleChange} required className="field resize-y" />
              </div>
              <div>
                <label htmlFor="budget" className="field-label">Budget (USD)</label>
                <input id="budget" type="text" inputMode="decimal" name="budget" value={formData.budget} onChange={handleChange} className="field" />
              </div>
              <div>
                <label htmlFor="deadline" className="field-label">Deadline</label>
                <input id="deadline" type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="field [color-scheme:dark]" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="goals" className="field-label">Goals</label>
                <textarea id="goals" rows={3} name="goals" value={formData.goals} onChange={handleChange} className="field resize-y" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={buttonClass("primary", "mt-8 w-full sm:w-auto")}
            >
              {loading ? (
                <>
                  <Loader2 className="size-[18px] animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Send project details
                  <Send className="size-[18px]" aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
}
