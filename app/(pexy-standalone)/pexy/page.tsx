import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pexy - Communication Alternative Augmentée (CAA)",
  description:
    "Application de Communication Alternative Augmentée (CAA) gratuite pour faciliter la communication des personnes avec troubles du langage ou TSA. Développée avec amour par une maman.",
};

export default function PexyPage() {
  return (
    <div className="bg-pexy-bg">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-pexy-stone mb-6">
            Communiquer facilement
            <br />
            <span className="text-pexy-blue">avec Pexy</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Application de Communication Alternative Augmentée (CAA) gratuite
            pour les personnes avec troubles du langage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              // href="https://play.google.com/store"
              // target="_blank"
              rel="noopener noreferrer"
              className="bg-pexy-blue text-pexy-snow px-8 py-4 rounded-lg hover:bg-pexy-coral hover:text-pexy-stone transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              Bientôt sur Google Play
            </a>
            <Link
              href="/pexy/privacy-policy"
              className="bg-pexy-snow text-pexy-stone px-8 py-4 rounded-lg hover:bg-pexy-coral hover:border-pexy-coral transition-colors font-semibold text-lg border-2 border-pexy-blizzard/50 inline-flex items-center justify-center"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-pexy-snow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-pexy-stone mb-12">
            Fonctionnalités
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-pexy-blizzard rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-pexy-stone mb-3">
                Pictogrammes personnalisés
              </h3>
              <p className="text-pexy-stone">
                Créez vos propres pictogrammes avec des photos pour
                personnaliser l&apos;expérience de communication.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-pexy-blizzard rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔊</div>
              <h3 className="text-xl font-semibold text-pexy-stone mb-3">
                Synthèse vocale
              </h3>
              <p className="text-pexy-stone">
                Chaque pictogramme peut être lu à haute voix avec différentes
                voix et vitesses de lecture.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-pexy-blizzard rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-pexy-stone mb-3">
                Favoris
              </h3>
              <p className="text-pexy-stone">
                Sauvegardez vos pictogrammes préférés pour y accéder rapidement
                et faciliter la communication quotidienne.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-pexy-blizzard rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-pexy-stone mb-3">
                Multilingue
              </h3>
              <p className="text-pexy-stone">
                Disponible en français et en anglais avec support de plusieurs
                voix pour chaque langue.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-pexy-blizzard rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💾</div>
              <h3 className="text-xl font-semibold text-pexy-stone mb-3">
                Sauvegarde de données
              </h3>
              <p className="text-pexy-stone">
                Exportez et importez vos données facilement pour ne rien perdre
                lors d&apos;un changement d&apos;appareil.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-pexy-blizzard rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-pexy-stone mb-3">
                100% Privé
              </h3>
              <p className="text-pexy-stone">
                Toutes vos données restent sur votre appareil. Aucune collecte,
                aucun tracking, aucune publicité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-pexy-stone">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-pexy-snow mb-12">
            Captures d&apos;écran
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
              <div
                key={num}
                className="bg-pexy-blizzard rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`/img/pexy/Frame ${num}.png`}
                  alt={`Capture d'écran de l'application Pexy ${num - 7}`}
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-pexy-blizzard">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-pexy-stone mb-6">
            Développé avec 🧡
          </h2>
          <p className="text-lg text-pexy-stone mb-4">
            Pexy a été développée par la maman d&apos;un merveilleux petit
            garçon avec TSA.
          </p>
          <p className="text-lg text-pexy-stone mb-4">
            Cette application est{" "}
            <strong>gratuite et le restera toujours</strong>.
          </p>

          <p className="text-lg text-pexy-stone mb-4">
            L&apos;objectif est de rendre la communication accessible à tous,
            sans barrière financière.
          </p>
          <p className="text-lg text-pexy-stone mb-6">
            Si vous le souhaitez, vous pouvez me soutenir par un don à hauteur
            de vos moyens sur Ko-fi
          </p>
          <a
            href="https://ko-fi.com/slcode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src={"/img/support_me_on_kofi_beige.webp"}
              alt="ko-fi button"
              width={300}
              height={50}
            />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-pexy-stone mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-balance text-pexy-stone mb-8">
            Téléchargez Pexy gratuitement sur Google Play et commencez à
            communiquer plus facilement dès aujourd&apos;hui.
          </p>
          <a
            // href="https://play.google.com/store"
            // target="_blank"
            rel="noopener noreferrer"
            className="bg-pexy-blue text-white px-8 py-4 rounded-lg hover:bg-pexy-blue-hover transition-colors font-semibold text-lg inline-flex items-center justify-center"
          >
            Bientôt disponible
          </a>
        </div>
      </section>
    </div>
  );
}
