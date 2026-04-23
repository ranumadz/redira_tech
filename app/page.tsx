"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ================= DATA UPGRADE ================= */

const services = [
  {
    title: "Custom Website Development",
    label: "Build",
    description:
      "Pembuatan website dari nol sesuai kebutuhan bisnis dengan tampilan modern dan performa optimal.",
    points: [
      "Company profile & landing page",
      "Website custom & sistem bisnis",
      "Responsive & modern UI",
    ],
  },
  {
    title: "Mobile App Development",
    label: "Build",
    description:
      "Aplikasi Android & iOS untuk meningkatkan pengalaman digital bisnis kamu.",
    points: [
      "Android & iOS app",
      "User-friendly & scalable",
      "Integrasi backend & API",
    ],
  },
  {
    title: "Web App & Dashboard",
    label: "Build",
    description:
      "Dashboard admin, CRM, dan sistem operasional sesuai kebutuhan bisnis.",
    points: [
      "Admin & monitoring system",
      "Automation workflow",
      "Custom business logic",
    ],
  },
  {
    title: "Rental & SaaS Application",
    label: "Rental",
    description:
      "Aplikasi siap pakai yang bisa langsung digunakan tanpa harus build dari nol.",
    points: [
      "Lebih cepat launch",
      "Biaya lebih ringan",
      "Siap pakai & scalable",
    ],
  },
];

const stats = [
  { value: "Modern", label: "Design" },
  { value: "Clean", label: "Structure" },
  { value: "Fast", label: "Performance" },
  { value: "Scale", label: "Growth" },
];

/* ================= COMPONENT ================= */

export default function HomePage() {
  return (
    <main className="bg-[#0B0F1A] text-white overflow-x-hidden">

      {/* GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F1A]/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <p className="font-semibold">Redira Technology</p>

          <Link
            href="/contact"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-semibold"
          >
            Konsultasi
          </Link>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-300">
              Solusi Digital Modern
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              Bangun produk digital
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                yang keliatan niat,
              </span>
              modern, dan scalable
            </h1>

            <p className="mt-6 text-slate-300 max-w-xl">
              Redira membantu bisnis berkembang melalui website, aplikasi, dan sistem digital.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                Mulai Konsultasi
              </Link>

              <a href="#portfolio" className="px-7 py-3 rounded-xl border border-white/20">
                Lihat Portfolio
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold">{item.value}</p>
                  <p className="text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-xl">
                  <p className="text-sm text-slate-400">Users</p>
                  <p className="font-bold">12.540</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <p className="text-sm text-slate-400">Project</p>
                  <p className="font-bold">34</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <p className="text-sm text-slate-400">Revenue</p>
                  <p className="font-bold">Rp 128JT</p>
                </div>
              </div>

              <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition">
              <p className="text-sm text-blue-400">{item.label}</p>
              <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{item.description}</p>

              <div className="mt-4 space-y-1 text-sm text-slate-300">
                {item.points.map((p, idx) => (
                  <p key={idx}>• {p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BUILD VS RENTAL ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Pilih solusi sesuai kebutuhan
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-6">

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-left">
              <h3 className="text-2xl font-bold">Custom Build</h3>
              <p className="text-slate-400 mt-4">
                Bangun sistem dari nol sesuai kebutuhan bisnis.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-left">
              <h3 className="text-2xl font-bold">Rental System</h3>
              <p className="text-slate-400 mt-4">
                Gunakan aplikasi siap pakai lebih cepat dan hemat.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <Link
          href="/contact"
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600"
        >
          Konsultasi Sekarang
        </Link>
      </section>

    </main>
  );
}