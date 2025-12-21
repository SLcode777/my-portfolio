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

export default function AdaTools() {
  return (
    <Card className="relative w-xs sm:w-sm overflow-hidden pt-0">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src="/img/adatools.png"
          alt="Project3"
          fill
          className="object-cover"
        />
        {/* <div className="bg-primary absolute inset-0 z-10 opacity-50 mix-blend-color" /> */}
      </div>
      <CardHeader>
        <CardTitle>AdaTools</CardTitle>
        <CardDescription className=" min-h-20">
          Un Dashboard intégrant de nombreux outils utiles au quotidien quand on
          code, sous la forme de différents modules que l&apos;on pourra
          épingler si besoin.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="hover:cursor-pointer">Voir les détails</Button>
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              {/* <AlertDialogMedia>
                  <SearchCode />
                </AlertDialogMedia> */}
              <AlertDialogTitle className="mt-4">
                Pourquoi ce projet ?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-start">
                <span>
                  Quand je code, j&apos;ai toujours un navigateur ouvert sur mon
                  2e écran (comme quasiment tous les devs j&apos;imagine) et
                  j&apos;ai toujours un million d&apos;onglets ouverts, ça
                  devient vite n&apos;importe quoi.
                  <br />
                  Du coup, j&apos;ai eu l&apos;idée de rassembler plusieurs des
                  outils que j&apos;utilise le plus souvent sur un même espace
                  afin de toujours les avoir sous la main.
                  <br />
                  La plupart des outils pourront se présenter sous la forme de
                  modules et je me suis dis que ce projet se prêterait bien à
                  une développement contributif en OpenSource.
                </span>
              </AlertDialogDescription>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Défis techniques</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  .apprendre à gérer{" "}
                  <span className="text-sidebar-primary">
                    un projet OpenSource
                  </span>
                  <br />
                  .avoir un code{" "}
                  <span className="text-sidebar-primary">
                    clair et maintenable
                  </span>{" "}
                  pour permettre un travail en équipe
                </div>
              </div>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Stack technique</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  Next.js, React, TypeScript, PostgreSQL, Prisma ORM, tRPC.
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4">
              <AlertDialogCancel className="hover:cursor-pointer">
                Fermer
              </AlertDialogCancel>
              <AlertDialogAction disabled>
                <Link href="" target="_blank">
                  Bientôt en ligne!
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Badge variant="secondary" className="ml-auto">
          Web - OpenSource
        </Badge>
      </CardFooter>
    </Card>
  );
}
