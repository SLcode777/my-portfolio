import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function AboutMe() {
  return (
    <div className="mt-16">
      <p className="font-bold text-4xl mb-8">A propos de moi</p>
      <div className="flex flex-row">
        <div className="w-1/6 hidden md:block border-dashed border-y border-accent "></div>
        <Card className="w-full md:w-4/6 border-dashed border">
          {" "}
          <CardContent className="text-sm space-y-2">
            <p>
              Comptable depuis 20 ans mais passionnée d&apos;informatique depuis
              l&apos;adolescence, j&apos;ai sauté le pas de la reconversion fin
              2023, pour mon plus grand bonheur.
            </p>
            <p>
              Depuis 2 ans déjà, ma curiosité et mon enthousiasme me poussent à
              explorer le métier de développeur et ses multiples facettes et je
              viens d&apos;achever, non sans fierté, mon premier projet
              d&apos;envergure, une véritable application mobile, bientôt
              disponible sur le PlayStore !{" "}
            </p>
            <div className="flex justify-center mt-4">
              <Button
                variant={"ghost"}
                className="hover:cursor-pointer hover:text-sidebar-primary"
              >
                En savoir plus
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="w-1/6 hidden md:block border-dashed border-y border-accent "></div>
      </div>
    </div>
  );
}
