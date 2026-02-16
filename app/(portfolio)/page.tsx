import AboutMe from "@/components/aboutme-section";
import ContactForm from "@/components/contact-form";
import FAQ from "@/components/faq-section";
import Hero from "@/components/hero";
import Projects from "@/components/projects-section";

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <FAQ />
      <ContactForm />
      <div className="mt-40" />
    </>
  );
}
