import { Inter } from "next/font/google";
import { LanguageProvider } from "./i18n/LanguageContext";
import { PexyFooter } from "./components/PexyFooter";
import { PexyNavbar } from "./components/PexyNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function PexyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div
        className={`${inter.className} min-h-screen flex flex-col bg-pexy-snow`}
      >
        <PexyNavbar />
        <main className="flex-1">{children}</main>
        <PexyFooter />
      </div>
    </LanguageProvider>
  );
}
