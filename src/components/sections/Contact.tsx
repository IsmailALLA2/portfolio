"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "alkaismail2001@gmail.com",
    href: "mailto:alkaismail2001@gmail.com",
    color: "#00D9FF",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+212 651 462 399",
    href: "tel:+212651462399",
    color: "#7C3AED",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/ismail-alla",
    href: "https://www.linkedin.com/in/ismail-alla/",
    color: "#0077B5",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rabat, Morocco",
    href: "#",
    color: "#F59E0B",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-[#1E2A38] bg-[#080B12] text-[#F0EDE8] placeholder-[#4A5568] text-sm focus:outline-none focus:border-[#00D9FF]/50 focus:ring-1 focus:ring-[#00D9FF]/20 transition-all";

  return (
    <section id="contact" className="relative py-28 bg-[#080B12]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E2A38] to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,217,255,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Contact</p>
          <h2
            className="font-syne text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-4 leading-tight"
            style={{ fontWeight: 800 }}
          >
            Let&apos;s build something
            <br />
            <span className="text-gradient-accent">together</span>
          </h2>
          <p className="text-[#8892A4] text-lg max-w-md mx-auto">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact links — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-xs text-[#4A5568] uppercase tracking-wider font-semibold mb-6">
              Reach me at
            </p>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#1E2A38] bg-[#0D1117] hover:border-[#2A3A4E] group transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ background: `${link.color}12`, border: `1px solid ${link.color}25` }}
                >
                  <link.icon className="w-4 h-4" style={{ color: link.color }} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#4A5568] mb-0.5">{link.label}</div>
                  <div className="text-sm text-[#F0EDE8] font-medium truncate group-hover:text-[#00D9FF] transition-colors">
                    {link.value}
                  </div>
                </div>
                {link.href.startsWith("http") && (
                  <ArrowUpRight className="w-4 h-4 text-[#4A5568] ml-auto flex-shrink-0 group-hover:text-[#00D9FF] transition-colors" />
                )}
              </a>
            ))}

            {/* Availability badge */}
            <div className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl border border-[#10B981]/25 bg-[#10B981]/05">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse flex-shrink-0" />
              <span className="text-sm text-[#10B981] font-medium">Available for new opportunities</span>
            </div>
          </motion.div>

          {/* Contact form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card p-8">
              <h3 className="font-syne text-lg font-bold text-[#F0EDE8] mb-6" style={{ fontWeight: 700 }}>
                Send me a message
              </h3>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/25 flex items-center justify-center">
                    <Send className="w-5 h-5 text-[#00D9FF]" />
                  </div>
                  <p className="text-[#F0EDE8] font-semibold">Message sent!</p>
                  <p className="text-[#8892A4] text-sm">I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#4A5568] mb-2 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                        placeholder="Your name"
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#4A5568] mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                        placeholder="you@company.com"
                        id="contact-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#4A5568] mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputClass}
                      placeholder="What's this about?"
                      id="contact-subject"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#4A5568] mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project or opportunity..."
                      id="contact-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    id="contact-submit"
                    className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-[#080B12]/30 border-t-[#080B12] animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
