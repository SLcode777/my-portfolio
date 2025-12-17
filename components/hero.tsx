import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function Hero() {
  return (
    <Card>
      <CardContent className="flex flex-row justify-between px-24">
        <div className="space-y-2 flex flex-col justify-center">
          <p className="font-bold text-4xl">
            Bonjour, moi c&apos;est
            <span className="text-sidebar-primary"> Stella</span> !
          </p>
          <p className="font-bold text-2xl text-muted-foreground">
            Développeuse web & mobile en Freelance
          </p>
        </div>
        <Image
          src={"/img/lucy-portfolio-glasses.png"}
          alt="avatar"
          height={300}
          width={300}
        />
      </CardContent>
    </Card>
  );
}
