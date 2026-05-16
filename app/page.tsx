import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  Gauge,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  MessagesSquare,
  MonitorSmartphone,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  Users,
  Workflow,
} from "lucide-react";

const whatsappLink =
  "https://wa.me/6281234567890?text=Halo%20Redira%2C%20saya%20ingin%20konsultasi%20pembuatan%20atau%20sewa%20aplikasi.";

const navItems = [
  { label: "Produk", href: "#solutions" },
  { label: "Layanan", href: "#services" },
  { label: "Harga", href: "#pricing" },
  { label: "Studi Kasus", href: "#portfolio" },
  { label: "Tentang Kami", href: "#process" },
  { label: "Kontak", href: "/contact" },
];

const heroTrust = [
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    description: "Fondasi sistem rapi",
  },
  {
    icon: Cloud,
    title: "Siap Digunakan",
    description: "Cepat, tanpa alur rumit",
  },
  {
    icon: Rocket,
    title: "Fleksibel & Skalabel",
    description: "Tumbuh mengikuti bisnis",
  },
];

const proofStats = [
  { value: "150+", label: "Rancangan aplikasi siap dikembangkan" },
  { value: "500+", label: "Alur bisnis dapat dipetakan" },
  { value: "98%", label: "Fokus pada pengalaman pengguna" },
  { value: "24/7", label: "Arah support & maintenance" },
];

const services = [
  {
    icon: MonitorSmartphone,
    label: "Website",
    title: "Website & Landing Page",
    description:
      "Tampilan premium untuk memperkenalkan brand, menjual layanan, dan mengubah pengunjung menjadi calon klien.",
    points: ["Company profile", "Landing page campaign", "Struktur SEO dasar"],
  },
  {
    icon: Smartphone,
    label: "Mobile",
    title: "Mobile App Development",
    description:
      "Aplikasi mobile dengan tampilan modern, flow yang jelas, dan siap terhubung dengan backend bisnis.",
    points: ["Android & iOS flow", "Onboarding pengguna", "Integrasi API"],
  },
  {
    icon: LayoutDashboard,
    label: "System",
    title: "Dashboard & Web App",
    description:
      "Sistem admin, CRM, inventory, booking, monitoring, payroll, dan dashboard operasional sesuai kebutuhan.",
    points: ["Role-based access", "Laporan bisnis", "Custom logic"],
  },
  {
    icon: Cloud,
    label: "SaaS",
    title: "Sewa Aplikasi / SaaS",
    description:
      "Solusi aplikasi siap pakai untuk bisnis yang ingin mulai cepat tanpa membangun semuanya dari nol.",
    points: ["Model berlangganan", "Konfigurasi cepat", "Maintenance praktis"],
  },
];

const outcomes = [
  {
    icon: Gauge,
    title: "Cepat terlihat profesional",
    description:
      "Struktur halaman, visual, dan CTA dibuat untuk langsung memberi kesan serius saat calon klien pertama kali membuka website.",
  },
  {
    icon: LockKeyhole,
    title: "Fondasi aman",
    description:
      "Desain sistem disiapkan dengan alur yang rapi, akses pengguna yang jelas, dan struktur data yang mudah dikembangkan.",
  },
  {
    icon: Workflow,
    title: "Alur bisnis ikut dipikirkan",
    description:
      "Redira tidak hanya membuat tampilan. Kami bantu menyusun alur kerja agar aplikasi benar-benar membantu operasional.",
  },
];

const packages = [
  {
    title: "Custom Build",
    subtitle: "Untuk bisnis yang butuh sistem khusus dari nol.",
    highlight: "Paling fleksibel",
    icon: Code2,
    features: [
      "Discovery kebutuhan bisnis",
      "UI/UX sesuai identitas brand",
      "Frontend, backend, database, dan API",
      "Deploy, dokumentasi, dan handover",
    ],
  },
  {
    title: "Rental System",
    subtitle: "Untuk bisnis yang ingin cepat pakai dengan biaya awal lebih ringan.",
    highlight: "Paling cepat launch",
    icon: Store,
    features: [
      "Fondasi sistem siap konfigurasi",
      "Biaya awal lebih hemat",
      "Maintenance dan update lebih praktis",
      "Cocok untuk validasi produk awal",
    ],
  },
];

const pricing = [
  {
    name: "Starter",
    description: "Untuk bisnis yang butuh halaman profesional sebagai pintu masuk digital.",
    price: "Mulai Konsultasi",
    features: ["Landing page premium", "Copywriting dasar", "CTA WhatsApp", "Responsive mobile"],
  },
  {
    name: "Business",
    description: "Untuk bisnis yang butuh website plus dashboard operasional.",
    price: "Scope Project",
    features: ["Website multi halaman", "Admin dashboard", "Database & API", "Basic reporting"],
    featured: true,
  },
  {
    name: "Platform",
    description: "Untuk bisnis yang ingin membangun atau menyewa aplikasi berskala SaaS.",
    price: "Custom",
    features: ["Multi-role system", "Subscription-ready", "Integrasi pihak ketiga", "Maintenance plan"],
  },
];

const portfolio = [
  {
    title: "Booking Suite",
    tag: "Reservasi, jadwal, staff",
    color: "bg-[#ff5a3d]",
    metrics: ["312 booking", "24 cabang"],
  },
  {
    title: "Commerce Control",
    tag: "Order, stok, pembayaran",
    color: "bg-[#0f1f3d]",
    metrics: ["1.284 order", "98% paid"],
  },
  {
    title: "SaaS Tenant Hub",
    tag: "Tenant, billing, analytics",
    color: "bg-emerald-500",
    metrics: ["76 tenant", "3 plan"],
  },
];

const process = [
  {
    title: "Konsultasi",
    description:
      "Kami gali tujuan bisnis, target user, referensi visual, batasan budget, dan fitur paling penting.",
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
];

const stack = [
  "Next.js",
  "React",
  "API Integration",
  "Database",
  "Cloud Deploy",
  "UI/UX System",
  "Automation",
  "Maintenance",
];

const faqs = [
  {
    question: "Apakah bisa mulai dari landing page dulu?",
    answer:
      "Bisa. Banyak bisnis mulai dari landing page premium untuk validasi pasar, lalu naik ke dashboard atau aplikasi ketika kebutuhan sudah jelas.",
  },
  {
    question: "Custom build dan rental system bedanya apa?",
    answer:
      "Custom build dibuat khusus mengikuti proses bisnis Anda. Rental system memakai fondasi aplikasi yang sudah siap sehingga lebih cepat untuk digunakan.",
  },
  {
    question: "Kalau belum punya detail fitur, bisa konsultasi?",
    answer:
      "Bisa. Cukup ceritakan masalah bisnis, target pengguna, dan contoh produk yang Anda suka. Redira bantu susun scope awal yang masuk akal.",
  },
  {
    question: "Apakah setelah launch bisa maintenance?",
    answer:
      "Bisa. Redira dapat membantu monitoring, perbaikan bug, update konten, peningkatan fitur, dan optimasi performa setelah produk rilis.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ff5a3d]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-[#101725] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Redira">
      <Image
        src="/images/logo_redira.png"
        alt="Logo Redira"
        width={168}
        height={52}
        priority
        className="h-10 w-auto object-contain md:h-12"
      />
    </Link>
  );
}

function FloatingCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/70 bg-white/88 p-4 shadow-[0_24px_80px_rgba(16,23,37,0.12)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function HeroShowcase() {
  return (
    <div className="relative mx-auto min-h-[600px] w-full max-w-[760px] overflow-visible sm:min-h-[660px] lg:min-h-[740px]">
      <div className="absolute left-1/2 top-[50%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a3d]/12 blur-3xl" />
      <div className="absolute bottom-6 left-1/2 h-[360px] w-[700px] -translate-x-1/2 rounded-[999px] bg-[#ffb59e]/25 blur-3xl" />

 <div className="pointer-events-none absolute bottom-0 left-[50%] z-20 overflow-visible">
  <Image
    src="/images/photo1.jpg"
    alt="Pengguna Redira memantau performa bisnis melalui smartphone"
    width={1100}
    height={1400}
    priority
    sizes="(max-width: 1024px) 92vw, 760px"
    className="w-[560px] max-w-none -translate-x-1/2 -translate-y-[45px] object-contain object-bottom drop-shadow-[0_38px_90px_rgba(15,23,42,0.18)] sm:w-[620px] sm:-translate-y-[55px] md:w-[700px] md:-translate-y-[75px] lg:w-[760px] lg:-translate-x-[33%] lg:-translate-y-[250px]"
  />
</div>

      <FloatingCard className="absolute left-3 top-16 z-30 hidden w-[220px] sm:block">
        <div className="grid size-12 place-items-center rounded-2xl bg-[#ff5a3d] text-white">
          <Blocks size={23} />
        </div>
        <h3 className="mt-4 text-base font-black text-[#101725]">Sewa Aplikasi</h3>
        <p className="mt-2 text-xs leading-5 text-slate-500">
          Sistem siap pakai untuk operasional bisnis yang ingin bergerak cepat.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-slate-100 text-[10px] font-black text-slate-700">
            UI
          </span>
          <span className="grid size-7 place-items-center rounded-full bg-slate-100 text-[10px] font-black text-slate-700">
            API
          </span>
          <span className="grid size-7 place-items-center rounded-full bg-slate-100 text-[10px] font-black text-slate-700">
            DB
          </span>
          <span className="rounded-full bg-[#fff0eb] px-2.5 py-1 text-xs font-black text-[#ff5a3d]">
            +2.4K
          </span>
        </div>
      </FloatingCard>

      <FloatingCard className="absolute left-0 top-[43%] z-30 hidden w-[260px] items-center gap-3 p-3 md:flex">
        <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#fff0eb] text-[#ff5a3d]">
          <LockKeyhole size={18} />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-black text-[#101725]">Keamanan Data</p>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-600">
              Aktif
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500">Akses role • Flow terkontrol</p>
        </div>
      </FloatingCard>

      <FloatingCard className="absolute right-0 top-6 z-40 w-[218px] !p-3 sm:right-2 md:w-[238px] lg:-right-1 lg:top-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-black text-[#101725]">Ringkasan Bisnis</p>
            <p className="mt-3 text-[11px] text-slate-500">Pendapatan</p>
            <p className="mt-0.5 text-xl font-black text-[#101725]">Rp 182.6 jt</p>
          </div>
          <span className="rounded-full border border-slate-100 bg-white px-2.5 py-1 text-[9px] font-bold text-slate-500">
            30 Hari
          </span>
        </div>
        <div className="mt-1.5 inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-600">
          ↑ 18.7%
        </div>
        <div className="mt-4 flex h-14 items-end gap-1">
          {[28, 36, 31, 44, 49, 42, 57, 70, 66, 82].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="flex-1 rounded-t-full bg-[#ff5a3d]/25"
              style={{ height: `${height}%` }}
            >
              <span className="block h-full rounded-t-full bg-[#ff5a3d]/80" />
            </span>
          ))}
        </div>
      </FloatingCard>

      <FloatingCard className="absolute right-1 top-[38%] z-30 hidden w-[240px] sm:block">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-black text-[#101725]">Pengguna Aktif</p>
            <p className="mt-3 text-2xl font-black text-[#101725]">24.860</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-black text-emerald-600">
            ↑ 12.5%
          </span>
        </div>
        <div className="mt-5 flex h-12 items-end gap-2">
          {[20, 42, 55, 34, 50, 63, 46, 70].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="w-full rounded-t-full bg-[#ff5a3d]/25"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </FloatingCard>

      <FloatingCard className="absolute bottom-24 left-7 z-30 hidden w-[235px] bg-[#ff5a3d] text-white shadow-[0_30px_90px_rgba(255,90,61,0.28)] lg:block">
        <div className="grid size-12 place-items-center rounded-2xl bg-white/18">
          <Code2 size={22} />
        </div>
        <h3 className="mt-5 text-lg font-black">Kembangkan Aplikasi</h3>
        <p className="mt-2 text-xs leading-5 text-white/80">
          Solusi custom sesuai proses, tim, dan kebutuhan unik bisnis.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-xs font-black !text-[#ff5a3d]"
        >
          Konsultasi Gratis
          <ArrowRight size={14} />
        </Link>
      </FloatingCard>

      <FloatingCard className="absolute bottom-18 right-3 z-30 hidden w-[270px] md:block">
        <p className="text-xs font-black text-[#101725]">Tugas Tim</p>
        <div className="mt-4 space-y-3">
          {[
            ["Perancangan Fitur", "Selesai", "bg-emerald-50 text-emerald-600"],
            ["Pengembangan", "Berjalan", "bg-[#fff0eb] text-[#ff5a3d]"],
            ["Pengujian", "Menunggu", "bg-indigo-50 text-indigo-600"],
          ].map(([title, status, color]) => (
            <div key={title} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-xl bg-slate-50 text-[#ff5a3d]">
                  <ClipboardCheck size={15} />
                </span>
                <span className="text-xs font-semibold text-slate-600">{title}</span>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${color}`}>
                {status}
              </span>
            </div>
          ))}
        </div>
      </FloatingCard>

      <div className="absolute inset-x-4 bottom-0 z-30 grid grid-cols-2 gap-3 rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-[0_26px_90px_rgba(16,23,37,0.12)] backdrop-blur-xl md:grid-cols-4 md:p-5">
        {proofStats.map((item) => (
          <div key={item.value} className="rounded-3xl bg-white/70 p-4 text-center">
            <p className="text-2xl font-black text-[#ff5a3d] md:text-3xl">{item.value}</p>
            <p className="mt-1 text-[11px] leading-5 text-slate-500 md:text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductMockup({ item }: { item: (typeof portfolio)[number] }) {
  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h3 className="font-black text-[#101725]">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{item.tag}</p>
        </div>
        <span className={`size-3 rounded-full ${item.color}`} />
      </div>

      <div className="mt-4 aspect-[4/3] rounded-[1.5rem] bg-[#101725] p-4 text-white">
        <div className="grid h-full grid-cols-[0.34fr_1fr] gap-3">
          <div className="space-y-2 rounded-2xl bg-white/10 p-3">
            <div className="h-2 w-10 rounded-full bg-white/70" />
            <div className="h-2 w-7 rounded-full bg-white/30" />
            <div className="h-2 w-9 rounded-full bg-white/30" />
            <div className="h-2 w-6 rounded-full bg-white/30" />
          </div>
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              {item.metrics.map((metric) => (
                <div key={metric} className="rounded-2xl bg-white p-3 text-[#101725]">
                  <p className="text-xs text-slate-500">Metric</p>
                  <p className="mt-1 text-sm font-black">{metric}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-white p-3">
              <div className="mb-4 flex items-end gap-1.5">
                <span className="h-9 w-5 rounded-t-full bg-[#ff5a3d]" />
                <span className="h-14 w-5 rounded-t-full bg-[#ffb09e]" />
                <span className="h-8 w-5 rounded-t-full bg-emerald-400" />
                <span className="h-12 w-5 rounded-t-full bg-[#ff5a3d]/70" />
                <span className="h-10 w-5 rounded-t-full bg-slate-300" />
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className={`h-2 w-11/12 rounded-full ${item.color}`} />
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className={`h-2 w-8/12 rounded-full ${item.color}`} />
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className={`h-2 w-10/12 rounded-full ${item.color}`} />
                </div>
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
    <main className="min-h-screen overflow-hidden bg-[#fffaf5] text-[#101725]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#101725]/5 bg-[#fffaf5]/88 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 text-sm font-bold text-[#101725]/72 lg:flex">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link key={item.href} href={item.href} className="transition hover:text-[#ff5a3d]">
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href} className="transition hover:text-[#ff5a3d]">
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden items-center gap-1.5 rounded-2xl px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-white md:inline-flex"
              aria-label="Pilih bahasa"
            >
              <Globe2 size={17} />
              ID
            </button>

            <Link
              href="/contact"
              aria-label="Konsultasi gratis dengan Redira"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ff5a3d] px-5 py-3 text-sm font-black !text-white shadow-[0_18px_45px_rgba(255,90,61,0.26)] transition hover:-translate-y-0.5 hover:bg-[#ef482b]"
            >
              Konsultasi Sekarang
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <section className="relative isolate bg-[radial-gradient(circle_at_77%_34%,rgba(255,90,61,0.16),transparent_36%),linear-gradient(180deg,#fffaf5_0%,#fff7f1_100%)] px-5 pb-16 pt-28 md:px-8 lg:pb-20 lg:pt-32">
        <div className="absolute left-[-12rem] top-32 -z-10 h-72 w-72 rounded-full bg-[#ff5a3d]/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-0 -z-10 h-96 w-96 rounded-full bg-[#ffb59e]/22 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a3d]/10 bg-white/76 px-4 py-2 text-sm font-bold text-slate-600 shadow-sm backdrop-blur">
              <span className="size-2 rounded-full bg-[#ff5a3d]" />
              Platform Aplikasi • Sewa & Kembangkan
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.03] tracking-[-0.05em] text-[#101725] md:text-7xl">
              Bangun dan Sewa Aplikasi untuk{" "}
              <span className="text-[#ff5a3d]">Bisnismu, Lebih Cepat.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Redira membantu bisnis membuat aplikasi custom atau menyewa aplikasi
              siap pakai yang aman, fleksibel, dan siap berkembang bersama bisnis Anda.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ff5a3d] px-7 py-4 text-sm font-black !text-white shadow-[0_20px_55px_rgba(255,90,61,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ef482b]"
              >
                Mulai Sekarang
                <ArrowRight size={18} />
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#ff5a3d]/20 bg-white px-7 py-4 text-sm font-black text-[#ff5a3d] transition hover:border-[#ff5a3d] hover:bg-[#fff0eb]"
              >
                <PlayCircle size={18} />
                Lihat Demo
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroTrust.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#fff0eb] text-[#ff5a3d]">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-sm font-black text-[#101725]">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.description}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-16">
              <p className="text-sm font-bold text-slate-500">
                Dipercaya oleh bisnis hebat di Indonesia
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4 text-xl font-black text-slate-400">
                <span>arkin</span>
                <span>wavee</span>
                <span>Bistroku</span>
                <span>KlikLogistik</span>
                <span>sekolahkita</span>
              </div>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </section>

      <section id="services" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Layanan Redira"
            title="Solusi digital yang terasa premium dari tampilan sampai alur kerjanya."
            description="Redira menggabungkan desain, development, dan pemahaman proses bisnis supaya produk Anda tidak hanya terlihat bagus, tetapi juga benar-benar membantu operasional."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#ff5a3d]/25 hover:shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
                >
                  <div className="grid size-13 place-items-center rounded-2xl bg-[#fff0eb] text-[#ff5a3d]">
                    <Icon size={25} />
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#ff5a3d]">
                    {service.label}
                  </p>
                  <h3 className="mt-3 text-xl font-black text-[#101725]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#101725] text-white">
                          <Check size={13} />
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Kenapa Redira"
            title="Bukan hanya desain cantik, sistemnya juga harus masuk akal."
            description="Website dan aplikasi bisnis harus punya arah yang jelas: siapa penggunanya, apa masalahnya, bagaimana alurnya, dan fitur mana yang paling penting untuk dirilis lebih dulu."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-[#fffaf5] p-5"
                >
                  <Icon className="text-[#ff5a3d]" size={24} />
                  <h3 className="mt-5 font-black text-[#101725]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solutions" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pilihan Solusi"
            title="Bangun dari nol atau mulai dari sistem siap pakai."
            description="Tidak semua bisnis perlu jalur yang sama. Redira bantu memilih pendekatan yang paling efisien sesuai target, timeline, dan budget."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-2xl bg-[#101725] px-3 py-2 text-sm font-black text-white">
                        <Icon size={18} />
                        {item.highlight}
                      </div>
                      <h3 className="mt-6 text-3xl font-black text-[#101725]">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">{item.subtitle}</p>
                    </div>
                    <div className="grid size-16 shrink-0 place-items-center rounded-3xl bg-[#fff0eb] text-[#ff5a3d]">
                      <Icon size={30} />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {item.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-3 rounded-2xl border border-slate-200 bg-[#fffaf5] p-4"
                      >
                        <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} />
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

      <section id="pricing" className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Paket Awal"
            title="Mulai dari kebutuhan paling penting, lalu scale saat bisnis siap."
            description="Paket dibuat sebagai arah awal. Detail harga final tetap menyesuaikan scope, timeline, fitur, dan kebutuhan integrasi."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {pricing.map((item) => (
              <article
                key={item.name}
                className={`rounded-[2rem] border p-6 shadow-sm ${
                  item.featured
                    ? "border-[#ff5a3d]/30 bg-[#101725] text-white shadow-[0_28px_100px_rgba(16,23,37,0.18)]"
                    : "border-slate-200 bg-[#fffaf5] text-[#101725]"
                }`}
              >
                <p className={`text-sm font-black ${item.featured ? "text-[#ffb09e]" : "text-[#ff5a3d]"}`}>
                  {item.name}
                </p>
                <h3 className="mt-4 text-3xl font-black">{item.price}</h3>
                <p className={`mt-4 text-sm leading-7 ${item.featured ? "text-white/70" : "text-slate-600"}`}>
                  {item.description}
                </p>
                <div className="mt-7 space-y-3">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm">
                      <span
                        className={`grid size-5 place-items-center rounded-full ${
                          item.featured ? "bg-white text-[#101725]" : "bg-[#101725] text-white"
                        }`}
                      >
                        <Check size={13} />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#101725] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ff8a72]">
                Studi Kasus
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Website yang menjual, sistem yang membantu kerja harian.
              </h2>
            </div>
            <p className="text-base leading-8 text-white/68 md:text-lg">
              Contoh arah solusi yang bisa dibangun Redira: booking, commerce,
              tenant SaaS, CRM, internal dashboard, sampai portal pelanggan.
              Setiap produk dapat disesuaikan dengan proses bisnis Anda.
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

          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.title} className="rounded-[2rem] border border-slate-200 bg-white p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#101725] text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-7 text-xl font-black text-[#101725]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Tech & Quality"
            title="Dibuat modern, mudah dirawat, dan siap berkembang."
            description="Redira menyiapkan fondasi teknis untuk kebutuhan saat ini dan ruang tumbuh untuk fitur berikutnya: performa, keamanan dasar, struktur data, dan integrasi."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#fffaf5] p-4"
              >
                <span className="grid size-10 place-items-center rounded-2xl bg-white text-[#ff5a3d] shadow-sm">
                  <Blocks size={18} />
                </span>
                <span className="font-black text-[#101725]">{item}</span>
              </div>
            ))}
            <div className="rounded-[2rem] border border-slate-200 bg-[#101725] p-6 text-white sm:col-span-2">
              <div className="flex items-center gap-3">
                <Database className="text-[#ff8a72]" size={24} />
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
            description="Jawaban singkat untuk membantu Anda menentukan langkah pertama bersama Redira."
          />

          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[2rem] border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-black text-[#101725]">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.5rem] bg-[#101725] p-8 text-white shadow-[0_30px_120px_rgba(16,23,37,0.24)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-[#ffb09e]">
              <MessagesSquare size={18} />
              Siap diskusi project?
            </div>
            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              Ceritakan ide Anda. Redira bantu ubah menjadi arah produk yang jelas.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Kirim kebutuhan singkat, target launch, dan referensi yang Anda suka.
              Kami bantu sarankan jalur custom build atau rental system yang paling masuk akal.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ff5a3d] px-6 py-4 text-sm font-black !text-white transition hover:bg-[#ef482b]"
            >
              Isi Form Konsultasi
              <ArrowRight size={18} />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 text-sm font-black text-white transition hover:bg-white/10"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}