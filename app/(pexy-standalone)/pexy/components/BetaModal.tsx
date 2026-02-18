"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

interface BetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMAIL = "sl.code.777@gmail.com";

export function BetaModal({ isOpen, onClose }: BetaModalProps) {
  const { t } = useLanguage();
  const b = t.beta;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  function copyEmail() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => fallbackCopy());
    } else {
      fallbackCopy();
    }
  }

  function fallbackCopy() {
    const el = document.createElement("textarea");
    el.value = EMAIL;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none cursor-pointer"
          aria-label={b.close}
        >
          ×
        </button>

        {/* Icon */}
        <div className="text-5xl mb-4 text-center">🧪</div>

        {/* Title */}
        <h2 className="text-xl font-bold text-pexy-stone mb-4 text-center">
          {b.title}
        </h2>

        {/* Content */}
        <p className="text-gray-700 mb-4 text-center leading-relaxed">
          {b.content}
        </p>

        {/* Email — click to copy */}
        <div className="bg-pexy-bg rounded-lg px-4 py-3 mb-2 text-center">
          <button
            onClick={copyEmail}
            className="text-pexy-blue hover:text-pexy-blue-hover font-semibold transition-colors cursor-pointer"
          >
            {EMAIL}
          </button>
        </div>

        {/* Copied feedback */}
        <p
          className="text-sm text-center text-pexy-stone font-medium mb-2 transition-opacity duration-300"
          style={{ opacity: copied ? 1 : 0 }}
        >
          ✓ {b.copied}
        </p>

        {/* Note */}
        <p className="text-gray-500 text-sm text-center italic">{b.note}</p>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-pexy-blue text-pexy-snow py-3 rounded-lg hover:bg-pexy-coral hover:text-pexy-stone transition-colors font-semibold cursor-pointer"
        >
          {b.close}
        </button>
      </div>
    </div>
  );
}
