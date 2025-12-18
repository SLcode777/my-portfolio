import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="mt-40">
      <p className="font-bold text-4xl mb-8 text-center">Je vous réponds</p>
      <div>
        <div className="flex flex-row">
          <div className="w-1/6 hidden md:block  " />

          <Accordion
            type="single"
            className="w-full md:w-4/6 gap-2"
            collapsible
          >
            <AccordionItem
              value="item-1"
              className="border px-2 hover:text-sidebar-primary hover:bg-sidebar-primary/10"
            >
              <AccordionTrigger className="text-sm">
                Qu&apos;est-ce que je sais faire, concrètement ?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground h-fit">
                <p>
                  Site internet, page de vente, blog, application web,
                  application mobile Android et iOS, extension pour navigateur,
                  principalement.
                </p>
                <p>
                  Mais en tant que développeuse autodidacte, je m&apos;adapte
                  vite et je n&apos;ai pas peur de sortir de ma zone de confort
                  pour aquérir de nouvelles compétences.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border px-2 hover:text-sidebar-primary hover:bg-sidebar-primary/10"
            >
              <AccordionTrigger className="text-sm">
                Pourquoi travailler avec moi ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground h-fit text-sm">
                <p>
                  Mon sens de l&apos;écoute et du détail me permettront de
                  cerner précisément votre besoin afin de mettre en place des
                  solutions 100% adaptées.
                </p>
                <p>
                  Si vous m&apos;accordez votre confiance, je mettrais tout en
                  oeuvre pour vous apporter entière satisfaction, en délivrant
                  un travail de qualité, à la hauteur de vos attentes et même
                  au-delà.{" "}
                </p>
                <p>
                  Aussi, mes tarifs en tant que junior sont encore attractifs,
                  alors profitez-en avant qu&apos;ils ne le soient plus !
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border px-2 hover:text-sidebar-primary hover:bg-sidebar-primary/10"
            >
              <AccordionTrigger className="text-sm">
                Jusqu&apos;où puis-je me déplacer si besoin ?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground h-fit">
                <p>
                  Basée à Martigues, je peux me déplacer sur tout le département
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="w-1/6 hidden md:block  " />
        </div>
      </div>
    </div>
  );
}
