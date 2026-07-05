"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Globe,
  MessageCircle,
  Database,
  Target,
  TrendingUp,
  Award,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Star,
  Clock,
  Layers,
  Activity,
  RefreshCw,
  DollarSign,
  Search,
} from "lucide-react";

/* ═══════════════════════════════════
   TYPES
═══════════════════════════════════ */
interface SlideProps {
  isActive: boolean;
}

/* ═══════════════════════════════════
   ANIMATION VARIANTS
═══════════════════════════════════ */
const slideIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ═══════════════════════════════════
   REUSABLE COMPONENTS
═══════════════════════════════════ */
function Tag({
  children,
  color = "#f38d10",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
      style={{ backgroundColor: `${color}18`, color }}
    >
      {children}
    </span>
  );
}

function SectionReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BulletItem({
  children,
  accent = "#f38d10",
  dark = false,
}: {
  children: React.ReactNode;
  accent?: string;
  dark?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: accent }}
      />
      <span
        className="text-sm leading-relaxed"
        style={{ color: dark ? "rgba(255,255,255,0.65)" : "rgba(1,1,1,0.6)" }}
      >
        {children}
      </span>
    </li>
  );
}

/* ═══════════════════════════════════
   SLIDE NAV (SIDEBAR)
═══════════════════════════════════ */
const SLIDES = [
  { id: "visi", label: "Visi" },
  { id: "digital", label: "Digital Presence" },
  { id: "otomasi", label: "Otomasi AI" },
  { id: "growth", label: "Growth" },
  { id: "loyalty", label: "Loyalty" },
  { id: "roadmap", label: "Roadmap" },
  { id: "data", label: "Data & Benchmark" },
];

/* ═══════════════════════════════════
   SLIDE 1 — VISI
═══════════════════════════════════ */
function SlideVisi() {
  return (
    <section
      id="visi"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#010101" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #f38d10, transparent)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #69594a, transparent)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <SectionReveal>
        <div className="max-w-4xl mx-auto px-8 py-24 flex flex-col items-center text-center gap-8">
          {/* Tag */}
          <FadeUp>
            <Tag>Digital Strategy 2025</Tag>
          </FadeUp>

          {/* Main headline */}
          <FadeUp delay={0.1}>
            <h1
              className="text-5xl md:text-7xl text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Transformasi Digital
              <br />
              <span style={{ color: "#f38d10" }}>Kopi Tobi</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg text-white/55 max-w-xl leading-relaxed">
              Dari kafe lokal menuju top-of-mind Sumedang — melalui sistem digital
              yang terukur, otomasi yang efisien, dan ekosistem pelanggan yang
              berkelanjutan.
            </p>
          </FadeUp>

          {/* Vision quote */}
          <FadeUp delay={0.3}>
            <div
              className="rounded-3xl p-8 max-w-2xl border"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-base md:text-lg italic leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                "Menjadikan Kopi Tobi sebagai destinasi kafe nomor satu di Sumedang
                melalui keunggulan produk, pengalaman pelanggan yang tak terlupakan,
                dan ekosistem digital yang terukur dan berkelanjutan."
              </p>
              <p className="mt-4 text-sm font-semibold" style={{ color: "#f38d10" }}>
                — Visi Strategis 2026
              </p>
            </div>
          </FadeUp>

          {/* Three pillars */}
          <FadeUp delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-4">
              {[
                { label: "Visibilitas", desc: "Dominasi Google & media sosial", color: "#f38d10" },
                { label: "Otomasi", desc: "Sistem 24/7 tanpa SDM tambahan", color: "#69594a" },
                { label: "Retensi", desc: "Loyalitas berbasis data pelanggan", color: "#ff6249" },
              ].map((pillar) => (
                <div
                  key={pillar.label}
                  className="rounded-2xl p-5 border"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.07)",
                    borderTopColor: pillar.color,
                    borderTopWidth: 2,
                  }}
                >
                  <p className="font-bold text-sm text-white mb-1">{pillar.label}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </SectionReveal>
    </section>
  );
}

/* ═══════════════════════════════════
   SLIDE 2 — DIGITAL PRESENCE
═══════════════════════════════════ */
function SlideDigital() {
  return (
    <section id="digital" className="min-h-screen" style={{ backgroundColor: "#fafaf9" }}>
      <div className="max-w-6xl mx-auto px-8 py-24">
        <SectionReveal>
          <FadeUp>
            <Tag>Slide A</Tag>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              className="mt-4 text-4xl md:text-5xl text-[#010101]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Digital Presence
            </h2>
            <p className="mt-2 text-[#69594a] text-lg">
              Optimasi Local SEO &amp; Website sebagai Hub Utama
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GMB Card */}
            <FadeUp delay={0.12}>
              <div className="rounded-3xl bg-white border border-black/[0.06] p-8 h-full shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#f38d1015" }}
                  >
                    <MapPin size={20} style={{ color: "#f38d10" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-[#010101] text-sm">01</p>
                    <h3 className="font-bold text-[#010101] text-lg leading-tight">
                      Google My Business
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#010101]/55 mb-5 leading-relaxed">
                  Dominasi hasil pencarian lokal adalah langkah pertama sebelum
                  pelanggan bahkan menginjakkan kaki ke kafe.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Optimasi kategori, deskripsi, dan atribut bisnis secara lengkap",
                    "Upload foto produk dan ruangan berkualitas tinggi secara rutin",
                    "Manajemen ulasan aktif — respons cepat meningkatkan kepercayaan",
                    "GMB Posts untuk promo dan update mingguan",
                    "Target keyword: 'kafe Sumedang', 'kopi terbaik Sumedang'",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Website Card */}
            <FadeUp delay={0.18}>
              <div className="rounded-3xl bg-white border border-black/[0.06] p-8 h-full shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#f38d1015" }}
                  >
                    <Globe size={20} style={{ color: "#f38d10" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-[#010101] text-sm">02</p>
                    <h3 className="font-bold text-[#010101] text-lg leading-tight">
                      Landing Page Profesional
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#010101]/55 mb-5 leading-relaxed">
                  Website bukan sekadar brosur digital — ini adalah mesin konversi
                  yang bekerja 24 jam untuk mengubah pengunjung menjadi pelanggan.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Desain mobile-first: 70%+ traffic berasal dari smartphone",
                    "CTA strategis: tombol WhatsApp dan reservasi selalu terlihat",
                    "Schema markup untuk SEO lokal yang lebih kuat di SERP Google",
                    "Integrasi Google Analytics untuk tracking perilaku pengunjung",
                    "Kecepatan halaman < 3 detik untuk menurunkan bounce rate",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Impact strip */}
          <FadeUp delay={0.24}>
            <div
              className="mt-8 rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
              style={{ backgroundColor: "#010101" }}
            >
              {[
                { value: "3x", label: "Peningkatan Visibilitas", sub: "vs. GMB tidak aktif" },
                { value: "40%", label: "Lebih Banyak Klik Organik", sub: "dalam 60 hari pertama" },
                { value: "25%", label: "Peningkatan Traffic Website", sub: "terukur via Analytics" },
              ].map((kpi) => (
                <div key={kpi.value} className="text-center">
                  <p
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#f38d10",
                    }}
                  >
                    {kpi.value}
                  </p>
                  <p className="text-white font-semibold text-sm mt-1">{kpi.label}</p>
                  <p className="text-white/40 text-xs mt-0.5">{kpi.sub}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Insight */}
          <FadeUp delay={0.28}>
            <div
              className="mt-4 rounded-2xl p-5 flex items-start gap-4 border"
              style={{ backgroundColor: "#f38d1008", borderColor: "#f38d1025" }}
            >
              <Search size={18} style={{ color: "#f38d10" }} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm italic text-[#010101]/65">
                <strong style={{ color: "#f38d10" }}>Insight Kunci:</strong> 97%
                konsumen mencari bisnis lokal di Google sebelum mengunjungi tempat
                tersebut. Tanpa GMB optimal, Kopi Tobi tidak terlihat oleh mereka.
              </p>
            </div>
          </FadeUp>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   SLIDE 3 — OTOMASI AI
═══════════════════════════════════ */
function SlideOtomasi() {
  return (
    <section id="otomasi" className="min-h-screen" style={{ backgroundColor: "#010101" }}>
      <div className="max-w-6xl mx-auto px-8 py-24">
        <SectionReveal>
          <FadeUp>
            <Tag color="#69594a">Slide B</Tag>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              className="mt-4 text-4xl md:text-5xl text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Operational Excellence via AI
            </h2>
            <p className="mt-2 text-[#f38d10] text-lg">
              Otomasi 24/7 dengan WhatsApp Chatbot &amp; CRM
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chatbot */}
            <FadeUp delay={0.12}>
              <div
                className="rounded-3xl p-8 h-full border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#f38d1020" }}
                  >
                    <MessageCircle size={20} style={{ color: "#f38d10" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-white text-lg">
                    WhatsApp AI Chatbot (n8n)
                  </h3>
                </div>
                <p className="text-sm text-white/50 mb-5 leading-relaxed">
                  Tangani reservasi dan pertanyaan pelanggan tanpa staff tambahan,
                  24 jam sehari, 7 hari seminggu — tanpa kelelahan.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Respons otomatis untuk pertanyaan menu, harga, dan jam buka",
                    "Alur reservasi Paket Ulang Tahun dengan konfirmasi dan reminder otomatis",
                    "Booking Cooking Class dengan slot kalender real-time",
                    "Penanganan FAQ: Paket Khitan hingga negosiasi harga dasar",
                    "Eskalasi ke tim manusia hanya untuk kasus yang benar-benar butuh keputusan",
                    "Integrasi payment link langsung di dalam percakapan WhatsApp",
                  ].map((item) => (
                    <BulletItem key={item} dark>{item}</BulletItem>
                  ))}
                </ul>

                {/* Flow */}
                <div className="mt-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#f38d10] mb-3">
                    Alur Otomasi
                  </p>
                  <div className="flex items-center gap-1 flex-wrap">
                    {["Pelanggan WA", "Bot Respons", "Input Data", "Konfirmasi", "Reminder"].map(
                      (step, i, arr) => (
                        <div key={step} className="flex items-center gap-1">
                          <span
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold text-white"
                            style={{ backgroundColor: i === 0 ? "#f38d10" : "rgba(255,255,255,0.1)" }}
                          >
                            {step}
                          </span>
                          {i < arr.length - 1 && (
                            <ArrowRight size={12} className="text-white/30" />
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* CRM */}
            <FadeUp delay={0.18}>
              <div
                className="rounded-3xl p-8 h-full border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#f38d1020" }}
                  >
                    <Database size={20} style={{ color: "#f38d10" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-white text-lg">
                    CRM &amp; Database Pelanggan
                  </h3>
                </div>
                <p className="text-sm text-white/50 mb-5 leading-relaxed">
                  Data adalah aset terbesar bisnis modern. Setiap pelanggan yang
                  berinteraksi dengan Kopi Tobi adalah investasi jangka panjang.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Database terpusat: nama, nomor, riwayat pesanan, preferensi menu",
                    "Segmentasi pelanggan: regular, VIP, pelanggan event",
                    "Trigger otomatis: ucapan ulang tahun, promo anniversary",
                    "Re-engagement: follow-up pelanggan tidak aktif lebih dari 30 hari",
                    "Laporan bulanan: customer lifetime value dan churn rate",
                    "Integrasi dengan sistem kasir untuk data pembelian real-time",
                  ].map((item) => (
                    <BulletItem key={item} dark>{item}</BulletItem>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Impact row */}
          <FadeUp delay={0.24}>
            <div
              className="mt-8 rounded-3xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}
            >
              {[
                { value: "70%", label: "Pertanyaan terselesaikan tanpa staff" },
                { value: "15 jam", label: "Waktu kerja admin diselamatkan / minggu" },
                { value: "3x", label: "Kecepatan respons vs. manual" },
                { value: "100%", label: "Zero missed booking request" },
              ].map((kpi, i) => (
                <div
                  key={kpi.value}
                  className="text-center py-2"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}
                >
                  <p
                    className="text-3xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "#f38d10" }}
                  >
                    {kpi.value}
                  </p>
                  <p className="text-white/45 text-xs mt-1 leading-snug">{kpi.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   SLIDE 4 — TARGETED GROWTH
═══════════════════════════════════ */
function SlideGrowth() {
  return (
    <section id="growth" className="min-h-screen" style={{ backgroundColor: "#fafaf9" }}>
      <div className="max-w-6xl mx-auto px-8 py-24">
        <SectionReveal>
          <FadeUp>
            <Tag color="#ff6249">Slide C</Tag>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              className="mt-4 text-4xl md:text-5xl text-[#010101]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Targeted Growth Strategy
            </h2>
            <p className="mt-2 text-[#69594a] text-lg">
              Iklan Berbayar Presisi &amp; Konten Berbasis Konversi
            </p>
          </FadeUp>

          {/* Audience targeting cards */}
          <FadeUp delay={0.12}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  audience: "Orang Tua Anak 0–10 Tahun",
                  layanan: "Paket Khitan & Syukuran",
                  platform: "Meta Ads",
                  color: "#69594a",
                },
                {
                  audience: "Profesional 25–40 Tahun",
                  layanan: "Paket Meeting & Co-Working",
                  platform: "Google Ads",
                  color: "#f38d10",
                },
                {
                  audience: "Komunitas & Sekolah",
                  layanan: "Cooking Class & Workshop",
                  platform: "Meta + TikTok",
                  color: "#ff6249",
                },
              ].map((item) => (
                <div
                  key={item.audience}
                  className="rounded-3xl bg-white border border-black/[0.06] p-6 shadow-sm"
                  style={{ borderTopColor: item.color, borderTopWidth: 3 }}
                >
                  <Tag color={item.color}>{item.platform}</Tag>
                  <h4 className="font-bold text-[#010101] mt-3 mb-1">{item.audience}</h4>
                  <p className="text-sm text-[#010101]/55">{item.layanan}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ads strategy */}
            <FadeUp delay={0.16}>
              <div className="rounded-3xl bg-white border border-black/[0.06] p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-5">
                  <Target size={20} style={{ color: "#f38d10" }} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#010101] text-base">
                    Meta &amp; Google Ads — Laser-Targeted
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Lookalike audience berdasarkan pelanggan loyal yang sudah ada",
                    "Retargeting pengunjung website yang belum melakukan konversi",
                    "Video ads pendek 15–30 detik untuk awareness produk signature",
                    "Budget optimization: alokasi lebih besar ke campaign ROAS tertinggi",
                    "A/B testing kreatif iklan setiap dua minggu untuk efisiensi maksimal",
                    "Konversi target: reservasi layanan khusus, bukan sekadar klik",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Content strategy */}
            <FadeUp delay={0.2}>
              <div className="rounded-3xl bg-white border border-black/[0.06] p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-5">
                  <Layers size={20} style={{ color: "#f38d10" }} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#010101] text-base">
                    Konten Berbasis Konversi
                  </h3>
                </div>
                {/* Content pillars */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { name: "Edukasi", desc: "Tips, how-to, fakta kopi unik", color: "#f38d10" },
                    { name: "Sosial", desc: "BTS, staff highlight, event", color: "#69594a" },
                    { name: "Konversi", desc: "Promo, CTA reservasi", color: "#ff6249" },
                  ].map((pillar) => (
                    <div
                      key={pillar.name}
                      className="rounded-2xl p-3 text-center"
                      style={{ backgroundColor: `${pillar.color}0D` }}
                    >
                      <p className="font-bold text-xs" style={{ color: pillar.color }}>
                        {pillar.name}
                      </p>
                      <p className="text-xs text-[#010101]/50 mt-1 leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "4–5 posting per minggu di Instagram dan TikTok secara konsisten",
                    "Format Reels & TikTok: jangkauan organik 3–5x lebih tinggi",
                    "User Generated Content (UGC): pelanggan sebagai brand ambassador",
                    "Kolaborasi micro-influencer lokal Sumedang untuk social proof",
                    "Artikel blog SEO: 'kafe terbaik Sumedang' untuk trafik jangka panjang",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* ROI Banner */}
          <FadeUp delay={0.26}>
            <div
              className="mt-8 rounded-3xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
              style={{ backgroundColor: "#010101" }}
            >
              {[
                { value: "5–8x", label: "Target ROAS Iklan Berbayar" },
                { value: "< Rp 15rb", label: "Target CPL per Lead" },
                { value: "60 hari", label: "Periode Review Performa" },
                { value: "Meta + Google", label: "Platform Prioritas" },
              ].map((item) => (
                <div key={item.value} className="text-center">
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "#f38d10" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-white/45 text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   SLIDE 5 — LOYALTY
═══════════════════════════════════ */
function SlideLoyalty() {
  return (
    <section id="loyalty" className="min-h-screen" style={{ backgroundColor: "#010101" }}>
      <div className="max-w-6xl mx-auto px-8 py-24">
        <SectionReveal>
          <FadeUp>
            <Tag color="#ff6249">Slide D</Tag>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              className="mt-4 text-4xl md:text-5xl text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Retention &amp; Loyalty Program
            </h2>
            <p className="mt-2 text-[#f38d10] text-lg">
              Ubah Pembeli Satu Kali Menjadi Pelanggan Seumur Hidup
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Tier system — 3 cols */}
            <FadeUp delay={0.12} className="lg:col-span-3">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold tracking-widest uppercase text-[#f38d10]">
                  Struktur Tier Program
                </p>
                {[
                  {
                    tier: "Tobi Starter",
                    pts: "0 – 499 poin",
                    benefit: "Diskon 5% setiap pembelian",
                    note: "Entry level — semua pelanggan baru mulai di sini",
                    color: "#8B7355",
                    bg: "rgba(139,115,85,0.08)",
                  },
                  {
                    tier: "Tobi Regular",
                    pts: "500 – 1.499 poin",
                    benefit: "Diskon 10% + free upsize minuman",
                    note: "Pelanggan aktif yang kembali minimal 2x per bulan",
                    color: "#69594a",
                    bg: "rgba(105,89,74,0.1)",
                  },
                  {
                    tier: "Tobi Gold",
                    pts: "1.500+ poin",
                    benefit: "Diskon 15% + prioritas reservasi + free item",
                    note: "VIP — pelanggan terpilih dengan lifetime value tertinggi",
                    color: "#f38d10",
                    bg: "rgba(243,141,16,0.08)",
                  },
                ].map((t) => (
                  <div
                    key={t.tier}
                    className="rounded-2xl p-5 flex items-start gap-4 border"
                    style={{ backgroundColor: t.bg, borderColor: `${t.color}30` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${t.color}20` }}
                    >
                      <Star size={18} strokeWidth={1.5} style={{ color: t.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-bold text-white text-base">{t.tier}</p>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{ color: t.color, backgroundColor: `${t.color}18` }}
                        >
                          {t.pts}
                        </span>
                      </div>
                      <p className="text-sm font-semibold mt-1 text-white/80">{t.benefit}</p>
                      <p className="text-xs mt-0.5 text-white/40">{t.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Mekanisme — 2 cols */}
            <FadeUp delay={0.18} className="lg:col-span-2">
              <div
                className="rounded-3xl p-7 h-full border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Award size={18} style={{ color: "#f38d10" }} strokeWidth={1.5} />
                  <p className="font-bold text-white text-sm">Mekanisme Poin</p>
                </div>
                <ul className="flex flex-col gap-3 mb-6">
                  {[
                    "Rp 1.000 pembelian = 1 poin (semua kategori menu)",
                    "Poin double di hari ulang tahun pelanggan",
                    "Poin tambahan untuk review Google + tag sosmed",
                    "Reward khusus untuk pelanggan yang membawa teman baru",
                    "Poin tidak kadaluarsa selama akun aktif kunjungan 3 bulan",
                  ].map((item) => (
                    <BulletItem key={item} dark accent="#f38d10">
                      {item}
                    </BulletItem>
                  ))}
                </ul>

                <div
                  className="rounded-2xl p-4 border"
                  style={{
                    backgroundColor: "rgba(243,141,16,0.08)",
                    borderColor: "rgba(243,141,16,0.2)",
                  }}
                >
                  <p className="text-xs font-bold text-[#f38d10] mb-1">Fakta Kunci</p>
                  <p className="text-xs text-white/55 leading-relaxed italic">
                    Biaya mendapatkan pelanggan baru rata-rata 5x lebih mahal dari biaya
                    mempertahankan pelanggan lama. Program loyalitas adalah investasi paling
                    efisien untuk pertumbuhan bisnis.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Data metrics */}
          <FadeUp delay={0.24}>
            <div className="mt-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#f38d10] mb-4">
                Metrik yang Dipantau
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  { icon: DollarSign, label: "Customer Lifetime Value" },
                  { icon: RefreshCw, label: "Churn Rate" },
                  { icon: Star, label: "Net Promoter Score" },
                  { icon: Activity, label: "Repeat Purchase Rate" },
                  { icon: TrendingUp, label: "Average Order Value" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl p-4 flex flex-col gap-2 border"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <metric.icon
                      size={16}
                      style={{ color: "#f38d10" }}
                      strokeWidth={1.5}
                    />
                    <p className="text-xs text-white/55 leading-snug">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   SLIDE 6 — ROADMAP
═══════════════════════════════════ */
function SlideRoadmap() {
  const phases = [
    {
      num: 1,
      title: "Fondasi",
      period: "Bulan 1 – 2",
      color: "#f38d10",
      tasks: [
        "Setup & optimasi Google My Business lengkap",
        "Launch landing page profesional",
        "Konfigurasi WhatsApp AI Chatbot (n8n)",
        "Setup Google Analytics & Meta Pixel",
        "Database pelanggan awal (CRM)",
      ],
    },
    {
      num: 2,
      title: "Akselerasi",
      period: "Bulan 3 – 4",
      color: "#69594a",
      tasks: [
        "Aktivasi campaign Meta & Google Ads",
        "Produksi konten video reguler",
        "Soft launch loyalty program digital",
        "Review performa & optimasi iklan",
        "Kolaborasi influencer lokal pertama",
      ],
    },
    {
      num: 3,
      title: "Skalabilitas",
      period: "Bulan 5 – 6",
      color: "#ff6249",
      tasks: [
        "Analisis data CLV & segmentasi pelanggan",
        "Ekspansi ke platform baru (TikTok Ads)",
        "Program referral pelanggan aktif",
        "Dashboard bisnis real-time",
        "Review strategi kuartal berikutnya",
      ],
    },
  ];

  return (
    <section id="roadmap" className="min-h-screen" style={{ backgroundColor: "#fafaf9" }}>
      <div className="max-w-6xl mx-auto px-8 py-24">
        <SectionReveal>
          <FadeUp>
            <Tag>Roadmap Eksekusi</Tag>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              className="mt-4 text-4xl md:text-5xl text-[#010101]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Roadmap to Growth
            </h2>
            <p className="mt-2 text-[#69594a] text-lg">
              Tiga Fase Eksekusi yang Terukur dan Berurutan
            </p>
          </FadeUp>

          {/* Timeline connector */}
          <div className="mt-12 relative">
            {/* Horizontal line (desktop) */}
            <div
              className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5"
              style={{ backgroundColor: "#E8E4E0" }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
              {phases.map((phase, i) => (
                <FadeUp key={phase.num} delay={0.1 + i * 0.1}>
                  <div className="flex flex-col items-center">
                    {/* Number circle */}
                    <div
                      className="w-[88px] h-[88px] rounded-full flex flex-col items-center justify-center mb-6 z-10 relative shadow-lg"
                      style={{ backgroundColor: phase.color }}
                    >
                      <p className="text-white/70 text-xs font-bold">{phase.period}</p>
                      <p
                        className="text-white text-2xl leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {String(phase.num).padStart(2, "0")}
                      </p>
                    </div>

                    {/* Card */}
                    <div
                      className="rounded-3xl bg-white border border-black/[0.06] p-7 w-full shadow-sm"
                      style={{ borderTopColor: phase.color, borderTopWidth: 3 }}
                    >
                      <h3 className="font-bold text-[#010101] text-xl mb-4">
                        Fase {phase.num}: {phase.title}
                      </h3>
                      <ul className="flex flex-col gap-2.5">
                        {phase.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2.5">
                            <CheckCircle
                              size={15}
                              style={{ color: phase.color }}
                              className="flex-shrink-0 mt-0.5"
                              strokeWidth={2}
                            />
                            <span className="text-sm text-[#010101]/60 leading-relaxed">
                              {task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Investment summary */}
          <FadeUp delay={0.4}>
            <div
              className="mt-10 rounded-3xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              style={{ backgroundColor: "#010101" }}
            >
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#f38d10] mb-1">
                  Estimasi Investasi Awal
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {[
                    "Setup & Development: Negotiable",
                    "Iklan Bulanan: Negotiable",
                    "Maintenance: Negotiable",
                  ].map((item) => (
                    <span key={item} className="text-sm text-white/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl px-6 py-3 flex-shrink-0"
                style={{ backgroundColor: "rgba(243,141,16,0.15)" }}
              >
                <p className="text-xs text-[#f38d10]/70">Target ROI</p>
                <p className="text-2xl font-bold text-[#f38d10]">300–500%</p>
                <p className="text-xs text-[#f38d10]/60">dalam 6 bulan</p>
              </div>
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.46}>
            <div
              className="mt-4 rounded-3xl p-8 text-center"
              style={{ backgroundColor: "#f38d10" }}
            >
              <h3 className="text-2xl font-bold text-white">
                Siap Memulai Transformasi Digital Kopi Tobi?
              </h3>
              <p className="text-white/75 mt-2">
                Hubungi kami hari ini dan mulai eksekusi Fase 1 dalam 7 hari kerja.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 bg-white text-[#f38d10] font-bold px-8 py-3 rounded-full hover:bg-[#010101] hover:text-white transition-all duration-200"
              >
                <MessageCircle size={16} />
                Konsultasi Gratis Sekarang
              </a>
            </div>
          </FadeUp>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   SLIDE 7 — DATA & BENCHMARK
═══════════════════════════════════ */
function SlideData() {
  const stats = [
    {
      value: "97%",
      label: "Konsumen cari bisnis lokal di Google sebelum berkunjung",
      source: "Google / Ipsos 2024",
      color: "#f38d10",
      icon: Search,
    },
    {
      value: "5x",
      label: "Lebih mahal biaya akuisisi pelanggan baru vs. mempertahankan lama",
      source: "McKinsey ASEAN",
      color: "#69594a",
      icon: DollarSign,
    },
    {
      value: "3.5x",
      label: "ROI rata-rata bisnis F&B yang aktif di media sosial secara konsisten",
      source: "Meta Business Indonesia",
      color: "#ff6249",
      icon: TrendingUp,
    },
    {
      value: "68%",
      label: "Pelanggan lebih memilih brand yang merespons cepat via WhatsApp",
      source: "Sprout Social 2024",
      color: "#f38d10",
      icon: MessageCircle,
    },
    {
      value: "40%",
      label: "Rata-rata peningkatan nilai order setelah loyalty program aktif",
      source: "Bond Loyalty Report",
      color: "#69594a",
      icon: Award,
    },
    {
      value: "2.3x",
      label: "Tingkat konversi lebih tinggi dengan landing page yang dioptimasi khusus",
      source: "HubSpot Research",
      color: "#ff6249",
      icon: BarChart3,
    },
  ];

  return (
    <section id="data" className="min-h-screen" style={{ backgroundColor: "#010101" }}>
      <div className="max-w-6xl mx-auto px-8 py-24">
        <SectionReveal>
          <FadeUp>
            <Tag color="#ff6249">Data &amp; Benchmark</Tag>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              className="mt-4 text-4xl md:text-5xl text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Strategi Ini Terbukti
            </h2>
            <p className="mt-2 text-[#f38d10] text-lg">
              Dibangun di atas data nyata dari industri F&amp;B Asia Tenggara
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {stats.map((stat, i) => (
              <FadeUp key={stat.value} delay={0.08 + i * 0.07}>
                <div
                  className="rounded-3xl p-7 h-full border flex flex-col gap-4"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.07)",
                    borderTopColor: stat.color,
                    borderTopWidth: 2,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}18` }}
                  >
                    <stat.icon size={18} style={{ color: stat.color }} strokeWidth={1.5} />
                  </div>
                  <p
                    className="text-5xl font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed flex-1">{stat.label}</p>
                  <p className="text-white/25 text-xs border-t border-white/[0.07] pt-3">
                    Sumber: {stat.source}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Final CTA */}
          <FadeUp delay={0.5}>
            <div
              className="mt-10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border"
              style={{
                backgroundColor: "rgba(243,141,16,0.06)",
                borderColor: "rgba(243,141,16,0.2)",
              }}
            >
              <div>
                <p className="font-bold text-white text-xl leading-snug max-w-lg">
                  Setiap hari tanpa strategi digital adalah peluang yang hilang untuk
                  Kopi Tobi.
                </p>
                <p className="text-white/45 text-sm mt-2">
                  Kompetitor Anda sudah bergerak. Saatnya Kopi Tobi mengambil posisi terdepan.
                </p>
              </div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f38d10] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#e07d00] active:scale-95 transition-all duration-200 flex-shrink-0"
              >
                Mulai Sekarang
                <ChevronRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </FadeUp>

          {/* Footer credit */}
          <FadeUp delay={0.56}>
            <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
              <Image
                src="/kopitobi.png"
                alt="Kopi Tobi"
                width={100}
                height={34}
                className="h-8 w-auto object-contain opacity-70"
              />
              <p className="text-white/25 text-xs">
                Kopi Tobi Digital Strategy 2025 — Dokumen Rahasia untuk Penggunaan Internal
              </p>
            </div>
          </FadeUp>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   STICKY NAV
═══════════════════════════════════ */
function StickyNav({ active }: { active: string }) {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-2">
      {SLIDES.map((slide) => (
        <a
          key={slide.id}
          href={`#${slide.id}`}
          className="group flex items-center gap-2"
          title={slide.label}
        >
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: active === slide.id ? "8px" : "6px",
              height: active === slide.id ? "8px" : "6px",
              backgroundColor: active === slide.id ? "#f38d10" : "rgba(255,255,255,0.3)",
            }}
          />
          <span
            className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            style={{ color: active === slide.id ? "#f38d10" : "rgba(255,255,255,0.6)" }}
          >
            {slide.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

/* ═══════════════════════════════════
   PROGRESS BAR
═══════════════════════════════════ */
function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <motion.div
        className="h-full origin-left"
        style={{ backgroundColor: "#f38d10", width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

/* ═══════════════════════════════════
   TOP NAV BAR
═══════════════════════════════════ */
function TopNav() {
  return (
    <header
      className="fixed top-0.5 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(1,1,1,0.85)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/kopitobi.png"
            alt="Kopi Tobi"
            width={90}
            height={30}
            className="h-7 w-auto object-contain"
          />
          <span
            className="hidden sm:block text-xs font-semibold tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Digital Strategy 2025
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-xs font-medium px-4 py-2 rounded-full border transition-colors duration-200"
            style={{
              color: "rgba(255,255,255,0.55)",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            Kembali ke Website
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-4 py-2 rounded-full transition-all duration-200"
            style={{ backgroundColor: "#f38d10", color: "white" }}
          >
            Konsultasi
          </a>
        </div>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════
   MAIN PAGE
═══════════════════════════════════ */
export default function PresentasiPage() {
  const [activeSlide, setActiveSlide] = useState("visi");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SLIDES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSlide(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <ProgressBar />
      <TopNav />
      <StickyNav active={activeSlide} />

      <main className="pt-[52px]">
        <SlideVisi />
        <SlideDigital />
        <SlideOtomasi />
        <SlideGrowth />
        <SlideLoyalty />
        <SlideRoadmap />
        <SlideData />
      </main>
    </>
  );
}
