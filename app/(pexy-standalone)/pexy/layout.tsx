import { Chewy, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
});

export default function PexyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.className}  min-h-screen flex flex-col bg-pexy-snow`}
    >
      {/* Pexy Navbar */}
      <nav className="bg-pexy-snow border-b border-pexy-blizzard sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/pexy" className="flex items-center space-x-2">
              <Image
                src={"/img/no-bg-Pexy-mascot.webp"}
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

            {/* Navigation Links */}
            <div className="hidden sm:flex items-center space-x-6">
              <Link
                href="/pexy"
                className="text-pexy-stone hover:text-pexy-blue transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/pexy/privacy-policy"
                className="text-pexy-stone hover:text-pexy-blue transition-colors"
              >
                Confidentialité
              </Link>
              <a
                href="mailto:sl.code.777@gmail.com"
                className="text-pexy-stone hover:text-pexy-blue transition-colors"
              >
                Contact
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pexy-blue text-pexy-snow px-4 py-2 rounded-lg hover:bg-pexy-coral hover:text-pexy-stone transition-colors font-medium"
              >
                Télécharger
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pexy-blue text-pexy-snow px-3 py-2 rounded-lg text-sm font-medium"
              >
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Pexy Footer */}
      <footer className="bg-pexy-snow border-t border-pexy-blizzard mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="font-semibold text-pexy-stone mb-3">
                À propos de Pexy
              </h3>
              <p className="text-pexy-stone text-sm">
                Application de Communication Alternative Augmentée (CAA)
                gratuite pour faciliter la communication des personnes avec
                troubles du langage.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-pexy-stone mb-3">Liens</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/pexy"
                    className="text-pexy-stone hover:text-pexy-blue  transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pexy/privacy-policy"
                    className="text-pexy-stone  transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pexy-stone hover:text-pexy-blue transition-colors"
                  >
                    Google Play
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-pexy-stone mb-3">Contact</h3>
              <div className="space-y-2 text-sm">
                <p className="text-pexy-stone">
                  Email:{" "}
                  <a
                    href="mailto:sl.code.777@gmail.com"
                    className="text-pexy-blue hover:underline"
                  >
                    sl.code.777@gmail.com
                  </a>
                </p>
                <p className="text-pexy-stone">
                  Support:{" "}
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
                Développé avec 💙 par{" "}
                <Link href="/" className="text-pexy-stone hover:underline">
                  Stella
                </Link>
              </p>
              <p className="text-pexy-stone text-sm">
                © {new Date().getFullYear()} Pexy. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
