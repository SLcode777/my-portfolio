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

export default function Project3() {
  return (
    <Card className="relative w-full max-w-sm overflow-hidden pt-0">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src="/img/coming-soon.png"
          alt="Project3"
          fill
          className="object-cover"
        />
        {/* <div className="bg-primary absolute inset-0 z-10 opacity-50 mix-blend-color" /> */}
      </div>
      <CardHeader>
        <CardTitle>En construction</CardTitle>
        <CardDescription className=" min-h-20">
          🚧 Projet en cours de construction 🚧
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
                <span>Mystère !</span>
              </AlertDialogDescription>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Défis techniques</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  <span className="text-sidebar-primary">
                    .trouver le temps
                  </span>{" "}
                  de travailler dessus !
                </div>
              </div>
              <div className="mt-4 flex flex-col w-full">
                <div className="text-sm font-semibold">Stack technique</div>
                <div className="text-xs text-muted-foreground mt-2 text-start">
                  Next.js, React, TypeScript.
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4">
              <AlertDialogCancel className="hover:cursor-pointer">
                Fermer
              </AlertDialogCancel>
              <AlertDialogAction disabled>
                <Link href="" target="_blank">
                  Voir le projet
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
