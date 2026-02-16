import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Pexy",
  description: "Politique de confidentialité de l'application Pexy (CAA)",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          href="/pexy"
          className="inline-flex items-center text-pexy-blue hover:text-pexy-blue-hover mb-8 transition-colors"
        >
          ← Retour à Pexy
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-gray-600 mb-12">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Pexy est une application de Communication Alternative Augmentée
              (CAA) conçue pour respecter votre vie privée. Cette politique de
              confidentialité explique comment vos données sont traitées (ou
              plutôt, ne sont PAS traitées) lorsque vous utilisez Pexy.
            </p>
          </section>

          {/* No data collection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Collecte de données personnelles
            </h2>
            <div className="bg-pexy-bg border-l-4 border-pexy-blue p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                ✅ Pexy ne collecte AUCUNE donnée personnelle.
              </p>
              <p className="text-gray-700">
                L&apos;application fonctionne entièrement hors ligne et toutes
                vos données restent stockées localement sur votre appareil.
              </p>
            </div>
          </section>

          {/* Local storage */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Données stockées localement
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les données suivantes sont stockées{" "}
              <strong>uniquement sur votre appareil</strong> :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-pexy-blue mr-2">•</span>
                <span>Nom du profil utilisateur</span>
              </li>
              <li className="flex items-start">
                <span className="text-pexy-blue mr-2">•</span>
                <span>Avatar choisi</span>
              </li>
              <li className="flex items-start">
                <span className="text-pexy-blue mr-2">•</span>
                <span>Préférences de langue</span>
              </li>
              <li className="flex items-start">
                <span className="text-pexy-blue mr-2">•</span>
                <span>Paramètres de synthèse vocale (vitesse, voix)</span>
              </li>
              <li className="flex items-start">
                <span className="text-pexy-blue mr-2">•</span>
                <span>
                  Code PIN de protection des paramètres (si configuré)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pexy-blue mr-2">•</span>
                <span>Pictogrammes favoris</span>
              </li>
              <li className="flex items-start">
                <span className="text-pexy-blue mr-2">•</span>
                <span>Phrases personnalisées</span>
              </li>
              <li className="flex items-start">
                <span className="text-pexy-blue mr-2">•</span>
                <span>
                  Pictogrammes personnalisés (photos prises ou importées)
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Important :</strong> Ces données ne quittent jamais votre
              appareil et ne sont jamais transmises à des serveurs externes.
            </p>
          </section>

          {/* Permissions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Permissions de l&apos;application
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Pexy demande les permissions suivantes :
            </p>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">📷</span>
                  Accès à la caméra
                </h3>
                <p className="text-gray-600 text-sm">
                  Utilisé uniquement pour prendre des photos de pictogrammes
                  personnalisés. Les photos sont stockées localement sur votre
                  appareil.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">🖼️</span>
                  Accès à la galerie
                </h3>
                <p className="text-gray-600 text-sm">
                  Utilisé uniquement pour sélectionner des images depuis votre
                  galerie pour créer des pictogrammes personnalisés.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">💾</span>
                  Accès au stockage
                </h3>
                <p className="text-gray-600 text-sm">
                  Utilisé pour exporter et importer vos sauvegardes de données.
                  Vous gardez le contrôle total de vos fichiers de sauvegarde.
                </p>
              </div>
            </div>
          </section>

          {/* Third-party services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Services tiers
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Pexy n&apos;utilise <strong>aucun service tiers</strong> :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>
                  Pas de tracking analytics (Google Analytics, Firebase, etc.)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Pas de publicité</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Pas de crash reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Pas de connexion internet requise</span>
              </li>
            </ul>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sécurité</h2>
            <p className="text-gray-700 leading-relaxed">
              Pexy vous permet de protéger l&apos;accès aux paramètres avec un
              code PIN à 4 chiffres. Ce code est stocké localement sur votre
              appareil de manière sécurisée. En cas de perte de votre code PIN,
              vous devrez réinitialiser l&apos;application. Nous vous
              recommandons d&apos;utiliser la fonctionnalité d&apos;export de
              données pour créer des sauvegardes régulières.
            </p>
          </section>

          {/* Data sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Partage de données
            </h2>
            <div className="bg-pexy-bg border-l-4 border-pexy-blue p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900">
                ✅ Pexy ne partage AUCUNE donnée avec qui que ce soit.
              </p>
            </div>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Protection des enfants
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Pexy est conçue pour être utilisée par des enfants et des adultes
              avec TSA. Comme aucune donnée n&apos;est collectée ou transmise,
              l&apos;application est totalement sûre pour les enfants de tous
              âges.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modifications de cette politique
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cette politique de confidentialité peut être mise à jour
              occasionnellement. Toute modification sera publiée sur cette page
              avec une nouvelle date de mise à jour.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité,
              vous pouvez me contacter à :
            </p>
            <a
              href="mailto:sl.code.777@gmail.com"
              className="text-pexy-blue hover:text-pexy-blue-hover text-lg font-medium transition-colors"
            >
              sl.code.777@gmail.com
            </a>
          </section>
        </div>

        {/* Back to top */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/pexy"
            className="inline-flex items-center text-pexy-blue hover:text-pexy-blue-hover transition-colors font-medium"
          >
            ← Retour à la page Pexy
          </Link>
        </div>
      </div>
    </div>
  );
}
