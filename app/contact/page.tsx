export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-20 text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-80px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute right-[-80px] top-[20%] h-[320px] w-[320px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[30%] h-[280px] w-[280px] rounded-full bg-indigo-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <section>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact Us
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Mari Bangun
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Solusi Digital Anda
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Konsultasikan kebutuhan website, aplikasi mobile, web app, atau
              SaaS bisnis Anda bersama Redira Technology. Ceritakan kebutuhan
              project Anda, nanti kita bantu arahkan solusi yang paling cocok.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold text-cyan-300">
                  Cocok untuk
                </p>
                <p className="mt-2 text-white/80 leading-7">
                  Company profile, landing page, dashboard internal, aplikasi
                  mobile, booking system, sampai produk SaaS.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold text-cyan-300">
                  Proses awal
                </p>
                <p className="mt-2 text-white/80 leading-7">
                  Tinggal kirim kebutuhan singkat, target project, dan gambaran
                  fitur yang Anda inginkan. Dari situ baru kita diskusikan arah
                  terbaiknya.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold text-cyan-300">
                  Respon cepat
                </p>
                <p className="mt-2 text-white/80 leading-7">
                  Lebih enak kalau sudah punya gambaran kebutuhan, referensi
                  desain, atau contoh website/app yang Anda suka.
                </p>
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Form Konsultasi
              </h2>
              <p className="mt-2 text-white/65">
                Isi form di bawah, lalu lanjutkan ke proses diskusi project.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/70">Nama</label>
                <input
                  type="text"
                  placeholder="Masukkan nama"
                  className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Nomor WhatsApp</label>
                <input
                  type="text"
                  placeholder="Masukkan nomor WhatsApp"
                  className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Budget Range</label>
                <select className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3.5 text-white outline-none transition focus:border-cyan-400/50">
                  <option>Estimasi budget</option>
                  <option>&lt; 5 juta</option>
                  <option>5 - 10 juta</option>
                  <option>10 - 25 juta</option>
                  <option>25 juta+</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-white/70">Kebutuhan</label>
                <input
                  type="text"
                  placeholder="Website company profile / mobile app / SaaS / dashboard"
                  className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/50"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-white/70">Pesan</label>
                <textarea
                  rows={6}
                  placeholder="Ceritakan kebutuhan project Anda, target, referensi desain, atau fitur yang diinginkan..."
                  className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/50"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-900/30 transition hover:scale-[1.02]">
                Kirim Konsultasi
              </button>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Chat via WhatsApp
              </a>
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-cyan-300">Email</p>
                <p className="mt-2 text-white/80">hello@rediratechnology.com</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-cyan-300">WhatsApp</p>
                <p className="mt-2 text-white/80">+62 812-3456-7890</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}