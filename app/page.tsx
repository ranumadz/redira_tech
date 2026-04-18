"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description: "Landing page, company profile, dashboard modern.",
  },
  {
    title: "Mobile App",
    description: "Aplikasi mobile cepat, stabil & user-friendly.",
  },
  {
    title: "SaaS Platform",
    description: "Produk scalable siap digunakan banyak user.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Redira Technology</h1>
          <Link href="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Contact
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Bangun Produk Digital
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Lebih Modern & Powerful
              </span>
            </h1>

            <p className="mt-6 text-gray-500 text-lg max-w-xl">
              Kami membantu bisnis membangun website, aplikasi, dan SaaS modern
              yang siap scale dengan teknologi terbaik.
            </p>

            <div className="mt-10 flex gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition">
                Konsultasi
              </Link>

              <a href="#services" className="border border-gray-300 px-7 py-3 rounded-full hover:bg-blue-600 hover:text-white transition">
                Lihat Layanan
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-6">
              <Image
                src="/images/hero2.png"
                alt="hero"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Layanan Kami
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          {[
            { title: "Fast Development", desc: "Proses cepat & efisien" },
            { title: "Clean Code", desc: "Struktur rapi & scalable" },
            { title: "Business Focus", desc: "Fokus ke hasil bisnis" },
          ].map((item, i) => (
            <div key={i} className="p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 PROCESS UPGRADE */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Cara Kami Bekerja
          </h2>

          <p className="text-gray-500 mb-16">
            Proses terstruktur untuk menghasilkan produk digital terbaik
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "Discovery",
                desc: "Memahami kebutuhan bisnis dan tujuan produk",
              },
              {
                title: "Design",
                desc: "Mendesain UI/UX modern dan intuitif",
              },
              {
                title: "Development",
                desc: "Membangun sistem dengan teknologi terbaik",
              },
              {
                title: "Launch",
                desc: "Deploy dan optimasi agar siap digunakan",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
              >
                {/* NUMBER */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {i + 1}
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-500 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold">
          Siap Bangun Produk Digital?
        </h2>

        <Link
          href="/contact"
          className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:scale-105 transition"
        >
          Mulai Sekarang
        </Link>
      </section>

    </main>
  );
}