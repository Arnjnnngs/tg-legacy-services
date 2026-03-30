/*
 * DESIGN: "Professional Counsel" — TG Legacy Services Home Page (LIGHT EDITION)
 * Palette: White/off-white bg, #10B981 emerald accent, gray text
 * Fonts: Plus Jakarta Sans (headers), Outfit (body)
 * Layout: Full-bleed hero → service cards → areas → contact form
 * All data sourced 1:1 from tglegacyservices.com audit — zero hallucinations
 */
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  Shield,
  Clock,
  Star,
  ChevronDown,
  QrCode,
  FileText,
  Stamp,
} from "lucide-react";
import Navbar from "@/components/Navbar";

/* ── Real images from tglegacyservices.com audit (now hosted on CDN) ── */
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482235892/mnWrqo2QkdDrFegLqGD7mQ/hero-bg-WEynDnbKmaFWzGhmwPnrsF.webp";
const IMG_NOTARY_JOURNAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482235892/mnWrqo2QkdDrFegLqGD7mQ/notary-journal-professional-6gxKvXAGZfCUhsD2Ef2mCo.webp";
const IMG_NOTARY_STAMP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482235892/mnWrqo2QkdDrFegLqGD7mQ/notary-stamp-document-KPqCubMJq4eSb8CQH8PLVq.webp";
const IMG_QR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482235892/mnWrqo2QkdDrFegLqGD7mQ/qr-code-contact-YVQuHaCQxZ6JYJLkBwLBhy.webp";

/* ── Animation helpers ── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Service Areas ── */
const SERVICE_AREAS = [
  "Kansas City, Missouri",
  "Liberty",
  "Gladstone",
  "Independence",
  "Riverside",
  "North Kansas City",
  "Parkville",
];

/* ── General Notary Services ── */
const GENERAL_SERVICES = [
  { icon: FileText, label: "Acknowledgments" },
  { icon: FileText, label: "Jurats" },
  { icon: FileText, label: "Power of Attorney Documents" },
  { icon: FileText, label: "Affidavits" },
  { icon: FileText, label: "Legal Documents" },
];

/* ── Trust badges ── */
const TRUST_BADGES = [
  { icon: Shield, label: "Licensed & Bonded" },
  { icon: Star, label: "Trusted Professional" },
  { icon: Clock, label: "Fast Turnaround" },
  { icon: Calendar, label: "By Appointment" },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Notary Appointment Request — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Needed: ${formData.service}\n\nProject Scope / Message:\n${formData.message}`
    );
    window.location.href = `mailto:info@tglegacyservices.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.90) 100%)" }} />
        {/* Emerald glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15" style={{ background: "radial-gradient(ellipse, #10B981, transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative z-10 container text-center px-4">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)" }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="section-label text-emerald-600">Serving Kansas City, Missouri</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Mobile Notary Services
            <br />
            <span style={{ color: "#10B981" }}>in Kansas City, MO</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            We travel to you — homes, hospitals, businesses, and beyond.
            Fast, reliable, and professional notary services available by appointment.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {["Reliable", "Professional", "Trusted", "Fast"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm text-emerald-700 bg-emerald-50 border border-emerald-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:9136018371"
              className="btn-emerald flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
            >
              <Phone size={18} />
              Call Now — (913) 601-8371
            </a>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 border border-gray-300"
            >
              <Calendar size={18} />
              Request Appointment
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="text-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BADGES.map((badge, i) => (
              <FadeUp key={badge.label} delay={i * 0.08}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-200">
                  <badge.icon size={20} className="text-emerald-600 shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{badge.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="section-label mb-3">What We Offer</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Professional Notary Services
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
                From standard acknowledgments to complex legal documents, we handle all your notarization needs with precision and care.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* General Notary Work Card */}
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={IMG_NOTARY_JOURNAL}
                    alt="Notary journal and mobile notary phone"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.8) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="section-label">General Notary</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <Stamp size={20} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      General Notary Work
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {GENERAL_SERVICES.map((svc) => (
                      <li key={svc.label} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        <span className="text-sm">{svc.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>

            {/* Mobile Notary Services Card */}
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={IMG_NOTARY_STAMP}
                    alt="Professional notary stamping a document"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.8) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="section-label">Mobile Service</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <MapPin size={20} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Mobile Notary Services
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    We travel to homes, hospitals, businesses, and other convenient locations throughout the Kansas City, Missouri area to notarize important documents quickly and securely.
                  </p>
                  <p className="text-gray-600 text-sm mb-5">
                    <span className="text-emerald-600 font-semibold">Available by appointment.</span> Call or Text for Mobile notary service.
                  </p>
                  <a
                    href="tel:9136018371"
                    className="btn-emerald inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm"
                  >
                    <Phone size={14} />
                    Call or Text Now
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section id="areas" className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <p className="section-label mb-3">Where We Serve</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Kansas City Metro
                  <br />
                  <span style={{ color: "#10B981" }}>Service Areas</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We proudly provide mobile notary services throughout the Kansas City, Missouri metro area. If you don't see your city listed, call us — we may still be able to accommodate your location.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICE_AREAS.map((area, i) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-emerald-200"
                    >
                      <MapPin size={15} className="text-emerald-600 shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <QrCode size={20} className="text-emerald-600" />
                  <p className="section-label">Save Our Contact</p>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Scan to Save Our Info
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Scan the QR Code to save TG Legacy Services directly to your phone contacts.
                </p>
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-white rounded-2xl shadow-md border border-gray-200 inline-block">
                    <img
                      src={IMG_QR}
                      alt="QR Code to save TG Legacy Services contact"
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href="tel:9136018371"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100 border border-gray-300"
                  >
                    <Phone size={15} className="text-emerald-600" />
                    (913) 601-8371
                  </a>
                  <a
                    href="mailto:info@tglegacyservices.com"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100 border border-gray-300"
                  >
                    <Mail size={15} className="text-emerald-600" />
                    info@tglegacyservices.com
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CONTACT / APPOINTMENT FORM ── */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="section-label mb-3">Get In Touch</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Request a Notary
                <br />
                <span style={{ color: "#10B981" }}>Appointment</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Fill out the form below and we'll get back to you promptly to confirm your appointment. Or call/text us directly at{" "}
                <a href="tel:9136018371" className="text-emerald-600 font-semibold hover:underline">(913) 601-8371</a>.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Contact Info Panel */}
            <FadeUp delay={0.05} className="md:col-span-2">
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Call or Text</p>
                      <a href="tel:9136018371" className="text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                        (913) 601-8371
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Email</p>
                      <a href="mailto:info@tglegacyservices.com" className="text-gray-900 font-semibold hover:text-emerald-600 transition-colors break-all text-sm">
                        info@tglegacyservices.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Location</p>
                      <p className="text-gray-900 font-semibold text-sm">Kansas City, Missouri</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Availability</p>
                      <p className="text-gray-900 font-semibold text-sm">By Appointment</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">Quick Actions</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:9136018371"
                      className="btn-emerald flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm"
                    >
                      <Phone size={14} />
                      Call Now
                    </a>
                    <a
                      href="sms:9136018371"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm text-gray-700 hover:text-emerald-600 transition-all border border-gray-300 hover:border-emerald-600"
                    >
                      Text Us
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.1} className="md:col-span-3">
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Request Sent!
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Your appointment request has been submitted. We'll be in touch shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-emerald-600 text-sm hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-xs uppercase tracking-wider mb-2 font-semibold">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl text-gray-900 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all border border-gray-300"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs uppercase tracking-wider mb-2 font-semibold">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(xxx) xxx-xxxx"
                          className="w-full px-4 py-3 rounded-xl text-gray-900 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all border border-gray-300"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-xs uppercase tracking-wider mb-2 font-semibold">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-gray-900 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all border border-gray-300"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-xs uppercase tracking-wider mb-2 font-semibold">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-gray-900 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all border border-gray-300"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        <option value="">Select a service...</option>
                        <option value="Acknowledgment">Acknowledgment</option>
                        <option value="Jurat">Jurat</option>
                        <option value="Power of Attorney">Power of Attorney</option>
                        <option value="Affidavit">Affidavit</option>
                        <option value="Legal Document">Legal Document</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-xs uppercase tracking-wider mb-2 font-semibold">Project Scope / Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe the documents you need notarized, your preferred date/time, and your location..."
                        className="w-full px-4 py-3 rounded-xl text-gray-900 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all resize-none border border-gray-300"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-emerald w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-bold"
                    >
                      <Calendar size={18} />
                      Request Appointment
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white border-t border-gray-800">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-white font-black text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>TG</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>TG Legacy Services</p>
                  <p className="text-emerald-400 text-[10px]" style={{ letterSpacing: "0.1em" }}>MOBILE NOTARY</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional mobile notary services in Kansas City, Missouri. We come to you — fast, reliable, and trusted.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Acknowledgments", "Jurats", "Power of Attorney", "Affidavits", "Legal Documents"].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Contact</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:9136018371" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <Phone size={14} className="text-emerald-500" />
                  (913) 601-8371
                </a>
                <a href="mailto:info@tglegacyservices.com" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <Mail size={14} className="text-emerald-500" />
                  info@tglegacyservices.com
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={14} className="text-emerald-500" />
                  Kansas City, Missouri
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} TG Legacy Services. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Mobile Notary Services · Kansas City, Missouri · Available by Appointment
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
