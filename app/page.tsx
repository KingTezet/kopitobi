"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Coffee,
  MapPin,
  Clock,
  Wifi,
  Star,
  Instagram,
  MessageCircle,
  ChevronRight,
  Zap,
  Droplets,
  Leaf,
  Sun,
  Sofa,
  Trees,
  Quote,
  Phone,
  PartyPopper,
  GraduationCap,
  Music,
  Scissors,
} from "lucide-react";

/* ═══════════════════════════════
   DATA LAYER
═══════════════════════════════ */
const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Menu", href: "#menu" },
  { label: "Ruang", href: "#ruang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Testimoni", href: "#testimoni" },
];

const stats = [
  { value: "5+", label: "Tahun Berdiri" },
  { value: "12k+", label: "Pelanggan Setia" },
  { value: "4.9", label: "Rating Google" },
];

const menuCategories = [
  {
    label: "Signature",
    items: [
      {
        name: "Espresso Tobi",
        desc: "Biji pilihan, tekanan sempurna. Pekat, bold, tanpa kompromi.",
        price: "Rp 28.000",
        icon: Coffee,
        img: "/images/menu1.jpg",
      },
      {
        name: "Tobi Latte",
        desc: "Espresso berpadu susu steamed — harmoni lembut yang panjang.",
        price: "Rp 38.000",
        icon: Droplets,
        img: "/images/menu2.jpg",
      },
      {
        name: "Filter Coffee",
        desc: "Manual brew slow pour. Nuansa floral dan fruity yang elegan.",
        price: "Rp 35.000",
        icon: Leaf,
        img: "/images/menu3.jpg",
      },
    ],
  },
  {
    label: "Espresso Based",
    items: [
      {
        name: "Americano",
        desc: "Espresso diencerkan air panas. Bersih, to the point, tanpa berlebihan.",
        price: "Rp 25.000",
        icon: Coffee,
        img: "/images/menu4.jpg",
      },
      {
        name: "Cappuccino",
        desc: "Perpaduan espresso, susu panas, dan milk foam yang seimbang.",
        price: "Rp 34.000",
        icon: Zap,
        img: "/images/menu5.jpg",
      },
      {
        name: "Flat White",
        desc: "Lebih pekat dari latte, lebih lembut dari cappuccino.",
        price: "Rp 36.000",
        icon: Sun,
        img: "/images/menu6.jpg",
      },
    ],
  },
  {
    label: "Non-Coffee",
    items: [
      {
        name: "Matcha Latte",
        desc: "Matcha premium Jepang dengan susu segar lokal. Segar dan earthy.",
        price: "Rp 36.000",
        icon: Leaf,
        img: "/images/menu7.jpg",
      },
      {
        name: "Tobi Choco",
        desc: "Dark chocolate blend dengan susu full cream. Klasik tanpa alasan.",
        price: "Rp 32.000",
        icon: Droplets,
        img: "/images/menu8.jpg",
      },
      {
        name: "Lemon Ginger",
        desc: "Segar, hangat, dan menyegarkan. Tanpa kafein, penuh rasa.",
        price: "Rp 28.000",
        icon: Sun,
        img: "/images/menu9.jpg",
      },
    ],
  },
];

const galleryItems = [
  {
    img: "/images/tempat1.jpg",
    label: "Indoor Nyaman",
    span: "col-span-2 row-span-2",
    height: "h-[380px]",
  },
  {
    img: "/images/tempat2.jpg",
    label: "Suasana Pagi",
    span: "",
    height: "h-[183px]",
  },
  {
    img: "/images/tempat3.jpg",
    label: "Outdoor Area",
    span: "",
    height: "h-[183px]",
  },
  {
    img: "/images/tempat4.jpg",
    label: "Cozy Corner",
    span: "",
    height: "h-[183px]",
  },
  {
    img: "/images/tempat5.jpg",
    label: "Bar Area",
    span: "",
    height: "h-[183px]",
  },
  {
    img: "/images/tempat6.jpg",
    label: "Area Komunitas",
    span: "col-span-2",
    height: "h-[183px]",
  },
  {
    img: "/images/tempat7.jpg",
    label: "Sudut Tenang",
    span: "",
    height: "h-[183px]",
  },
  {
    img: "/images/tempat8.jpg",
    label: "Fasad Depan",
    span: "",
    height: "h-[183px]",
  },
];

const services = [
  {
    icon: PartyPopper,
    title: "Paket Ulang Tahun",
    desc: "Rayakan momen spesial di Kopi Tobi. Dekorasi, kue, dan hidangan pilihan tersedia khusus untukmu.",
    tag: "Event",
    accent: "#f38d10",
  },
  {
    icon: Scissors,
    title: "Paket Khitan & Syukuran",
    desc: "Venue dan catering untuk momen sakral keluarga. Kami siapkan segalanya dengan hangat.",
    tag: "Keluarga",
    accent: "#69594a",
  },
  {
    icon: GraduationCap,
    title: "Cooking Class",
    desc: "Belajar meracik kopi dan makanan bersama barista dan chef kami. Cocok untuk semua usia.",
    tag: "Edukasi",
    accent: "#010101",
  },
  {
    icon: Music,
    title: "Edukasi & Workshop",
    desc: "Sesi edukasi interaktif untuk komunitas, sekolah, atau korporat. Fleksibel dan menyenangkan.",
    tag: "Komunitas",
    accent: "#ff6249",
  },
];

const testimonials = [
  {
    name: "Rizky A.",
    role: "Desainer Grafis",
    text: "Tempat paling nyaman buat kerja remote di Sumedang. WiFi kencang, kopinya juara, dan atmosfernya bikin produktif.",
    rating: 5,
  },
  {
    name: "Dinda M.",
    role: "Mahasiswi UNSAP",
    text: "Filter Coffee-nya beda banget. Nuansa floralnya kerasa tanpa harus bayar mahal. Worth it setiap hari.",
    rating: 5,
  },
  {
    name: "Budi S.",
    role: "Pengusaha Lokal",
    text: "Meeting sama klien di sini jadi lebih cair. Tempatnya profesional tapi tetap hangat. Highly recommended.",
    rating: 5,
  },
];

/* ═══════════════════════════════
   ANIMATION UTILS
═══════════════════════════════ */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

function SectionReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={stagger}
      className={className}
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
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.58, delay, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════
   SPLASH SCREEN
═══════════════════════════════ */
function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 2300);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "#171511" }}
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
    >
      <motion.div
        initial={{ scale: 0.55, opacity: 0 }}
        animate={{ scale: [0.55, 1.06, 1], opacity: [0, 1, 1] }}
        transition={{
          duration: 1.25,
          ease: [0.25, 0.1, 0.25, 1],
          times: [0, 0.6, 1],
        }}
        className="flex flex-col items-center gap-5"
      >
        <Image
          src="/kopitobi.png"
          alt="Kopi Tobi"
          width={160}
          height={160}
          className="h-28 w-auto object-contain"
          priority
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.45 }}
          className="flex items-center gap-3"
        >
          <div className="h-px w-8 bg-white/35" />
          <span className="text-white/65 text-xs tracking-[0.28em] uppercase font-medium">
            Sumedang
          </span>
          <div className="h-px w-8 bg-white/35" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════
   TIKTOK ICON (lucide missing)
═══════════════════════════════ */
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

/* ═══════════════════════════════
   MAIN PAGE
═══════════════════════════════ */
export default function KopiTobiPage() {
  const [splashDone, setSplashDone] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(250,250,249,0)", "rgba(250,250,249,0.9)"]
  );

  return (
    <>
      <AnimatePresence>
        {!splashDone && (
          <SplashScreen onComplete={() => setSplashDone(true)} />
        )}
      </AnimatePresence>

      <div
        className="min-h-screen overflow-x-hidden"
        style={{ backgroundColor: "#fafaf9" }}
      >
        {/* ══════════════════
            NAVBAR
        ════════════════════ */}
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.05]"
          style={{ backgroundColor: navBg, backdropFilter: "blur(18px)" }}
        >
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/kopitobi.png"
                alt="Kopi Tobi"
                width={140}
                height={48}
                className="h-11 w-auto object-contain"
                priority
              />
              <span
                className="text-2xl text-[#010101] leading-none hidden sm:block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Tobi
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[#010101]/55 hover:text-[#f38d10] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f38d10] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#e07d00] active:scale-95 transition-all duration-200"
            >
              Pesan Sekarang
              <ChevronRight size={14} strokeWidth={2.5} />
            </a>
          </nav>
        </motion.header>

        {/* ══════════════════
            HERO — BENTO
        ════════════════════ */}
        <section id="hero" className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <SectionReveal className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card Kiri Besar */}
            <FadeUp className="md:col-span-2">
              <div className="rounded-3xl bg-white border border-black/[0.06] p-10 md:p-14 flex flex-col justify-between gap-8 shadow-sm min-h-[480px] hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col gap-6">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#f38d10]">
                    <Coffee size={13} />
                    Kopi Tobi · Sumedang
                  </span>
                  <h1
                    className="text-5xl md:text-7xl leading-none text-[#010101]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Satu Cangkir.
                    <br />
                    <span style={{ color: "#f38d10" }}>Seribu</span> Cerita.
                  </h1>
                  <p className="text-base md:text-lg text-[#010101]/55 leading-relaxed max-w-md">
                    Kopi Tobi bukan sekadar minuman. Ini ritual. Ini ruang. Ini
                    milikmu — sejak tegukan pertama sampai percakapan terakhir.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#menu"
                    className="inline-flex items-center justify-center gap-2 bg-[#010101] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#f38d10] active:scale-95 transition-all duration-200"
                  >
                    Lihat Menu
                  </a>
                  <a
                    href="#ruang"
                    className="inline-flex items-center justify-center gap-2 border border-black/15 text-[#010101] font-semibold px-8 py-3.5 rounded-full hover:border-[#f38d10] hover:text-[#f38d10] transition-all duration-200"
                  >
                    Jelajahi Ruang
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Kolom Kanan */}
            <FadeUp delay={0.1} className="flex flex-col gap-4">
              {/* Promo */}
              <div
                className="rounded-3xl p-8 flex flex-col justify-between gap-6 min-h-[230px] hover:-translate-y-1 transition-transform duration-300"
                style={{ backgroundColor: "#f38d10" }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                    Promo Hari Ini
                  </span>
                  <Zap size={20} className="text-white" fill="white" />
                </div>
                <div>
                  <p
                    className="text-white text-3xl leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Everyday Fresh.
                  </p>
                  <p className="text-white/75 text-sm mt-2 leading-relaxed">
                    Biji kopi segar di-roast setiap hari. Tanpa kompromi, tanpa
                    stale.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee size={24} className="text-white" />
                  <span className="text-white/60 text-xs">Fresh · Daily Roast</span>
                </div>
              </div>

              {/* Lokasi + Maps */}
              <div
                className="rounded-3xl overflow-hidden flex flex-col min-h-[230px] hover:-translate-y-1 transition-transform duration-300"
                style={{ backgroundColor: "#69594a" }}
              >
                {/* Maps embed — top half */}
                <div className="flex-1 min-h-[130px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.449431016123!2d107.91581049999999!3d-6.8365958000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68d12d01949c57%3A0x21a9e549bf2e560f!2sKopi%20Tobi!5e0!3m2!1sid!2sid!4v1783161711819!5m2!1sid!2sid"
                    className="w-full h-full"
                    style={{ border: 0, display: "block", minHeight: "130px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Lokasi Kopi Tobi"
                  />
                </div>
                {/* Info — bottom */}
                <div className="p-5 flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <p
                      className="text-white text-lg"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Lokasi Kopi Tobi
                    </p>
                    <MapPin size={16} className="text-white/70 mt-0.5 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-2 text-white/65 text-xs">
                    <Clock size={12} />
                    <span>07.00 – 22.00 WIB · Setiap Hari</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </SectionReveal>
        </section>

        {/* ══════════════════
            STATS STRIP
        ════════════════════ */}
        <div className="bg-[#010101] py-10">
          <SectionReveal className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/10">
            {stats.map((stat) => (
              <FadeUp
                key={stat.label}
                className="flex flex-col items-center gap-1 px-8"
              >
                <span
                  className="text-5xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "#f38d10" }}
                >
                  {stat.value}
                </span>
                <span className="text-white/50 text-sm tracking-wide">
                  {stat.label}
                </span>
              </FadeUp>
            ))}
          </SectionReveal>
        </div>

        {/* ══════════════════
            ABOUT US
        ════════════════════ */}
        <section id="tentang" className="max-w-7xl mx-auto px-6 py-28">
          <SectionReveal className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Teks Kiri */}
            <div className="flex flex-col gap-8 order-2 md:order-1">
              <FadeUp>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#f38d10]">
                  Tentang Kami
                </span>
              </FadeUp>
              <FadeUp>
                <h2
                  className="text-4xl md:text-5xl text-[#010101] leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Dimulai dari Sumedang,
                  <br />
                  Diseduh dengan{" "}
                  <span style={{ color: "#69594a" }}>Ketulusan.</span>
                </h2>
              </FadeUp>
              <FadeUp>
                <p className="text-[#010101]/55 leading-relaxed">
                  Kopi Tobi lahir dari keyakinan sederhana: secangkir kopi yang baik
                  bisa mengubah hari. Bukan karena kafein-nya, tapi karena momennya
                  — saat kamu duduk, menghela napas, dan membiarkan dunia berhenti
                  sebentar.
                </p>
              </FadeUp>
              <FadeUp>
                <p className="text-[#010101]/55 leading-relaxed">
                  Kami memilih biji dengan sabar, meroasting dengan teliti, dan
                  menyajikan dengan tangan yang sama yang membangun tempat ini dari
                  nol. Karena bagi kami, kopi bukan produk. Ini percakapan.
                </p>
              </FadeUp>
              <FadeUp>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#010101] font-semibold text-sm border-b-2 border-[#f38d10] pb-0.5 w-fit hover:text-[#f38d10] transition-colors duration-200"
                >
                  Hubungi Kami
                  <ChevronRight size={14} />
                </a>
              </FadeUp>
            </div>

            {/* Grid Foto Kanan */}
            <FadeUp delay={0.12} className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-3">
                {/* Tall left */}
                <div className="rounded-3xl overflow-hidden row-span-2 h-80">
                  <img
                    src="/images/tempat2.jpg"
                    alt="Barista sedang menyeduh kopi"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Top right */}
                <div className="rounded-3xl overflow-hidden h-[152px]">
                  <img
                    src="/images/tempat1.jpg"
                    alt="Seduhan kopi filter"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom right */}
                <div className="rounded-3xl overflow-hidden h-[152px]">
                  <img
                    src="/images/tempat3.jpg"
                    alt="Suasana kafe Kopi Tobi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeUp>
          </SectionReveal>
        </section>

        {/* ══════════════════
            MENU
        ════════════════════ */}
        <section
          id="menu"
          className="bg-white py-28"
          style={{ borderTop: "1px solid rgba(0,0,0,0.04)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <SectionReveal>
              <FadeUp className="mb-12">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#f38d10]">
                  Menu
                </span>
                <h2
                  className="text-4xl md:text-5xl text-[#010101] mt-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Pilihan Terbaik Kami
                </h2>
                <p className="text-[#010101]/50 mt-3 max-w-lg">
                  Setiap menu dikurasi dengan ketat. Disajikan konsisten, setiap hari.
                </p>
              </FadeUp>

              {/* Category Tabs */}
              <FadeUp delay={0.08} className="flex gap-3 mb-10 flex-wrap">
                {menuCategories.map((cat, i) => (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(i)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCategory === i
                        ? "bg-[#010101] text-white"
                        : "border border-black/10 text-[#010101]/60 hover:border-[#f38d10] hover:text-[#f38d10]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </FadeUp>

              {/* Menu Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                  {menuCategories[activeCategory].items.map((item, i) => (
                    <div
                      key={item.name}
                      className="rounded-3xl overflow-hidden border border-black/[0.06] bg-white hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
                    >
                      {/* Foto produk */}
                      <div className="h-52 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Info */}
                      <div className="p-7 flex flex-col gap-4 flex-1">
                        <div className="flex items-center justify-between">
                          <div className="w-9 h-9 rounded-xl bg-[#fafaf9] border border-black/[0.06] flex items-center justify-center">
                            <item.icon
                              size={18}
                              className="text-[#010101]/35 group-hover:text-[#f38d10] transition-colors duration-200"
                              strokeWidth={1.5}
                            />
                          </div>
                          <span
                            className="text-3xl text-[#010101]/08"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            0{i + 1}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1.5 flex-1">
                          <h3 className="font-semibold text-[#010101] text-lg">
                            {item.name}
                          </h3>
                          <p className="text-[#010101]/50 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                          <span
                            className="font-bold text-lg"
                            style={{ color: "#ff6249" }}
                          >
                            {item.price}
                          </span>
                          <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-[#010101]/35 hover:text-[#f38d10] flex items-center gap-1 transition-colors duration-200"
                          >
                            Pesan
                            <ChevronRight size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </SectionReveal>
          </div>
        </section>

        {/* ══════════════════
            LAYANAN KHUSUS
        ════════════════════ */}
        <section
          id="layanan"
          className="bg-[#fafaf9] py-28"
          style={{ borderTop: "1px solid rgba(0,0,0,0.04)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <SectionReveal>
              <FadeUp className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#f38d10]">
                    Layanan Khusus
                  </span>
                  <h2
                    className="text-4xl md:text-5xl text-[#010101] mt-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Lebih dari Sekadar
                    <br />
                    Secangkir Kopi.
                  </h2>
                  <p className="text-[#010101]/50 mt-3 max-w-lg">
                    Kopi Tobi hadir untuk momen-momen terpenting hidupmu. Dari perayaan
                    hingga edukasi, kami siap.
                  </p>
                </div>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f38d10] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e07d00] active:scale-95 transition-all duration-200 flex-shrink-0"
                >
                  <MessageCircle size={15} />
                  Konsultasi Gratis
                </a>
              </FadeUp>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {services.map((svc, i) => (
                  <FadeUp key={svc.title} delay={i * 0.08}>
                    <div className="rounded-3xl bg-white border border-black/[0.06] p-8 flex gap-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm group h-full">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${svc.accent}14` }}
                      >
                        <svc.icon
                          size={24}
                          strokeWidth={1.5}
                          style={{ color: svc.accent }}
                        />
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-[#010101] text-lg">
                            {svc.title}
                          </h3>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              color: svc.accent,
                              backgroundColor: `${svc.accent}14`,
                            }}
                          >
                            {svc.tag}
                          </span>
                        </div>
                        <p className="text-[#010101]/50 text-sm leading-relaxed">
                          {svc.desc}
                        </p>
                        <a
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold mt-2 w-fit transition-colors duration-200"
                          style={{ color: svc.accent }}
                        >
                          Tanya Sekarang
                          <ChevronRight size={12} />
                        </a>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ══════════════════
            RUANG — GALLERY
        ════════════════════ */}
        <section id="ruang" className="bg-[#010101] py-28">
          <div className="max-w-7xl mx-auto px-6">
            <SectionReveal>
              <FadeUp className="mb-14 max-w-xl">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#f38d10]">
                  Ruang Kami
                </span>
                <h2
                  className="text-4xl md:text-5xl text-white mt-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Setiap Sudut
                  <br />
                  Punya Ceritanya.
                </h2>
                <p className="text-white/40 mt-4 leading-relaxed">
                  Kami rancang setiap ruang agar kamu betah — entah kerja, ngobrol, atau
                  sekadar diam sambil menikmati kopi.
                </p>
              </FadeUp>

              {/* Photo Gallery Grid */}
              <FadeUp delay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-auto">
                  {/* Large — top left, spans 2 cols and 2 rows */}
                  <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden h-[380px] relative group">
                    <img
                      src="/images/tempat1.jpg"
                      alt="Indoor Nyaman"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-center gap-2">
                        <Sofa size={16} className="text-white/80" />
                        <span className="text-white font-semibold text-sm">
                          Indoor Nyaman
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top right 1 */}
                  <div className="rounded-3xl overflow-hidden h-[183px] relative group">
                    <img
                      src="/images/tempat2.jpg"
                      alt="Suasana Pagi"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/55 to-transparent">
                      <span className="text-white font-semibold text-xs">
                        Suasana Pagi
                      </span>
                    </div>
                  </div>

                  {/* Top right 2 */}
                  <div className="rounded-3xl overflow-hidden h-[183px] relative group">
                    <img
                      src="/images/tempat3.jpg"
                      alt="Outdoor Area"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/55 to-transparent">
                      <span className="text-white font-semibold text-xs">
                        Outdoor Area
                      </span>
                    </div>
                  </div>

                  {/* Bottom right 1 */}
                  <div className="rounded-3xl overflow-hidden h-[183px] relative group">
                    <img
                      src="/images/tempat4.jpg"
                      alt="Cozy Corner"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/55 to-transparent">
                      <span className="text-white font-semibold text-xs">
                        Cozy Corner
                      </span>
                    </div>
                  </div>

                  {/* Bottom right 2 */}
                  <div className="rounded-3xl overflow-hidden h-[183px] relative group">
                    <img
                      src="/images/tempat5.jpg"
                      alt="Bar Area"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/55 to-transparent">
                      <span className="text-white font-semibold text-xs">
                        Bar Area
                      </span>
                    </div>
                  </div>

                  {/* Bottom Extra 1 (span 2) */}
                  <div className="col-span-2 rounded-3xl overflow-hidden h-[183px] relative group">
                    <img
                      src="/images/tempat6.jpg"
                      alt="Area Komunitas"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/55 to-transparent">
                      <span className="text-white font-semibold text-xs">
                        Area Komunitas
                      </span>
                    </div>
                  </div>

                  {/* Bottom Extra 2 */}
                  <div className="rounded-3xl overflow-hidden h-[183px] relative group">
                    <img
                      src="/images/tempat7.jpg"
                      alt="Sudut Tenang"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/55 to-transparent">
                      <span className="text-white font-semibold text-xs">
                        Sudut Tenang
                      </span>
                    </div>
                  </div>

                  {/* Bottom Extra 3 */}
                  <div className="rounded-3xl overflow-hidden h-[183px] relative group">
                    <img
                      src="/images/tempat8.jpg"
                      alt="Fasad Depan"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/55 to-transparent">
                      <span className="text-white font-semibold text-xs">
                        Fasad Depan
                      </span>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Jam buka banner */}
              <FadeUp delay={0.18}>
                <div
                  className="mt-4 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/[0.07]"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <div className="flex items-center gap-5">
                    <Clock
                      size={38}
                      className="text-white/35 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p
                        className="text-white text-3xl"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        07.00 – 22.00 WIB
                      </p>
                      <p className="text-white/40 text-sm mt-1">
                        Buka setiap hari, termasuk akhir pekan dan hari libur.
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Kopi+Tobi+Sumedang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#010101] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#f38d10] hover:text-white active:scale-95 transition-all duration-200 flex-shrink-0"
                  >
                    <MapPin size={14} />
                    Cek Lokasi
                  </a>
                </div>
              </FadeUp>
            </SectionReveal>
          </div>
        </section>

        {/* ══════════════════
            TESTIMONIALS
        ════════════════════ */}
        <section id="testimoni" className="max-w-7xl mx-auto px-6 py-28">
          <SectionReveal>
            <FadeUp className="mb-14 text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#f38d10]">
                Testimoni
              </span>
              <h2
                className="text-4xl md:text-5xl text-[#010101] mt-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Yang Mereka Rasakan
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <FadeUp key={t.name} delay={i * 0.1}>
                  <div className="rounded-3xl p-8 flex flex-col gap-6 bg-white border border-black/[0.06] hover:-translate-y-1 transition-transform duration-300 shadow-sm h-full">
                    <Quote
                      size={24}
                      style={{ color: "#f38d10" }}
                      strokeWidth={1.5}
                    />
                    <p className="text-[#010101]/60 text-sm leading-relaxed flex-1">
                      {t.text}
                    </p>
                    <div className="flex flex-col gap-3 pt-4 border-t border-black/[0.06]">
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} size={13} fill="#f38d10" stroke="none" />
                        ))}
                      </div>
                      <div>
                        <p className="font-semibold text-[#010101] text-sm">
                          {t.name}
                        </p>
                        <p className="text-[#010101]/38 text-xs mt-0.5">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* ══════════════════
            FOOTER
        ════════════════════ */}
        <footer id="kontak" className="bg-[#010101] relative overflow-hidden">
          {/* Mega BG text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
          >
            <span
              className="text-[22vw] font-bold text-white/[0.028] whitespace-nowrap leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              TOBI
            </span>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
            {/* Top grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.07]">
              {/* Brand col — wide */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <Image
                  src="/kopitobi.png"
                  alt="Kopi Tobi"
                  width={220}
                  height={75}
                  className="h-16 w-auto object-contain"
                />
                <p className="text-white/38 text-sm leading-relaxed max-w-xs">
                  Kopi Tobi — ritualmu sejak pagi. Diseduh dengan ketulusan di jantung
                  Sumedang, Jawa Barat, Indonesia.
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-3 mt-1">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/[0.07] flex items-center justify-center text-white/45 hover:bg-[#f38d10] hover:text-white transition-all duration-200"
                    aria-label="WhatsApp Kopi Tobi"
                  >
                    <MessageCircle size={17} />
                  </a>
                  <a
                    href="https://instagram.com/kopitobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/[0.07] flex items-center justify-center text-white/45 hover:bg-[#f38d10] hover:text-white transition-all duration-200"
                    aria-label="Instagram Kopi Tobi"
                  >
                    <Instagram size={17} />
                  </a>
                  <a
                    href="https://tiktok.com/@kopitobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/[0.07] flex items-center justify-center text-white/45 hover:bg-[#f38d10] hover:text-white transition-all duration-200"
                    aria-label="TikTok Kopi Tobi"
                  >
                    <TikTokIcon size={17} />
                  </a>
                  <a
                    href="tel:+6281234567890"
                    className="w-11 h-11 rounded-full bg-white/[0.07] flex items-center justify-center text-white/45 hover:bg-[#f38d10] hover:text-white transition-all duration-200"
                    aria-label="Telepon Kopi Tobi"
                  >
                    <Phone size={17} />
                  </a>
                </div>
              </div>

              {/* Nav col */}
              <div className="md:col-span-3 flex flex-col gap-5">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/28">
                  Navigasi
                </span>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/45 hover:text-[#f38d10] transition-colors duration-200 w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Kontak col */}
              <div className="md:col-span-4 flex flex-col gap-5">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/28">
                  Kontak & Lokasi
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="text-white/45 text-sm">Jl. Prabu Gajah Agung</p>
                  <p className="text-white/45 text-sm">Sumedang, Jawa Barat 45311</p>
                </div>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f38d10] text-sm hover:text-white transition-colors duration-200 w-fit"
                >
                  +62 812-3456-7890
                </a>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Clock size={13} />
                  <span>07.00 – 22.00 WIB</span>
                </div>

                {/* Mini Maps in footer */}
                <div className="rounded-2xl overflow-hidden h-32 mt-1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.449431016123!2d107.91581049999999!3d-6.8365958000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68d12d01949c57%3A0x21a9e549bf2e560f!2sKopi%20Tobi!5e0!3m2!1sid!2sid!4v1783161711819!5m2!1sid!2sid"
                    className="w-full h-full"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Lokasi Kopi Tobi di Google Maps"
                  />
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-white/22 text-xs">
                © {new Date().getFullYear()} Kopi Tobi. Hak cipta dilindungi.
              </p>
              <p className="text-white/14 text-xs">
                Sumedang, Jawa Barat · Indonesia
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}