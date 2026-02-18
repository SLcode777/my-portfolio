"use client";

import { Chewy, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { BetaModal } from "./BetaModal";

const inter = Inter({ subsets: ["latin"] });
const chewy = Chewy({ weight: "400", subsets: ["latin"] });

export function PexyNavbar() {
  const { lang, setLang, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav
        className={`${inter.className} bg-pexy-snow border-b border-pexy-blizzard sticky top-0 z-50 shadow-sm`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/pexy" className="flex items-center space-x-2">
              <Image
                src="/img/no-bg-Pexy-mascot.webp"
                alt="pexy-mascot"
                width={50}
                height={50}
              />
              <span
                className={`${chewy.className} text-4xl font-bold text-pexy-stone`}
              >
                Pexy
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden sm:flex items-center space-x-6">
              <Link
                href="/pexy"
                className="text-pexy-stone hover:text-pexy-blue transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/pexy/privacy-policy"
                className="text-pexy-stone hover:text-pexy-blue transition-colors"
              >
                {t.nav.privacy}
              </Link>
              <a
                href="mailto:sl.code.777@gmail.com"
                className="text-pexy-stone hover:text-pexy-blue transition-colors"
              >
                {t.nav.contact}
              </a>

              {/* Language switcher */}
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="text-pexy-stone text-sm hover:scale-110 transition-transform hover:cursor-pointer"
                aria-label={
                  lang === "fr" ? "Switch to English" : "Passer en français"
                }
                title={lang === "fr" ? "Switch to English" : "Passer en français"}
              >
                {lang === "fr" ? "🇫🇷 FR -> 🇬🇧 EN" : "🇬🇧 EN -> 🇫🇷 FR"}
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-pexy-blue text-pexy-snow px-4 py-2 rounded-lg hover:bg-pexy-coral hover:text-pexy-stone transition-colors font-medium cursor-pointer"
              >
                {t.nav.download}
              </button>
            </div>

            {/* Mobile: lang switcher + download */}
            <div className="sm:hidden flex items-center space-x-2">
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="text-lg hover:scale-110 transition-transform hover:cursor-pointer"
                aria-label={
                  lang === "fr" ? "Switch to English" : "Passer en français"
                }
                title={lang === "fr" ? "Switch to English" : "Passer en français"}
              >
                {lang === "fr" ? "🇬🇧" : "🇫🇷"}
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-pexy-blue text-pexy-snow px-3 py-2 rounded-lg text-sm font-medium hover:bg-pexy-coral hover:text-pexy-stone transition-colors cursor-pointer"
              >
                {t.nav.download}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <BetaModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
