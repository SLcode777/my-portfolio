import { Metadata } from "next";
import { PexyPageContent } from "./components/PexyPageContent";

export const metadata: Metadata = {
  title: "Pexy - Communication Alternative Augmentée (CAA) / AAC App",
  description:
    "Free Augmentative and Alternative Communication (AAC) app — Application de Communication Alternative Augmentée (CAA) gratuite. Developed with love by a mom.",
};

export default function PexyPage() {
  return <PexyPageContent />;
}
