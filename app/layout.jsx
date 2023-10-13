import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { orbitron, exo_2 } from "./fonts";

// set metadata for the current page
export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo_2.variable}`}>
      <body className="bg-orange-50 flex px-4 py-2 flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-xs border-t text-center py-3 text-slate-500 ">
          Game data and images cortesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
