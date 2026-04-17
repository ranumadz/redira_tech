export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300">
            Contact Us
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Mari Bangun Solusi Digital Anda
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            Konsultasikan kebutuhan website, aplikasi mobile, atau SaaS bisnis
            Anda bersama Redira Technology.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/70">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama"
                className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3 outline-none placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3 outline-none placeholder:text-white/30"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white/70">Kebutuhan</label>
              <input
                type="text"
                placeholder="Website company profile / mobile app / SaaS"
                className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3 outline-none placeholder:text-white/30"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white/70">Pesan</label>
              <textarea
                rows={6}
                placeholder="Ceritakan kebutuhan project Anda..."
                className="w-full rounded-2xl border border-white/10 bg-[#0c1224] px-4 py-3 outline-none placeholder:text-white/30"
              />
            </div>
          </div>

          <button className="mt-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-900/30 transition hover:scale-[1.02]">
            Kirim Konsultasi
          </button>
        </div>
      </div>
    </main>
  );
}