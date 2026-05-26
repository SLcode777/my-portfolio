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
import { siteConfig } from "@/site.config";

export default function GlucoFamily() {
  return (
    <Card className="relative w-xs sm:w-sm overflow-hidden pt-0">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src="/img/glucofamily.webp"
          alt="Project5"
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>GlucoFamily</CardTitle>
        <CardDescription className=" min-h-20">
          Un ESP32 programmé pour récupérer les glycémies de mes enfants et mon
          mari et les afficher en continu.
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
                  Quand on a 3 diabétiques sous le même toit, on passe son temps
                  à entendre des alertes, se demander qui est concerné,
                  consulter les lecteurs des uns et des autres, et ça, même la
                  nuit.
                  <br />
                  Par chance, on m&apos;a parlé d&apos;un projet open source
                  (Gluco-Monitor) qui permettait d&apos;afficher en continu la
                  glycémie d&apos;une personne.
                  <br />
                  Il ne m&apos;a pas fallu longtemps pour comprendre à quel
                  point ce serait génial de l&apos;adapter pour suivre plusieurs
                  personnes !
                </span>
              </AlertDialogDescription>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Défis techniques</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  .découvrir la programmation en{" "}
                  <span className="text-sidebar-primary">Arduino</span>
                  <br />
                  .refactoriser du code pour{" "}
                  <span className="text-sidebar-primary">
                    l&apos;adapter à mon besoin
                  </span>{" "}
                </div>
              </div>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Stack technique</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  C++, Arduino, PlatormIO
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4">
              <AlertDialogCancel className="hover:cursor-pointer">
                Fermer
              </AlertDialogCancel>
              <AlertDialogAction>
                <Link href={siteConfig.links.glucofamily.url} target="_blank">
                  Voir le site
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
