import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="text-white absolute w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Image src="/logo-edify.webp" alt="logo" height={130} width={130} />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[#0536E5] text-[16px] font-semibold fami">
          <li><a href="/" className="hover:underline underline-offset-4">Dashboard</a></li>
          <li><a href="/about" className="hover:underline underline-offset-4">About</a></li>
          <li><a href="/login" className="hover:underline underline-offset-4">LogIn</a></li>
        </ul>
      </div>
    </nav>
  );
}
