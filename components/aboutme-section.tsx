"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function AboutMe() {
  return (
    <div className="mt-40">
      <p className="font-bold text-4xl mb-8 text-center">A propos de moi</p>
      <div className="flex flex-row">
        <div className="w-1/6 hidden md:block border-dashed border-y border-accent " />
        <Card className="w-full md:w-4/6 border-dashed border">
          {" "}
          <CardContent className="text-sm space-y-2">
            <p>
              Comptable depuis 20 ans mais passionnée d&apos;informatique depuis
              l&apos;adolescence, j&apos;ai sauté le pas de la reconversion fin
              2023, pour mon plus grand bonheur.
            </p>
            <p>
              Les points forts qui faisaient de moi une bonne comptable sont les
              mêmes qui feront de moi une bonne développeuse : logique, rigueur,
              plannification, curiosité, sens de l&apos;observation, etc...{" "}
            </p>
            <p>
              Depuis 2 ans déjà, ma détermination et mon enthousiasme me portent
              à travers l&apos;exploration du métier de développeur et de ses
              multiples facettes. Et puisque c&apos;est en construisant de vrais
              projets qu&apos;on apprend le mieux, je viens d&apos;achever, non
              sans fierté, mon premier projet d&apos;envergure, une véritable
              application mobile, bientôt disponible sur le PlayStore !{" "}
            </p>
            <div className="flex justify-center mt-4">
              <Button
                variant={"outline"}
                className="hover:cursor-pointer hover:text-sidebar-primary"
                onClick={() =>
                  toast("Cette section n'est pas encore terminée.")
                }
              >
                En savoir plus
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="w-1/6 hidden md:block border-dashed border-y border-accent " />
      </div>
    </div>
  );
}
