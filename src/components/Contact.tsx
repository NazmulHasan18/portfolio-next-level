"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@solt.design", href: "mailto:hello@solt.design" },
  { icon: Phone, label: "Phone", value: "+1 (555) 234-5678", href: "tel:+15552345678" },
  { icon: MapPin, label: "Location", value: "Vilnius, Lithuania", href: "#" },
];

const fadeUp = {
  inactive: { opacity: 0, y: 24 },
  active: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim() || data.name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address";
  if (!data.subject.trim() || data.subject.trim().length < 3)
    errors.subject = "Subject must be at least 3 characters";
  if (!data.message.trim() || data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof Errors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof Errors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setFormState("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTouched({});
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl font-body text-sm bg-white/60 dark:bg-[#121212]/60 border transition-all outline-none placeholder:text-[#112D4E]/30 dark:placeholder:text-[#9CA3AF]/40 text-[#112D4E] dark:text-[#E5E7EB] focus:ring-2 focus:ring-[#3F72AF]/30 dark:focus:ring-[#3F8EFC]/30 ${
      touched[field] && errors[field]
        ? "border-red-400 dark:border-red-500 focus:border-red-400"
        : touched[field] && !errors[field]
          ? "border-emerald-400 dark:border-emerald-500 focus:border-emerald-400"
          : "border-[#DBE2EF] dark:border-[#374151] focus:border-[#3F72AF] dark:focus:border-[#3F8EFC]"
    }`;

  return (
    <section id="contact" className="py-24 bg-[#DBE2EF]/20 dark:bg-[#1F2937]/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#3F72AF]/5 dark:bg-[#3F8EFC]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#DBE2EF]/60 dark:bg-[#1F2937]/60 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-10 bg-[#3F72AF] dark:bg-[#3F8EFC]" />
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#3F72AF] dark:text-[#3F8EFC]">
            Contact
          </span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="font-display text-4xl sm:text-5xl text-[#112D4E] dark:text-[#E5E7EB] mb-4"
        >
          Let's <span className="italic text-[#3F72AF] dark:text-[#3F8EFC]">Talk.</span>
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="font-body text-[#112D4E]/60 dark:text-[#9CA3AF] max-w-lg mb-12"
        >
          Don't hesitate to drop me an email or contact me via my social profiles 👋
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info column */}
          <div className="lg:col-span-2">
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  custom={3 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-[#1F2937]/60 border border-[#DBE2EF] dark:border-[#374151]/50 hover:border-[#3F72AF]/30 dark:hover:border-[#3F8EFC]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 dark:bg-[#3F8EFC]/10 flex items-center justify-center group-hover:bg-[#3F72AF]/20 dark:group-hover:bg-[#3F8EFC]/20 transition-all">
                    <item.icon className="w-4 h-4 text-[#3F72AF] dark:text-[#3F8EFC]" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#112D4E]/40 dark:text-[#9CA3AF]/60">{item.label}</p>
                    <p className="font-body text-sm font-medium text-[#112D4E] dark:text-[#E5E7EB]">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="p-5 rounded-2xl bg-linear-to-br from-[#3F72AF]/10 to-[#DBE2EF]/60 dark:from-[#3F8EFC]/10 dark:to-[#1F2937] border border-[#3F72AF]/20 dark:border-[#3F8EFC]/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <p className="font-body text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Available Now
                </p>
              </div>
              <p className="font-body text-sm text-[#112D4E]/70 dark:text-[#9CA3AF] leading-relaxed">
                I'm currently open to freelance projects and full-time opportunities. Response time: 24hrs.
              </p>
            </motion.div>
          </div>

          {/* Form column */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-100 flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-white/60 dark:bg-[#1F2937]/60 border border-[#DBE2EF] dark:border-[#374151]/50"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                  </motion.div>
                  <h3 className="font-display text-2xl text-[#112D4E] dark:text-[#E5E7EB] mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-body text-sm text-[#112D4E]/60 dark:text-[#9CA3AF] mb-6">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="px-6 py-2.5 rounded-xl bg-[#3F72AF] dark:bg-[#3F8EFC] text-white text-sm font-semibold hover:bg-[#2C5A91] dark:hover:bg-[#2D7AE4] transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4 p-6 rounded-2xl bg-white/60 dark:bg-[#1F2937]/60 border border-[#DBE2EF] dark:border-[#374151]/50"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-medium text-[#112D4E]/60 dark:text-[#9CA3AF] mb-1.5 block">
                        Full Name
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        className={inputClass("name")}
                      />
                      {touched.name && errors.name && (
                        <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium text-[#112D4E]/60 dark:text-[#9CA3AF] mb-1.5 block">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@example.com"
                        className={inputClass("email")}
                      />
                      {touched.email && errors.email && (
                        <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs font-medium text-[#112D4E]/60 dark:text-[#9CA3AF] mb-1.5 block">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Project inquiry"
                      className={inputClass("subject")}
                    />
                    {touched.subject && errors.subject && (
                      <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="font-body text-xs font-medium text-[#112D4E]/60 dark:text-[#9CA3AF] mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`${inputClass("message")} resize-none`}
                    />
                    {touched.message && errors.message && (
                      <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#3F72AF] dark:bg-[#3F8EFC] text-white font-semibold text-sm shadow-lg shadow-[#3F72AF]/20 dark:shadow-[#3F8EFC]/15 hover:bg-[#2C5A91] dark:hover:bg-[#2D7AE4] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
