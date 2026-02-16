import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Pexy() {
  return (
    <Card className="relative w-xs sm:w-sm overflow-hidden pt-0">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src="/img/Pexy.webp"
          alt="Project1"
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Pexy</CardTitle>
        <CardDescription className=" min-h-20">
          Une application mobile Android de Communication Alternative Augmentée
          qui permet aux personnes non verbales de communiquer à travers la
          méthode PECS.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="hover:cursor-pointer">Voir les détails</Button>
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogTitle className="mt-4">
                Pourquoi ce projet ?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-start">
                <span>
                  Mon fils qui est autiste a eu le coeur brisé de voir que sa
                  feature préférée dans son app de text-to-speech est devenue
                  payante... J&apos;ai donc décidé de recoder une app similaire,
                  tout en améliorant la localisation française qui était parfois
                  hasardeuse, et en ajoutant quelques fonctionnalités
                  supplémentaires.
                </span>
              </AlertDialogDescription>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Défis techniques</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  <span className="text-sidebar-primary">
                    .Coût de maintenance nulle :
                  </span>{" "}
                  afin de pouvoir mettre gratuitement l&apos;app à disposition
                  de tous, j&apos;ai dû apprendre comment gérer des données
                  personnalisées au sein même de l&apos;app.
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  <span className="text-sidebar-primary">.Localisation :</span>{" "}
                  j&apos;ai fait le choix d&apos;utiliser la librairie i18n pour
                  permettre une localisation en français et en anglais.
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  <span className="text-sidebar-primary">
                    .Plus de 800 pictogrammes :
                  </span>{" "}
                  Je dois trouver une solution pour avoir 800 pictogrammes
                  simples et cohérents. En attendant, j&apos;ai utilisé des
                  emojis qui seront remplacés au fur et à mesure.
                </div>
              </div>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Stack technique</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  React Native, TypeScript, Expo Router, SQLite, Drizzle ORM,
                  TTS natif pour l&apos;essentiel.
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4">
              <div className="flex flex-row w-full gap-2">
                <AlertDialogCancel className="hover:cursor-pointer w-full ">
                  Fermer
                </AlertDialogCancel>
                <AlertDialogAction className="w-full">
                  <Link href={"https://stellam.dev/pexy"} target="_blank">
                    Voir le site
                  </Link>
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>

            <Button disabled>
              <Link target="_blank" href={""}>
                Voir l&apos;appli (bientôt)
              </Link>
            </Button>
          </AlertDialogContent>
        </AlertDialog>
        <Badge variant="secondary" className="ml-auto">
          Mobile
        </Badge>
      </CardFooter>
    </Card>
  );
}
