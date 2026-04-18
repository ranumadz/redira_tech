import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-80px] top-[-100px] h-[240px] w-[240px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute right-[-80px] bottom-[-120px] h-[260px] w-[260px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-900/30" />
              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Redira Technology
                </h3>
                <p className="text-sm text-white/55">
                  Digital Product & Software Partner
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Kami bantu bisnis berkembang lewat website, aplikasi mobile,
              dashboard, dan solusi SaaS yang tampil modern, proper, dan siap
              dipakai.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Navigasi
            </h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <a href="/#services" className="transition hover:text-white">
                Services
              </a>
              <a href="/#packages" className="transition hover:text-white">
                Packages
              </a>
              <a href="/#portfolio" className="transition hover:text-white">
                Portfolio
              </a>
              <a href="/#process" className="transition hover:text-white">
                Process
              </a>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Layanan
            </h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <p>Website Development</p>
              <p>Mobile App Development</p>
              <p>Web App & Dashboard</p>
              <p>SaaS Development</p>
              <p>UI/UX Improvement</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Kontak
            </h4>

            <div className="mt-5 space-y-4 text-sm text-white/70">
              <div>
                <p className="text-white/45">Email</p>
                <p className="mt-1">hello@rediratechnology.com</p>
              </div>

              <div>
                <p className="text-white/45">WhatsApp</p>
                <p className="mt-1">+62 812-3456-7890</p>
              </div>

              <div>
                <p className="text-white/45">Lokasi</p>
                <p className="mt-1">Indonesia</p>
              </div>
            </div>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30 transition hover:scale-[1.02]"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Redira Technology. All rights reserved.</p>
            <p>Built for modern business growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}