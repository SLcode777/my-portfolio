"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { BetaModal } from "./BetaModal";

export function PexyPageContent() {
  const { lang, t } = useLanguage();
  const h = t.home;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-pexy-bg">
      <BetaModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-pexy-stone mb-6">
            {h.hero.h1}
            <br />
            <span className="text-pexy-blue">{h.hero.h1Span}</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {h.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-pexy-blue text-pexy-snow px-8 py-4 rounded-lg hover:bg-pexy-coral hover:text-pexy-stone transition-colors font-semibold text-lg inline-flex items-center justify-center cursor-pointer"
            >
              {h.hero.cta}
            </button>
            <Link
              href="/pexy/privacy-policy"
              className="bg-pexy-snow text-pexy-stone px-8 py-4 rounded-lg hover:bg-pexy-coral hover:border-pexy-coral transition-colors font-semibold text-lg border-2 border-pexy-blizzard/50 inline-flex items-center justify-center"
            >
              {h.hero.privacyLink}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-pexy-snow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-pexy-stone mb-12">
            {h.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {h.features.items.map((feature) => (
              <div
                key={feature.title}
                className="bg-pexy-blizzard rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-pexy-stone mb-3">
                  {feature.title}
                </h3>
                <p className="text-pexy-stone">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-pexy-stone">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-pexy-snow mb-12">
            {h.screenshots.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
              <div
                key={num}
                className="bg-pexy-blizzard rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`/img/pexy/${lang}/Frame ${num}.png`}
                  alt={`${h.screenshots.alt} ${num - 7}`}
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
            {h.about.title}
          </h2>
          <p className="text-lg text-pexy-stone mb-4">{h.about.p1}</p>
          <p className="text-lg text-pexy-stone mb-4">
            {h.about.p2} <strong>{h.about.p2Bold}</strong>.
          </p>
          <p className="text-lg text-pexy-stone mb-4">{h.about.p3}</p>
          <p className="text-lg text-pexy-stone mb-6">{h.about.p4}</p>
          <a
            href="https://ko-fi.com/slcode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/img/support_me_on_kofi_beige.webp"
              alt={h.about.kofiAlt}
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
            {h.cta.title}
          </h2>
          <p className="text-lg text-balance text-pexy-stone mb-8">
            {h.cta.description}
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-pexy-blue text-white px-8 py-4 rounded-lg hover:bg-pexy-blue-hover transition-colors font-semibold text-lg inline-flex items-center justify-center cursor-pointer"
          >
            {h.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
}
