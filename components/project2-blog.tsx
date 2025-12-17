import { Badge } from "@/components/ui/badge";
import { Button } from "@base-ui/react";
import { PlusIcon } from "lucide-react";
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
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Project2() {
  return (
    <Card className="relative w-full max-w-sm overflow-hidden pt-0">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src="/img/blog.png"
          alt="Project2"
          fill
          className="object-cover"
        />
        {/* <div className="bg-primary absolute inset-0 z-10 opacity-50 mix-blend-color" /> */}
      </div>
      <CardHeader>
        <CardTitle>Mon Blog</CardTitle>
        <CardDescription>
          Un blog que j&apos;alimente depuis fin 2023 suite à ma décision de me
          reconvertir. J&apos;y documente mon parcours d&apos;apprentie
          developpeuse autodidacte et y partage mes succès et mes échecs, sans
          filtre.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>
              <PlusIcon data-icon="inline-start" />
              Voir les détails
            </Button>
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
                  A l&apos;origine, le but était de me rendre
                  &quot;accountable&quot;. Annoncer ses objectifs en public te
                  pousse à rester focus et à les réaliser. Ca permet aussi de se
                  poser, de prendre du recul et de tout mettre à plat. Enfin, ça
                  permet d&apos;échanger avec d&apos;autres devs de tous niveaux
                  et tous horizons, c&apos;est très enrichissant !
                </span>
              </AlertDialogDescription>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Défis techniques</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  <span className="text-sidebar-primary">
                    .Affichage de contenu dynamique
                  </span>{" "}
                  (non c&apos;est facile en vrai :p)
                </div>
              </div>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Stack technique</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  Next.js, React, TypeScript, Resend.
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4">
              <AlertDialogCancel>Fermer</AlertDialogCancel>
              <AlertDialogAction>
                <Link href={"https://sl-code.dev"} target="_blank">
                  Voir le site
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Badge variant="secondary" className="ml-auto">
          Web
        </Badge>
      </CardFooter>
    </Card>
  );
}
