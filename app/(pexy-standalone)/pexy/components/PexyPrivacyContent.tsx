"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

export function PexyPrivacyContent() {
  const { lang, t } = useLanguage();
  const p = t.privacy;
  const s = p.sections;

  const dateLocale = lang === "fr" ? "fr-FR" : "en-GB";

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          href="/pexy"
          className="inline-flex items-center text-pexy-blue hover:text-pexy-blue-hover mb-8 transition-colors"
        >
          {p.backLink}
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {p.title}
        </h1>
        <p className="text-gray-600 mb-12">
          {p.lastUpdated} {new Date().toLocaleDateString(dateLocale)}
        </p>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.intro.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{s.intro.content}</p>
          </section>

          {/* No data collection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.noData.title}
            </h2>
            <div className="bg-pexy-bg border-l-4 border-pexy-blue p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                {s.noData.highlight}
              </p>
              <p className="text-gray-700">{s.noData.content}</p>
            </div>
          </section>

          {/* Local storage */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.localStorage.title}
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {s.localStorage.intro}{" "}
              <strong>{s.localStorage.introStrong}</strong> :
            </p>
            <ul className="space-y-2 text-gray-700">
              {s.localStorage.items.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-pexy-blue mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>{s.localStorage.important}</strong>
            </p>
          </section>

          {/* Permissions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.permissions.title}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {s.permissions.intro}
            </p>
            <div className="space-y-4">
              {s.permissions.items.map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 rounded-lg p-5"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-2">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Third-party services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.thirdParty.title}
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {s.thirdParty.intro}{" "}
              <strong>{s.thirdParty.introStrong}</strong> :
            </p>
            <ul className="space-y-2 text-gray-700">
              {s.thirdParty.items.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.security.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{s.security.content}</p>
          </section>

          {/* Data sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.dataSharing.title}
            </h2>
            <div className="bg-pexy-bg border-l-4 border-pexy-blue p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900">
                {s.dataSharing.highlight}
              </p>
            </div>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.children.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{s.children.content}</p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.changes.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{s.changes.content}</p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {s.contact.title}
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {s.contact.content}
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
            {p.backLinkBottom}
          </Link>
        </div>
      </div>
    </div>
  );
}
