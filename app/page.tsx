"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description:
      "Membangun website company profile, landing page, dashboard, dan sistem bisnis yang modern, cepat, dan profesional.",
  },
  {
    title: "Mobile App Development",
    description:
      "Mengembangkan aplikasi mobile yang rapi, stabil, dan nyaman digunakan untuk mendukung kebutuhan bisnis Anda.",
  },
  {
    title: "SaaS Solutions",
    description:
      "Menciptakan produk SaaS yang scalable, efisien, dan siap digunakan sebagai fondasi pertumbuhan bisnis digital.",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f7f4] text-[#111111]">
      {/* Background soft animated shapes */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#dfe7ff] blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[-80px] top-[180px] h-80 w-80 rounded-full bg-[#f1efe8] blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f7f4]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.2 }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-sm font-semibold text-white"
            >
              R
            </motion.div>

            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                Redira Technology
              </h1>
              <p className="text-sm text-black/50">
                Digital Solutions for Modern Business
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-black/70 transition hover:text-black"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm text-black/70 transition hover:text-black"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-black/70 transition hover:text-black"
            >
              About
            </a>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-black hover:text-white"
              >
                Contact
              </Link>
            </motion.div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-black/45"
            >
              Redefining digital presence
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            >
              Solusi digital elegan untuk perusahaan yang ingin tumbuh lebih
              modern.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-black/65"
            >
              Redira Technology membantu bisnis membangun website, aplikasi
              mobile, dan sistem SaaS yang profesional, fungsional, dan
              dirancang untuk memberikan kesan kuat di era digital.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="rounded-full bg-[#111111] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Konsultasi Sekarang
                </Link>
              </motion.div>

              <motion.a
                href="#services"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-black hover:text-white"
              >
                Lihat Layanan
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-[32px] border border-black/8 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="border-b border-black/8 pb-6">
                <p className="text-sm uppercase tracking-[0.18em] text-black/40">
                  What we do
                </p>
                <h3 className="mt-3 text-3xl font-semibold leading-snug">
                  Membangun identitas digital yang lebih kuat untuk bisnis Anda.
                </h3>
              </div>

              <div className="space-y-6 pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                >
                  <p className="text-sm text-black/40">Focus</p>
                  <p className="mt-2 text-lg font-medium">
                    Website, Mobile Application, SaaS Platform
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-sm text-black/40">Approach</p>
                  <p className="mt-2 text-lg font-medium">
                    Clean design, strategic development, business-oriented
                    execution
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                >
                  <p className="text-sm text-black/40">Commitment</p>
                  <p className="mt-2 text-lg font-medium">
                    Solusi yang tidak hanya menarik secara visual, tetapi juga
                    benar-benar berguna untuk operasional dan pertumbuhan
                    bisnis.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-black/5 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-3xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-black/45">
              Our Services
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Layanan teknologi untuk kebutuhan bisnis yang terus berkembang
            </h3>
            <p className="mt-6 text-lg leading-8 text-black/60">
              Kami menghadirkan layanan digital yang dirancang dengan pendekatan
              profesional, tampilan yang kuat, dan struktur yang siap digunakan
              dalam kebutuhan bisnis nyata.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-black/8 bg-[#faf9f6] p-8 transition hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-8 text-sm font-medium text-black/35">
                  0{index + 1}
                </div>
                <h4 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h4>
                <p className="mt-4 leading-8 text-black/60">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#f8f7f4] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-black/45">
                About Redira
              </p>
              <h3 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                Partner teknologi untuk membangun citra digital yang lebih
                profesional
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
            >
              <p className="text-lg leading-8 text-black/65">
                Di tengah perkembangan bisnis modern, kehadiran digital bukan
                lagi sekadar pelengkap. Website, aplikasi, dan sistem digital
                telah menjadi fondasi penting untuk membangun kepercayaan,
                efisiensi, dan daya saing perusahaan.
              </p>
              <p className="mt-6 text-lg leading-8 text-black/65">
                Redira Technology hadir untuk membantu perusahaan mewujudkan
                solusi digital yang tidak hanya terlihat baik, tetapi juga
                dirancang dengan struktur yang rapi, pengalaman pengguna yang
                nyaman, dan arah pengembangan yang jelas.
              </p>

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-black hover:text-white"
                >
                  Hubungi Kami
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#111111] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.22em] text-white/45"
          >
            Start your project
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Bangun solusi digital yang merepresentasikan kualitas bisnis Anda
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65"
          >
            Konsultasikan kebutuhan website, aplikasi mobile, atau SaaS Anda
            bersama Redira Technology dan wujudkan tampilan digital yang lebih
            kuat, modern, dan profesional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:opacity-90"
              >
                Konsultasi Sekarang
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}