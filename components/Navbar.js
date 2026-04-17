import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white">
      <h1 className="font-bold text-lg">Redira</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}