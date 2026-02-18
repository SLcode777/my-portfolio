"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export function PexyFooter() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer
      className={`${inter.className} bg-pexy-snow border-t border-pexy-blizzard mt-auto`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-pexy-stone mb-3">
              {f.about.title}
            </h3>
            <p className="text-pexy-stone text-sm">{f.about.description}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-pexy-stone mb-3">
              {f.links.title}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pexy"
                  className="text-pexy-stone hover:text-pexy-blue transition-colors"
                >
                  {f.links.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/pexy/privacy-policy"
                  className="text-pexy-stone hover:text-pexy-blue transition-colors"
                >
                  {f.links.privacy}
                </Link>
              </li>
              <li>
                <span className="text-pexy-stone/60 cursor-not-allowed">
                  {f.links.googlePlay}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-pexy-stone mb-3">
              {f.contact.title}
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-pexy-stone">
                {f.contact.email}:{" "}
                <a
                  href="mailto:sl.code.777@gmail.com"
                  className="text-pexy-blue hover:underline"
                >
                  sl.code.777@gmail.com
                </a>
              </p>
              <p className="text-pexy-stone">
                {f.contact.support}:{" "}
                <a
                  href="https://ko-fi.com/slcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pexy-blue hover:underline"
                >
                  Ko-fi
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-pexy-stone/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-pexy-stone text-sm">
              {f.bottom.madeWith}{" "}
              <Link href="/" className="text-pexy-stone hover:underline">
                Stella
              </Link>
            </p>
            <p className="text-pexy-stone text-sm">
              © {new Date().getFullYear()} Pexy. {f.bottom.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
