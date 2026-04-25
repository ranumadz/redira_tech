import Link from "next/link";

const whatsappLink =
  "https://wa.me/6281234567890?text=Halo%20Redira%20Technology%2C%20saya%20ingin%20konsultasi%20project%20digital.";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#071018] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-white text-[#071018]">
                <span className="text-base font-black">R</span>
              </span>
              <div>
                <h3 className="font-black">Redira Technology</h3>
                <p className="mt-1 text-sm text-white/55">
                  Digital Product & Software Partner
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Partner pembuatan website, aplikasi mobile, dashboard, dan SaaS
              untuk bisnis yang ingin tampil modern dan bekerja lebih efisien.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase text-cyan-300">
              Navigasi
            </h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/#services" className="transition hover:text-white">
                Layanan
              </Link>
              <Link href="/#solutions" className="transition hover:text-white">
                Solusi
              </Link>
              <Link href="/#portfolio" className="transition hover:text-white">
                Portfolio
              </Link>
              <Link href="/#process" className="transition hover:text-white">
                Proses
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase text-cyan-300">
              Layanan
            </h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <p>Website Development</p>
              <p>Mobile App Development</p>
              <p>Dashboard & Web App</p>
              <p>Rental & SaaS Application</p>
              <p>UI/UX Improvement</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase text-cyan-300">
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
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-lg bg-cyan-400 px-5 py-3 text-sm font-black !text-[#071018] transition hover:bg-cyan-300"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>Copyright {year} Redira Technology. All rights reserved.</p>
            <p>Built for modern business growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
