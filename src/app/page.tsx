"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Figma,
  Globe,
  Layers,
  ArrowRight,
  Calendar,
  LayoutDashboard,
  User,
  Home,
  Mail,
  Lock,
  Shield,
  CheckCircle,
  AlertCircle,
  Sliders,
  Database,
  Code,
  Server,
  PenTool,
  Info,
  Cloud,
  Heart,
  Search,
  Megaphone,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
  ChevronRight,
  FileText,
  Briefcase,
  Zap,
  Eye,
  Palette,
  Monitor,
  Smartphone,
} from "lucide-react";

/* ─── Animation Helpers ─── */
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

/* ─── Mockup Card Component ─── */
function MockupCard({
  title,
  subtitle,
  imageSrc,
  badge,
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  badge?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Browser Chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-gray-400 font-medium flex-1 text-center">
          quantumlab.io
        </span>
      </div>
      {/* Screenshot Area */}
      <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center">
              <LayoutDashboard className="w-10 h-10 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400 font-medium">{title}</p>
            </div>
          </div>
        )}
        {badge && (
          <span className="absolute top-3 right-3 bg-black text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>
      {/* Card Footer */}
      <div className="px-5 py-4 border-t border-gray-100">
        <h4 className="font-semibold text-black text-sm">{title}</h4>
        {subtitle && (
          <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Section Title Component ─── */
function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div {...fadeUp} className="mb-16">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          {subtitle || "Section"}
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}

/* ─── Icon Item for Custom Icon Set ─── */
function IconItem({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-gray-100 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
    >
      <Icon className="w-6 h-6 text-gray-700" />
      <span className="text-[11px] font-medium text-gray-500">{label}</span>
    </motion.div>
  );
}

/* ─── Main Page Component ─── */
export default function QuantumLabLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "Pages", "Work", "Portfolio", "Contact"];

  const mainPages = [
    { title: "Home V1", subtitle: "Main Landing", imageSrc: "/images/page-home.png" },
    { title: "Home V2", subtitle: "Alternative Layout", imageSrc: "/images/hero-bg.png" },
    { title: "Home V3", subtitle: "Creative Version", imageSrc: "/images/page-blog.png" },
    { title: "About", subtitle: "Company Story", imageSrc: "/images/page-about.png" },
    { title: "Blog V1", subtitle: "Blog Listing", imageSrc: "/images/page-blog.png" },
    { title: "Blog V2", subtitle: "Blog Alternative", imageSrc: "/images/page-home.png" },
    { title: "Contact", subtitle: "Get in Touch", imageSrc: "/images/page-contact.png" },
    { title: "Career", subtitle: "Open Positions", imageSrc: "/images/page-about.png" },
    { title: "Pricing", subtitle: "Plans & Pricing", imageSrc: "/images/page-home.png" },
  ];

  const utilityPages = [
    { title: "404 Page", subtitle: "Error Not Found", imageSrc: "/images/page-404.png", icon: AlertCircle },
    { title: "Password Protected", subtitle: "Coming Soon Access", imageSrc: "/images/page-contact.png", icon: Lock },
    { title: "Coming Soon", subtitle: "Launch Preview", imageSrc: "/images/hero-bg.png", icon: Zap },
  ];

  const customIcons = [
    { icon: Cloud, label: "Cloud" },
    { icon: Lock, label: "Lock" },
    { icon: Heart, label: "Heart" },
    { icon: Code, label: "Code" },
    { icon: Search, label: "Search" },
    { icon: Shield, label: "Shield" },
    { icon: Sliders, label: "Sliders" },
    { icon: Database, label: "Database" },
    { icon: Server, label: "Server" },
    { icon: PenTool, label: "Pen Tool" },
    { icon: Calendar, label: "Calendar" },
    { icon: Mail, label: "Mail" },
    { icon: User, label: "User" },
    { icon: Home, label: "Home" },
    { icon: Info, label: "Info" },
    { icon: CheckCircle, label: "Check" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      {/* ═══════════════════════════════════════
          1. HEADER 
         ═══════════════════════════════════════ */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-lg font-bold tracking-[0.15em] text-black">
            QUANTUMLAB
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#purchase"
              className="hidden md:inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-2.5 hover:bg-gray-800 transition-colors"
            >
              PURCHASE NOW
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-4 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-medium text-gray-600 hover:text-black transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#purchase"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white text-sm font-semibold px-5 py-2.5 mt-2 hover:bg-gray-800 transition-colors"
                >
                  PURCHASE NOW
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══════════════════════════════════════
          2. HERO SECTION 
         ═══════════════════════════════════════ */}
      <section
        id="home"
        className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-4 pt-16 relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl z-10 mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gray-400 uppercase mb-6"
          >
            Webflow Template
          </motion.p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            QuantumLab
            <br />
            Webflow Template
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Minimal, clean, and designed for creative professionals who want to
            launch stunning websites with ease.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-10 py-4 font-semibold text-sm tracking-wider hover:bg-gray-100 transition-colors"
          >
            PURCHASE NOW
          </motion.button>
        </motion.div>

        {/* Template Screenshot Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-[1200px] mx-auto z-10 pb-8 px-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -4 }}
                className="aspect-[4/3] rounded-md overflow-hidden border border-white/10 cursor-pointer bg-gray-900"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(/images/page-home.png)`,
                    backgroundPosition: `center ${i * 15}%`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          3. WHAT IS INCLUDED 
         ═══════════════════════════════════════ */}
      <section id="pages" className="py-24 md:py-32 max-w-[1200px] mx-auto px-6">
        {/* Section Label */}
        <motion.div {...fadeUp} className="mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
              What is included
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-4">
            What is included in QuantumLab
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto">
            Everything you need to build a stunning website — from pre-built pages
            to dynamic CMS collections.
          </p>
        </motion.div>

        {/* Numbers Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 mb-20">
          {[
            {
              count: "16+",
              label: "Pages",
              desc: "Pre-built layouts ready to customize and publish",
              icon: Layers,
            },
            {
              count: "34+",
              label: "Components",
              desc: "Modular blocks for flexible page composition",
              icon: LayoutDashboard,
            },
            {
              count: "25+",
              label: "CMS Collections",
              desc: "Dynamic content structures for blogs and more",
              icon: Database,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <item.icon className="w-8 h-8 mx-auto mb-4 text-gray-400" />
              <h3 className="text-6xl md:text-7xl font-bold mb-2">{item.count}</h3>
              <p className="text-xl font-semibold mb-1">{item.label}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mockup Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-gray-50 rounded-xl border border-gray-200 overflow-hidden min-h-[360px] cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white" />
            <div className="relative p-8 flex flex-col items-center justify-center h-full z-10">
              <div className="w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl border border-gray-200 mb-6">
                <img
                  src="/images/figma-mockup.png"
                  alt="Figma file included"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <Figma className="w-10 h-10 mb-3 text-purple-600" />
              <h3 className="text-2xl font-bold mb-1">Figma Included</h3>
              <p className="text-gray-600 text-center max-w-xs text-sm">
                Fully editable Figma source file included with every purchase.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-gray-50 rounded-xl border border-gray-200 overflow-hidden min-h-[360px] cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
            <div className="relative p-8 flex flex-col items-center justify-center h-full z-10">
              <div className="w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl border border-gray-200 mb-6">
                <img
                  src="/images/browser-mockup.png"
                  alt="Launch your dream website"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <Globe className="w-10 h-10 mb-3 text-blue-600" />
              <h3 className="text-2xl font-bold mb-1">Launch Your Dream</h3>
              <p className="text-gray-600 text-center max-w-xs text-sm">
                Export or connect your Webflow project directly to the web.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. MAIN PAGES 
         ═══════════════════════════════════════ */}
      <section id="work" className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle title="Main pages" subtitle="Pages" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, idx) => (
              <MockupCard
                key={idx}
                title={page.title}
                subtitle={page.subtitle}
                imageSrc={page.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. UTILITY PAGES 
         ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle title="Utility pages" subtitle="Utilities" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilityPages.map((page, idx) => {
              const IconComp = page.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-xs text-gray-400 font-medium flex-1 text-center">
                      quantumlab.io/{page.title.toLowerCase().replace(" ", "-")}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                    {page.imageSrc && (
                      <img
                        src={page.imageSrc}
                        alt={page.title}
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
                        <IconComp className="w-8 h-8 mx-auto mb-3 text-gray-700" />
                        <p className="text-sm font-semibold text-gray-800">
                          {page.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {page.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-4 border-t border-gray-100">
                    <h4 className="font-semibold text-black text-sm">
                      {page.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {page.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. ADDITIONAL ASSETS 
         ═══════════════════════════════════════ */}
      <section id="portfolio" className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle title="Additional Assets" subtitle="Extras" />

          {/* ── Headers & Footers ── */}
          <motion.div {...fadeUp} className="mb-20">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Monitor className="w-5 h-5 text-gray-400" />
              Headers & Footers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Header Light", bg: "bg-white", text: "text-black" },
                { label: "Header Dark", bg: "bg-black", text: "text-white" },
                { label: "Footer Minimal", bg: "bg-gray-900", text: "text-white" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`${item.bg} ${item.text} rounded-lg border border-gray-200 overflow-hidden cursor-pointer transition-shadow hover:shadow-lg`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold tracking-wider">
                        QUANTUMLAB
                      </span>
                      <div className="flex gap-4">
                        <span className="text-xs opacity-60">Home</span>
                        <span className="text-xs opacity-60">About</span>
                        <span className="text-xs opacity-60">Blog</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-2 w-2 rounded-full bg-gray-300" />
                      <div className="h-2 flex-1 bg-gray-200/30 rounded" />
                    </div>
                    <p className="text-xs opacity-40 text-center">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Notification Bars ── */}
          <motion.div {...fadeUp} className="mb-20">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Megaphone className="w-5 h-5 text-gray-400" />
              Notification Bars
            </h3>
            <div className="flex flex-col gap-3">
              {[
                "🎉 Special Offer — Get 30% off on all templates. Use code QUANTUM30",
                "📦 New Release — Version 2.0 is now available with 10+ new pages",
                "⚡ Limited Time — Free Figma file included with every purchase",
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.005 }}
                  className="bg-black text-white px-6 py-3.5 rounded-sm flex items-center justify-between gap-4 cursor-pointer"
                >
                  <p className="text-sm font-medium flex-1 text-center">
                    {text}
                  </p>
                  <ArrowRight className="w-4 h-4 opacity-60 flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Custom Icon Set ── */}
          <motion.div {...fadeUp} className="mb-20">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <PenTool className="w-5 h-5 text-gray-400" />
              Custom Icon Set
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {customIcons.map((item, idx) => (
                <IconItem key={idx} icon={item.icon} label={item.label} />
              ))}
            </div>
          </motion.div>

          {/* ── Social Media Assets ── */}
          <motion.div {...fadeUp} className="mb-20">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <ShareIcon className="w-5 h-5 text-gray-400" />
              Social Media Assets
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: "Facebook", icon: Facebook, color: "bg-blue-50 text-blue-600 border-blue-100" },
                { name: "Twitter", icon: Twitter, color: "bg-sky-50 text-sky-500 border-sky-100" },
                { name: "LinkedIn", icon: Linkedin, color: "bg-blue-50 text-blue-700 border-blue-100" },
                { name: "Instagram", icon: Instagram, color: "bg-pink-50 text-pink-500 border-pink-100" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-lg border cursor-pointer transition-shadow hover:shadow-md ${item.color}`}
                >
                  <item.icon className="w-8 h-8" />
                  <span className="text-sm font-semibold">{item.name}</span>
                  <span className="text-[10px] opacity-60">Post Template</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Email Signature ── */}
          <motion.div {...fadeUp}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              Email Signature
            </h3>
            <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-xl mx-auto shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Alex Johnson</h4>
                  <p className="text-sm text-gray-500">
                    Creative Director at QuantumLab
                  </p>
                  <div className="h-px bg-gray-200 my-3" />
                  <div className="flex flex-col gap-1 text-xs text-gray-500">
                    <span>alex@quantumlab.io</span>
                    <span>+1 (555) 123-4567</span>
                    <span>quantumlab.io</span>
                  </div>
                  <div className="flex gap-3 mt-3">
                    <Twitter className="w-4 h-4 text-gray-400 hover:text-black cursor-pointer transition-colors" />
                    <Linkedin className="w-4 h-4 text-gray-400 hover:text-black cursor-pointer transition-colors" />
                    <Instagram className="w-4 h-4 text-gray-400 hover:text-black cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. CTA SECTION 
         ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0057ff]" id="contact">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Browse in Webflow
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
              Explore the live preview of QuantumLab directly in Webflow.
              Customize everything to match your brand.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-white text-[#0057ff] font-semibold text-sm px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors"
            >
              Browse All Templates
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. FOOTER 
         ═══════════════════════════════════════ */}
      <footer className="bg-black text-white mt-auto">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold tracking-[0.15em] mb-4">
                QUANTUMLAB
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ultras tends to meet the most important UI standards. Minimal,
                clean, and designed for creative professionals.
              </p>
            </div>

            {/* Nav Columns */}
            {[
              {
                title: "Main",
                links: ["Home", "Pages", "Work", "Portfolio", "Contact"],
              },
              {
                title: "Pages",
                links: ["About", "Blog", "Career", "Pricing", "Services"],
              },
              {
                title: "Utility",
                links: ["404", "Password", "Coming Soon", "Style Guide", "Licenses"],
              },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} QuantumLab. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Twitter className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── ShareIcon placeholder (for section heading) ─── */
function ShareIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  );
}
