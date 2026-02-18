import { Metadata } from "next";
import { PexyPrivacyContent } from "../components/PexyPrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy / Politique de confidentialité - Pexy",
  description:
    "Privacy policy for the Pexy AAC app — Politique de confidentialité de l'application Pexy (CAA)",
};

export default function PrivacyPolicyPage() {
  return <PexyPrivacyContent />;
}
