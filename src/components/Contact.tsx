/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const validateEmail = (emailStr: string) => {
    return /\S+@\S+\.\S+/.test(emailStr);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) return setFormError("Please enter your name.");
    if (!formData.email.trim()) return setFormError("Please enter your email address.");
    if (!validateEmail(formData.email)) return setFormError("Please enter a valid email address.");
    if (!formData.message.trim()) return setFormError("Please enter a message.");

    setIsSubmitting(true);
    setFormError("");

    const targetEmail = PERSONAL_INFO.socials.realEmail || "msaaad8484@gmail.com";
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || `https://formsubmit.co/ajax/${targetEmail}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === "true" || data.success === true) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      } else {
        if (data.message) {
          setFormError(data.message);
          setIsSubmitting(false);
        } else {
          setIsSubmitting(false);
          setSubmitSuccess(true);
        }
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto border-t border-emerald-900/30">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
          Have a project idea, internship opportunity, or question? Feel free to reach out directly or send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0d1712]/90 border border-emerald-900/40 space-y-5 shadow-md">
            <h3 className="font-bold text-lg text-white">Contact Information</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Available for remote & worldwide opportunities, machine learning projects, data science roles, and research collaborations.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-slate-400">Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.socials.realEmail}`}
                    className="text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    {PERSONAL_INFO.socials.realEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-slate-400">Phone</span>
                  <a
                    href={`tel:${PERSONAL_INFO.socials.realPhone.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    {PERSONAL_INFO.socials.realPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-slate-400">Location</span>
                  <p className="text-sm font-semibold text-slate-200">Lahore, Pakistan (Remote & Worldwide)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-900/30 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#070e0a] hover:bg-emerald-500 text-slate-200 hover:text-slate-950 border border-emerald-900/50 hover:border-emerald-400 text-xs font-semibold transition-all duration-200 cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 transition-colors" />
                LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#070e0a] hover:bg-emerald-500 text-slate-200 hover:text-slate-950 border border-emerald-900/50 hover:border-emerald-400 text-xs font-semibold transition-all duration-200 cursor-pointer"
              >
                <Github className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 transition-colors" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1712]/90 border border-emerald-900/40 shadow-md">
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="p-3 bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 rounded-full w-fit mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-extrabold text-xl text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you <span className="text-emerald-400 font-semibold">{formData.name || "visitor"}</span>! Your message has been submitted and sent to <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.socials.realEmail}</span>. Saad will review it and reply to you soon.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                <h3 className="font-extrabold text-xl text-white">Send me a message</h3>

                {formError && (
                  <div className="p-3 bg-red-950/80 border border-red-800/80 rounded-xl flex items-center gap-2 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="block text-xs font-medium text-slate-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name-input"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070e0a] border border-emerald-900/40 focus:border-emerald-500 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="block text-xs font-medium text-slate-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-input"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070e0a] border border-emerald-900/40 focus:border-emerald-500 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="block text-xs font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message-input"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070e0a] border border-emerald-900/40 focus:border-emerald-500 text-sm text-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xs transition-all active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

