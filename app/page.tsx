import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Check,
  Cloud,
  Code2,
  Database,
  Gauge,
  LayoutDashboard,
  MessagesSquare,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";

const whatsappLink =
  "https://wa.me/6281234567890?text=Halo%20Redira%20Technology%2C%20saya%20ingin%20konsultasi%20project%20digital.";

const navItems = [
  { label: "Layanan", href: "#services" },
  { label: "Solusi", href: "#solutions" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proses", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const proofStats = [
  { value: "Web", label: "company profile, landing page, portal" },
  { value: "Mobile", label: "Android, iOS, dan integrasi API" },
  { value: "SaaS", label: "rental system dan platform siap scale" },
  { value: "Ops", label: "dashboard, CRM, dan otomasi kerja" },
];

const services = [
  {
    icon: MonitorSmartphone,
    label: "Web",
    title: "Website & Landing Page",
    description:
      "Tampilan premium untuk memperkenalkan brand, menjual layanan, dan mengubah traffic menjadi inquiry.",
    points: ["Company profile", "Landing page campaign", "SEO ready structure"],
    accent: "bg-cyan-50 text-cyan-700 border-cyan-100",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    title: "Mobile App Development",
    description:
      "Aplikasi mobile yang rapi dari sisi experience, integrasi backend, dan alur operasional bisnis.",
    points: ["Android & iOS flow", "User onboarding", "Push-ready architecture"],
    accent: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    icon: LayoutDashboard,
    label: "System",
    title: "Dashboard & Web App",
    description:
      "Sistem admin, CRM, inventory, booking, monitoring, dan workflow internal sesuai kebutuhan Anda.",
    points: ["Role-based access", "Reporting dashboard", "Custom business logic"],
    accent: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    icon: Cloud,
    label: "SaaS",
    title: "Rental & SaaS Platform",
    description:
      "Solusi siap pakai untuk launch lebih cepat, biaya lebih ringan, dan mudah dikembangkan saat bisnis tumbuh.",
    points: ["Subscription model", "Multi-tenant ready", "Support & maintenance"],
    accent: "bg-rose-50 text-rose-700 border-rose-100",
  },
];

const outcomes = [
  {
    icon: Gauge,
    title: "Cepat terasa profesional",
    description:
      "Struktur halaman, visual, dan CTA dibuat untuk langsung terlihat kredibel saat calon klien pertama kali membuka website.",
  },
  {
    icon: ShieldCheck,
    title: "Fondasi teknis aman",
    description:
      "Komponen, performa, aksesibilitas, dan struktur konten disiapkan agar mudah dirawat dan dikembangkan.",
  },
  {
    icon: Workflow,
    title: "Alur bisnis ikut dipikirkan",
    description:
      "Bukan hanya tampilan. Redira membantu merapikan user journey, proses operasional, dan kebutuhan fitur inti.",
  },
];

const packages = [
  {
    title: "Custom Build",
    subtitle: "Untuk bisnis yang butuh sistem unik dari nol.",
    highlight: "Paling fleksibel",
    icon: Code2,
    features: [
      "Discovery dan perancangan flow",
      "UI/UX sesuai identitas bisnis",
      "Backend, database, dan integrasi API",
      "Deploy, dokumentasi, dan handover",
    ],
  },
  {
    title: "Rental System",
    subtitle: "Untuk bisnis yang ingin cepat pakai tanpa build panjang.",
    highlight: "Paling cepat launch",
    icon: Store,
    features: [
      "Template sistem siap konfigurasi",
      "Biaya awal lebih ringan",
      "Maintenance dan update lebih praktis",
      "Cocok untuk validasi produk awal",
    ],
  },
];

const portfolio = [
  {
    title: "Commerce Control",
    tag: "Order, inventory, payment",
    color: "bg-cyan-500",
    bars: ["w-11/12", "w-8/12", "w-10/12"],
    metrics: ["1.284 order", "98% paid"],
  },
  {
    title: "Booking Suite",
    tag: "Schedule, staff, reminder",
    color: "bg-amber-500",
    bars: ["w-7/12", "w-10/12", "w-9/12"],
    metrics: ["312 booking", "24 branch"],
  },
  {
    title: "SaaS Tenant Hub",
    tag: "Users, billing, analytics",
    color: "bg-emerald-500",
    bars: ["w-10/12", "w-6/12", "w-11/12"],
    metrics: ["76 tenant", "3 plan"],
  },
];

const process = [
  {
    title: "Konsultasi",
    description:
      "Kami gali tujuan bisnis, target user, referensi, batasan budget, dan fitur yang paling penting.",
  },
  {
    title: "Blueprint",
    description:
      "Flow, struktur halaman, modul fitur, dan prioritas MVP dibuat jelas sebelum development dimulai.",
  },
  {
    title: "Design & Build",
    description:
      "UI, frontend, backend, dan integrasi dikerjakan bertahap dengan review agar arah project tetap tepat.",
  },
  {
    title: "Launch",
    description:
      "Testing, deployment, performance check, dan handover dilakukan supaya produk siap dipakai.",
  },
  {
    title: "Scale",
    description:
      "Setelah rilis, fitur bisa ditambah, data dibaca, dan sistem ditingkatkan mengikuti pertumbuhan bisnis.",
  },
];

const stack = [
  "Next.js",
  "React",
  "Node.js",
  "API Integration",
  "Database",
  "Cloud Deploy",
  "UI/UX System",
  "Automation",
];

const faqs = [
  {
    question: "Apakah bisa mulai dari landing page dulu?",
    answer:
      "Bisa. Banyak bisnis mulai dari landing page premium untuk validasi market, lalu naik ke dashboard, aplikasi mobile, atau SaaS ketika kebutuhan sudah jelas.",
  },
  {
    question: "Custom build dan rental system bedanya apa?",
    answer:
      "Custom build dibuat sesuai kebutuhan unik bisnis Anda. Rental system memakai fondasi aplikasi yang sudah siap sehingga lebih cepat dan lebih ringan untuk launch awal.",
  },
  {
    question: "Kalau belum punya detail fitur, bisa konsultasi?",
    answer:
      "Bisa. Cukup ceritakan masalah bisnis, target user, dan contoh produk yang Anda suka. Dari situ Redira bantu susun scope yang masuk akal.",
  },
  {
    question: "Apakah setelah launch bisa maintenance?",
    answer:
      "Bisa. Redira dapat membantu monitoring, perbaikan bug, update konten, peningkatan fitur, dan optimasi performa setelah produk rilis.",
  },
];

function RediraMark() {
  return (
    <span className="grid size-10 place-items-center rounded-lg border border-white/15 bg-white text-[#0b1019]">
      <span className="text-base font-black">R</span>
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase text-cyan-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#10131f] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function ProductMockup({
  item,
}: {
  item: (typeof portfolio)[number];
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h3 className="font-bold text-[#10131f]">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{item.tag}</p>
        </div>
        <span className={`size-3 rounded-full ${item.color}`} />
      </div>

      <div className="mt-4 aspect-[4/3] rounded-lg bg-slate-950 p-4 text-white">
        <div className="grid h-full grid-cols-[0.34fr_1fr] gap-3">
          <div className="space-y-2 rounded-md bg-white/10 p-3">
            <div className="h-2 w-10 rounded-sm bg-white/70" />
            <div className="h-2 w-7 rounded-sm bg-white/30" />
            <div className="h-2 w-9 rounded-sm bg-white/30" />
            <div className="h-2 w-6 rounded-sm bg-white/30" />
          </div>
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              {item.metrics.map((metric) => (
                <div key={metric} className="rounded-md bg-white p-3 text-[#10131f]">
                  <p className="text-xs text-slate-500">Metric</p>
                  <p className="mt-1 text-sm font-bold">{metric}</p>
                </div>
              ))}
            </div>
            <div className="rounded-md bg-white p-3">
              <div className="mb-3 flex items-end gap-1.5">
                <span className="h-9 w-5 rounded-sm bg-cyan-500" />
                <span className="h-14 w-5 rounded-sm bg-amber-500" />
                <span className="h-8 w-5 rounded-sm bg-emerald-500" />
                <span className="h-12 w-5 rounded-sm bg-rose-500" />
                <span className="h-10 w-5 rounded-sm bg-slate-300" />
              </div>
              <div className="space-y-2">
                {item.bars.map((bar) => (
                  <div key={bar} className="h-2 rounded-sm bg-slate-100">
                    <div className={`h-2 rounded-sm ${item.color} ${bar}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#f6f4ef] text-[#10131f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071018]/82 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Redira Technology">
            <RediraMark />
            <span className="font-black">Redira Technology</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/72 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <Link
            href="/contact"
            aria-label="Konsultasi dengan Redira Technology"
            className="inline-flex size-10 items-center justify-center rounded-lg bg-white text-sm font-bold !text-[#10131f] transition hover:bg-cyan-100 sm:size-auto sm:px-4 sm:py-2.5"
          >
            <MessagesSquare aria-hidden="true" className="sm:hidden" size={18} />
            <span className="hidden sm:inline">Konsultasi</span>
            <ArrowRight aria-hidden="true" className="hidden sm:block" size={16} />
          </Link>
        </div>
      </header>

      <section className="relative isolate flex min-h-[76svh] items-end overflow-hidden bg-[#071018] pt-28 text-white md:min-h-[78svh]">
        <Image
          src="/images/hero2.png"
          alt="Tim digital sedang menyusun papan kerja produk aplikasi"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_42%] opacity-60 mix-blend-screen"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,16,24,0.97)_0%,rgba(7,16,24,0.86)_46%,rgba(7,16,24,0.42)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,rgba(7,16,24,0.95)_0%,rgba(7,16,24,0)_100%)]" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-18">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/82 backdrop-blur">
              <Sparkles aria-hidden="true" size={16} />
              Digital product partner for modern business
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] md:text-7xl">
              Redira Technology
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-white md:text-2xl md:leading-10">
              Partner pembuatan website, mobile app, dashboard, dan SaaS yang
              tampil premium, mudah dipakai, dan siap berkembang.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Kami bantu bisnis mengubah ide digital menjadi produk yang jelas:
              dari landing page untuk validasi, sistem internal untuk operasi,
              sampai platform SaaS yang bisa disewakan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-black !text-[#071018] transition hover:bg-cyan-300"
              >
                Mulai Konsultasi
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Lihat Contoh Solusi
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#071018] text-white">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-4 md:grid-cols-4 md:px-8">
          {proofStats.map((item) => (
            <div key={item.value} className="py-5 md:px-5">
              <p className="text-2xl font-black text-cyan-300">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Layanan Redira"
            title="Semua yang dibutuhkan bisnis untuk tampil digital dengan serius."
            description="Redira menggabungkan desain, development, dan pemahaman proses bisnis supaya produk Anda tidak hanya cantik, tetapi juga benar-benar bekerja."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >
                  <div
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-bold ${service.accent}`}
                  >
                    <Icon aria-hidden="true" size={18} />
                    {service.label}
                  </div>

                  <h3 className="mt-6 text-xl font-black">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className="grid size-5 shrink-0 place-items-center rounded-md bg-slate-950 text-white">
                          <Check aria-hidden="true" size={14} />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">
              Kenapa Redira
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Landing page terlihat bagus, sistemnya juga harus masuk akal.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Desain yang cantik hanya separuh cerita. Kami bantu menyusun
              halaman, fitur, alur, dan prioritas development agar produk lebih
              mudah dijual, dipakai, dan dikembangkan.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {outcomes.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="rounded-lg border border-slate-200 p-4">
                    <Icon aria-hidden="true" className="text-cyan-700" size={22} />
                    <h3 className="mt-4 font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-slate-200 bg-[#f6f4ef]">
            <Image
              src="/images/hero.png"
              alt="Ilustrasi tim produk digital mengelola aplikasi"
              width={400}
              height={334}
              className="absolute bottom-6 right-4 w-[58%] max-w-sm drop-shadow-2xl"
            />
            <div className="absolute left-6 top-6 w-[72%] rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm text-slate-500">Project health</p>
                  <p className="mt-1 text-2xl font-black">Ready to launch</p>
                </div>
                <BadgeCheck aria-hidden="true" className="text-emerald-600" size={34} />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-md bg-cyan-50 p-3">
                  <p className="text-xs text-cyan-700">UX</p>
                  <p className="mt-1 font-black">92%</p>
                </div>
                <div className="rounded-md bg-amber-50 p-3">
                  <p className="text-xs text-amber-700">Scope</p>
                  <p className="mt-1 font-black">MVP</p>
                </div>
                <div className="rounded-md bg-emerald-50 p-3">
                  <p className="text-xs text-emerald-700">Build</p>
                  <p className="mt-1 font-black">Fast</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-2 rounded-sm bg-slate-100">
                  <div className="h-2 w-10/12 rounded-sm bg-cyan-500" />
                </div>
                <div className="h-2 rounded-sm bg-slate-100">
                  <div className="h-2 w-8/12 rounded-sm bg-amber-500" />
                </div>
                <div className="h-2 rounded-sm bg-slate-100">
                  <div className="h-2 w-11/12 rounded-sm bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pilihan Solusi"
            title="Bisa bangun dari nol, bisa juga mulai dari sistem siap pakai."
            description="Tidak semua bisnis perlu jalur yang sama. Redira bantu memilih pendekatan yang paling efisien untuk target, timeline, dan budget Anda."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-lg bg-[#10131f] px-3 py-2 text-sm font-bold text-white">
                        <Icon aria-hidden="true" size={18} />
                        {item.highlight}
                      </div>
                      <h3 className="mt-6 text-3xl font-black">{item.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{item.subtitle}</p>
                    </div>
                    <div className="grid size-16 shrink-0 place-items-center rounded-lg bg-[#f6f4ef] text-cyan-700">
                      <Icon aria-hidden="true" size={30} />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex gap-3 rounded-lg border border-slate-200 p-4">
                        <Check aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                        <p className="text-sm leading-6 text-slate-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#10131f] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-300">
                Product Showcase
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                Website yang menjual, sistem yang membantu kerja harian.
              </h2>
            </div>
            <p className="text-base leading-8 text-white/68 md:text-lg">
              Contoh arah solusi yang bisa dibangun Redira: commerce, booking,
              tenant SaaS, CRM, internal dashboard, sampai portal pelanggan.
              Setiap produk bisa disesuaikan dengan proses bisnis Anda.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {portfolio.map((item) => (
              <ProductMockup key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Cara Kerja"
            title="Proses dibuat jelas supaya project tidak berjalan kabur."
            description="Dari konsultasi sampai launch, setiap fase punya output yang bisa dilihat dan diputuskan bersama."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {process.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid size-10 place-items-center rounded-lg bg-[#10131f] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Rocket aria-hidden="true" className="text-cyan-700" size={21} />
                </div>
                <h3 className="mt-6 font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">
              Tech & Quality
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Dibuat modern, mudah dirawat, dan siap scale.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Redira menyiapkan fondasi teknis untuk kebutuhan saat ini dan
              ruang tumbuh untuk fitur berikutnya: performance, keamanan dasar,
              struktur data, dan integrasi.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-[#f6f4ef] p-4">
                <span className="grid size-9 place-items-center rounded-lg bg-white text-cyan-700 shadow-sm">
                  <Blocks aria-hidden="true" size={18} />
                </span>
                <span className="font-bold">{item}</span>
              </div>
            ))}
            <div className="rounded-lg border border-slate-200 bg-[#10131f] p-5 text-white sm:col-span-2">
              <div className="flex items-center gap-3">
                <Database aria-hidden="true" className="text-cyan-300" size={24} />
                <p className="font-black">Architecture first</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Scope kecil tetap dibuat rapi, agar saat bisnis berkembang Anda
                tidak perlu bongkar ulang semuanya dari awal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang biasanya muncul sebelum mulai."
            description="Jawaban singkat untuk membantu Anda menentukan langkah pertama bersama Redira Technology."
          />

          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-black">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10131f] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-cyan-200">
              <MessagesSquare aria-hidden="true" size={18} />
              Siap diskusi project?
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              Ceritakan ide Anda. Redira bantu ubah menjadi arah produk yang jelas.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Kirim kebutuhan singkat, target launch, dan referensi yang Anda
              suka. Kami bantu sarankan jalur custom build atau rental system
              yang paling masuk akal.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-black !text-[#071018] transition hover:bg-cyan-300"
            >
              Isi Form Konsultasi
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
