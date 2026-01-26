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

export default function Project1() {
  return (
    <Card className="relative w-xs sm:w-sm overflow-hidden pt-0">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src="/img/allymeal.png"
          alt="Project1"
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>AllyMeal</CardTitle>
        <CardDescription className=" min-h-20">
          Une application mobile Android (et iOS bientôt) qui permet de compter
          les calories et autres macros de ses repas et recettes, et ce pour
          plusieurs membres du foyer !
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
                  Ce projet est né d&apos;un besoin personnel. Dans mon foyer,
                  il y a 3 diabétiques pour qui nous avons besoin de connaître
                  les glucides à chaque repas et aucune application à ma
                  connaissance permet de calculer les macros pour plusieurs
                  personnes à la fois.
                </span>
              </AlertDialogDescription>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Défis techniques</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  <span className="text-sidebar-primary">.Feature vocale</span>{" "}
                  avancée qui permet de dicter à la volée les aliments servis
                  pour plusieurs membres de la famille.
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  <span className="text-sidebar-primary">
                    .Recherche extensive
                  </span>{" "}
                  dans plusieurs bases de données internes et externes.
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  <span className="text-sidebar-primary">
                    .UX fluide et intuitive.
                  </span>{" "}
                  L&apos;application est encore dans sa phase MVP donc ce point
                  est à implémenter mais c&apos;est effectivement un impératif
                  selon moi.
                </div>
              </div>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Stack technique</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  React Native, TypeScript, Expo Router, PostgreSQL, Prisma ORM,
                  tRPC pour l&apos;essentiel.
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4">
              <div className="flex flex-row w-full gap-2">
                <AlertDialogCancel className="hover:cursor-pointer w-full ">
                  Fermer
                </AlertDialogCancel>
                <AlertDialogAction className="w-full">
                  <Link href={"https://allymeal.app"} target="_blank">
                    Voir le site
                  </Link>
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>

            <Button>
              <Link
                target="_blank"
                href={
                  "https://play.google.com/store/apps/details?id=com.allymeal.app"
                }
              >
                Voir l&apos;appli
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
