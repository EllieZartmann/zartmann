import type { Metadata } from "next";
import "./globals.css";
import { Genos } from "next/font/google";
import Link from "next/link";

const genos = Genos({
  subsets: ["latin"],
  variable: "--font-genos",
});

export const metadata = {
  title: "Portfolio",
  description: "Projects portfolio of Sylvia Zartmann as a web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={genos.variable}>
      <body>
        {/* Fixed Navbar */}
        <nav
          className="fixed top-0 left-0 w-full shadow-md border-b z-50 p-4 flex justify-center gap-6  
        text-gray-800 font-sans
        dark:bg-gray-200
        bg-white
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-size-[24px_24px]"
        >
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-black hover:underline">
            About
          </Link>
          <Link href="/skills" className="text-black hover:underline">
            Skills
          </Link>
          <Link href="/projects" className="text-black hover:underline">
            Projects
          </Link>
          {/*<Link href="/contact" className="text-black hover:underline">Contact</Link>*/}
        </nav>

        {children}
      </body>
    </html>
  );
}
