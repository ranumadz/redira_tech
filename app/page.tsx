"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description:
      "Landing page, company profile, website bisnis, dan web custom dengan tampilan modern, rapi, dan performa optimal.",
    label: "Website",
  },
  {
    title: "Mobile App Development",
    description:
      "Aplikasi Android dan iOS yang cepat, stabil, user-friendly, dan cocok buat kebutuhan bisnis yang ingin naik level.",
    label: "Mobile App",
  },
  {
    title: "Web App & Dashboard",
    description:
      "Dashboard admin, sistem internal, booking system, CRM, dan aplikasi operasional yang dibangun sesuai flow bisnis.",
    label: "Dashboard",
  },
  {
    title: "SaaS & Rental Application",
    description:
      "Bangun produk digital yang bisa dipakai banyak client dengan struktur scalable dan siap dikembangkan bertahap.",
    label: "SaaS",
  },
];

const featurePackages = [
  {
    title: "Silver Package",
    subtitle: "Starter Choice",
    description:
      "Cocok buat bisnis yang baru mulai dan butuh website profesional yang simpel, rapi, dan mudah dipahami client.",
    image: "/images/badge-silver.png",
  },
  {
    title: "Gold Package",
    subtitle: "Growth Choice",
    description:
      "Pas buat bisnis yang pengen tampil lebih niat dengan fitur yang lebih lengkap dan value yang lebih tinggi.",
    image: "/images/badge-gold.png",
  },
  {
    title: "Diamond Package",
    subtitle: "Business Choice",
    description:
      "Buat kebutuhan yang lebih serius, lebih premium, dan lebih cocok untuk branding maupun kebutuhan operasional digital.",
    image: "/images/badge-diamond.png",
  },
  {
    title: "Platinum Package",
    subtitle: "Premium Choice",
    description:
      "Pilihan paling proper buat bisnis yang pengen tampil beda, lebih meyakinkan, dan siap dikembangkan ke level berikutnya.",
    image: "/images/badge-platinum.png",
  },
];

const features = [
  "UI modern dan lebih meyakinkan buat client",
  "Struktur code rapi dan gampang dikembangkan",
  "Responsive, fast loading, dan enak dipakai",
  "Siap maintenance dan penambahan fitur berikutnya",
];

const portfolioItems = [
  {
    title: "Company Profile Website",
    category: "Website Business",
    description:
      "Website company profile modern untuk ningkatin branding, trust, dan kesan profesional bisnis.",
    image: "/images/portfolio-1.jpg",
    link: "#",
  },
  {
    title: "Booking & Reservation System",
    category: "Web App",
    description:
      "Sistem booking digital dengan dashboard admin, monitoring data, dan operasional yang lebih rapi.",
    image: "/images/portfolio-2.jpg",
    link: "https://readyroom.id/",
  },
  {
    title: "Mobile Service Application",
    category: "Mobile App",
    description:
      "Aplikasi mobile untuk pemesanan layanan, tracking proses, dan pengalaman pengguna yang lebih praktis.",
    image: "/images/portfolio-3.jpg",
    link: "#",
  },
];

const processSteps = [
  {
    title: "Discovery",
    desc: "Ngobrolin kebutuhan, target, flow bisnis, dan hasil yang pengen dicapai.",
  },
  {
    title: "Planning",
    desc: "Nyusun struktur halaman, fitur, dan arah desain biar project lebih jelas dari awal.",
  },
  {
    title: "Design & Build",
    desc: "Masuk ke desain visual lalu development dengan tampilan modern dan struktur yang rapi.",
  },
  {
    title: "Launch & Support",
    desc: "Setelah jadi, project siap dipublish, dites, dan dibantu buat pengembangan selanjutnya.",
  },
];

const stats = [
  { value: "Modern", label: "Design Feel" },
  { value: "Clean", label: "Code Structure" },
  { value: "Fast", label: "Development Flow" },
  { value: "Scale", label: "Ready to Grow" },
];

const trustPoints = [
  "120+ bisnis pernah konsultasi & menggunakan jasa digital kami",
  "Cocok untuk website, aplikasi mobile, dashboard, dan SaaS",
  "Dipilih bisnis yang pengen tampil lebih proper dan meyakinkan",
];

export default function HomePage() {
  return (
    <main className="bg-[#F4F7FB] text-slate-900 overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-180px] left-[-60px] h-[420px] w-[420px] rounded-full bg-[#6C63FF]/15 blur-[120px]" />
        <div className="absolute top-[10%] right-[-100px] h-[420px] w-[420px] rounded-full bg-[#4F8CFF]/15 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[20%] h-[340px] w-[340px] rounded-full bg-[#7C4DFF]/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white shadow-lg shadow-blue-500/10 ring-1 ring-white/70">
              <Image
                src="/images/icon_redira.png"
                alt="Redira Technology Icon"
                fill
                className="object-contain p-1.5"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="font-semibold tracking-tight text-slate-900 truncate">
                Redira Technology
              </p>
              <p className="text-xs text-slate-500 truncate">
                Digital Product & Software Partner
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-[0_8px_40px_rgba(15,23,42,0.06)]">
            <a
              href="#services"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Services
            </a>
            <a
              href="#packages"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Packages
            </a>
            <a
              href="#portfolio"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Process
            </a>
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Why Us
            </a>
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#6C63FF] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02]"
          >
            Konsultasi
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex items-center rounded-full border border-[#DCE7FF] bg-white px-4 py-2 text-sm font-medium text-[#5563D6] shadow-sm">
                Solusi website, aplikasi, dashboard, dan SaaS
              </div>

              <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.04]">
                Bangun produk digital
                <span className="block bg-gradient-to-r from-[#4F8CFF] via-[#6C63FF] to-[#7E57FF] bg-clip-text text-transparent">
                  yang keliatan niat,
                </span>
                modern, dan meyakinkan
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Redira Technology bantu bisnis kamu tampil lebih profesional
                lewat website, aplikasi mobile, dashboard, dan sistem digital
                yang bukan cuma enak dilihat, tapi juga siap dipakai dan
                dikembangin.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#6C63FF] px-7 py-3.5 font-semibold text-white shadow-[0_16px_40px_rgba(79,140,255,0.28)] transition hover:-translate-y-0.5"
                >
                  Mulai Konsultasi
                </Link>

                <a
                  href="#portfolio"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Lihat Portfolio
                </a>
              </div>

              {/* TRUST TEXT BELOW HERO */}
              <div className="mt-8 rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-[#EEF3FF] ring-1 ring-slate-200">
                    <Image
                      src="/images/icon_redira.png"
                      alt="Redira Trust Icon"
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5D58F6]">
                      Trusted Value
                    </p>
                    <p className="text-sm text-slate-500">
                      Bukti awal biar calon client lebih yakin lihat service kamu
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {trustPoints.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-[22px] bg-[#F7F9FF] px-4 py-4 text-sm leading-7 text-slate-700 ring-1 ring-slate-200/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-[24px] border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur"
                  >
                    <p className="text-xl font-bold text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#4F8CFF]/20 via-[#6C63FF]/15 to-[#8B5CF6]/10 blur-3xl" />

              <div className="absolute -top-4 right-8 z-20 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur">
                <p className="text-xs font-semibold text-[#5563D6]">
                  UI yang lebih meyakinkan
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Cocok buat bisnis & startup
                </p>
              </div>

              <div className="absolute -bottom-5 left-0 z-20 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur">
                <p className="text-xs font-semibold text-[#5563D6]">
                  Siap dikembangin
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Website, app, dashboard, SaaS
                </p>
              </div>

              <div className="relative rounded-[36px] border border-white/70 bg-white/75 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                <div className="rounded-[28px] bg-gradient-to-br from-[#5B56F7] via-[#4E7FFF] to-[#6C63FF] p-4 md:p-5">
                  <div className="rounded-[24px] bg-white p-4 shadow-inner">
                    <div className="relative overflow-hidden rounded-[20px] bg-[#EEF3FF]">
                      <Image
                        src="/images/hero-mockup.png"
                        alt="Hero mockup Redira Technology"
                        width={900}
                        height={700}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-[#F6F8FF] p-3">
                        <div className="h-2.5 w-16 rounded-full bg-[#6C63FF]/30" />
                        <div className="mt-3 h-10 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#6C63FF]" />
                      </div>
                      <div className="rounded-2xl bg-[#F6F8FF] p-3">
                        <div className="h-2.5 w-12 rounded-full bg-[#6C63FF]/30" />
                        <div className="mt-3 h-10 rounded-xl border border-slate-200 bg-white" />
                      </div>
                      <div className="rounded-2xl bg-[#F6F8FF] p-3">
                        <div className="h-2.5 w-10 rounded-full bg-[#6C63FF]/30" />
                        <div className="mt-3 h-10 rounded-xl border border-slate-200 bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="pb-8 md:pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[36px] border border-white/70 bg-gradient-to-r from-[#5A54F5] to-[#6C63FF] px-6 py-8 md:px-10 md:py-10 shadow-[0_20px_60px_rgba(92,84,245,0.25)]">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-[28px] bg-white/95 p-6">
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#4F8CFF] to-[#6C63FF]" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Professional Approach
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Nggak cuma bikin tampilan, tapi bantu bangun produk digital
                  yang lebih proper, lebih niat, dan lebih siap dipakai.
                </p>
              </div>

              <div className="rounded-[28px] bg-white/95 p-6">
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#4F8CFF] to-[#6C63FF]" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Startup-Level Feel
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Visual, layout, dan struktur dibikin biar project kamu keliatan
                  modern, meyakinkan, dan punya value lebih tinggi.
                </p>
              </div>

              <div className="rounded-[28px] bg-white/95 p-6">
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#4F8CFF] to-[#6C63FF]" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Scalable Technology
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Cocok buat company profile, dashboard, aplikasi custom, sampai
                  sistem yang nanti mau ditambah fitur pelan-pelan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5D58F6]">
              Services
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Solusi digital yang bikin bisnis kamu keliatan naik kelas
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tetep clean, tetep rapi, tapi tampil lebih niat, lebih premium,
              dan lebih cocok buat jual jasa website, aplikasi, maupun SaaS.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item, i) => (
              <div
                key={i}
                className="group rounded-[30px] border border-white/70 bg-white/90 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(92,84,245,0.14)]"
              >
                <div className="inline-flex rounded-full bg-gradient-to-r from-[#EEF4FF] to-[#F3EEFF] px-4 py-2 text-xs font-semibold text-[#5D58F6]">
                  {item.label}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#6C63FF]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES TEMPLATE */}
      <section id="packages" className="pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-gradient-to-br from-[#5C54F5] via-[#6A63FF] to-[#7E57FF] px-6 py-12 md:px-10 md:py-14 shadow-[0_24px_80px_rgba(92,84,245,0.26)]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-16 -left-10 h-48 w-48 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#9CC4FF] blur-3xl" />
            </div>

            <div className="relative">
              <div className="mx-auto inline-flex rounded-full bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B00] shadow-sm">
                Paket Pilihan
              </div>

              <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Template paket di atas Why Redira
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                    Ini template section yang feel-nya ngarah ke sample yang
                    kamu kasih. Nanti gambar badge seperti silver, gold,
                    diamond, dan platinum tinggal kamu ganti sendiri aja.
                  </p>
                </div>

                <div className="rounded-[28px] bg-white/16 p-6 backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                    Note
                  </p>
                  <p className="mt-3 text-base leading-8 text-white/90">
                    Tinggal masukin icon/gambar paket dan ubah deskripsinya
                    sesuai kebutuhan kamu. Layout-nya udah siap dipakai dan
                    posisinya udah ditaruh sebelum Why Redira.
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featurePackages.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-[30px] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.14)]"
                  >
                    <div className="flex min-h-[120px] items-center justify-center rounded-[24px] bg-gradient-to-b from-[#F7F8FF] to-[#EEF3FF] p-6">
                      <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-white shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <p className="inline-flex rounded-full bg-gradient-to-r from-[#EEF4FF] to-[#F3EEFF] px-3 py-1 text-xs font-semibold text-[#5D58F6]">
                        {item.subtitle}
                      </p>

                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-6 flex justify-center">
                        <a
                          href="/contact"
                          className="inline-flex rounded-full bg-gradient-to-r from-[#5C54F5] to-[#6C63FF] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
                        >
                          Lihat Detail
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-sm text-white/80">
                Tempat gambar paket:
                <span className="ml-2 font-semibold text-white">
                  /public/images/badge-silver.png
                </span>
                ,
                <span className="ml-2 font-semibold text-white">
                  /public/images/badge-gold.png
                </span>
                ,
                <span className="ml-2 font-semibold text-white">
                  /public/images/badge-diamond.png
                </span>
                ,
                <span className="ml-2 font-semibold text-white">
                  /public/images/badge-platinum.png
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / WHY US */}
      <section
        id="about"
        className="border-y border-slate-200/60 bg-gradient-to-b from-[#F7F9FF] to-white py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto grid items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5D58F6]">
              Why Redira
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Bukan sekadar tampil keren, tapi juga enak dipakai dan enak dijual
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Redira Technology fokus bikin tampilan yang lebih proper, lebih
              clean, dan lebih meyakinkan, tanpa bikin project kamu keliatan
              rame random atau berat dipakai.
            </p>

            <div className="mt-8 grid gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-[22px] border border-white/70 bg-white p-4 shadow-[0_10px_25px_rgba(15,23,42,0.04)]"
                >
                  <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#6C63FF]" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[28px] border border-white/70 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold text-[#5D58F6]">Focus</p>
              <h3 className="mt-2 text-2xl font-semibold">Business Impact</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Nggak cuma bagus, tapi bantu ningkatin branding, trust, dan
                peluang closing project.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/70 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold text-[#5D58F6]">Approach</p>
              <h3 className="mt-2 text-2xl font-semibold">Modern UI Feel</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Arah visual dibikin modern, rapi, startup-ish, tapi tetap aman
                buat company profile dan jasa digital.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/70 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)] sm:col-span-2">
              <p className="text-sm font-semibold text-[#5D58F6]">Scalability</p>
              <h3 className="mt-2 text-2xl font-semibold">
                Bisa mulai simpel, lalu berkembang
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Cocok banget kalau project kamu mau dimulai dari landing page
                atau company profile dulu, terus nanti naik ke dashboard,
                aplikasi mobile, sampai SaaS platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5D58F6]">
                Portfolio
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Project yang bisa langsung kamu isi link live-nya
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Gue pertahanin section portfolio, tapi tampilannya gue bikin
                lebih hidup. Tinggal ganti judul, gambar, deskripsi, dan link
                project hosting kamu.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              Diskusikan Project
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(92,84,245,0.12)]"
              >
                <div className="relative h-64 overflow-hidden bg-[#EEF3FF]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="inline-flex rounded-full bg-gradient-to-r from-[#EEF4FF] to-[#F3EEFF] px-3 py-1 text-xs font-semibold text-[#5D58F6]">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5D58F6]"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[#141A2A] py-20 text-white md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#98B4FF]">
              Process
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Cara kerja yang jelas, biar project nggak berasa random
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Process tetap gue pertahanin, tapi sekarang lebih tegas dan lebih
              premium biar cocok sama landing page style yang kamu pengen.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item, i) => (
              <div
                key={i}
                className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#4F8CFF] to-[#6C63FF] text-lg font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[36px] border border-white/70 bg-gradient-to-br from-[#4F8CFF] via-[#5C54F5] to-[#6C63FF] px-8 py-14 text-center text-white shadow-[0_24px_80px_rgba(79,140,255,0.28)] md:px-14 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Ready to build
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Siap bikin website atau aplikasi yang keliatan lebih proper?
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-lg leading-8 text-blue-50">
              Mulai dari company profile, dashboard operasional, mobile app,
              sampai sistem SaaS yang siap dipakai dan siap dikembangin.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 font-semibold text-[#4F5CF7] transition hover:-translate-y-0.5"
              >
                Konsultasi Sekarang
              </Link>

              <a
                href="#portfolio"
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Lihat Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}