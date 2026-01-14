"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Card, CardContent } from "./ui/card";

type Activity = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export default function Hero() {
  const { theme } = useTheme();
  const [totalCount, setTotalCount] = useState(0);

  const selectNineLastMonths = (contributions: Activity[]) => {
    const today = new Date();
    const nineMonthsAgo = new Date(today);
    nineMonthsAgo.setMonth(today.getMonth() - 9);

    const filtered = contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= nineMonthsAgo && date <= today;
    });

    //calculer le total de contributions pour ma custom div (pour pouvoir faire un hover reveal sur le text)
    const total = filtered.reduce((sum, activity) => sum + activity.count, 0);

    //mise à jour asynchrone pour éviter l'erreur "Cannot update during render"
    queueMicrotask(() => {
      setTotalCount(total);
    });

    return filtered;
  };

  return (
    <Card>
      <CardContent className="flex flex-col md:flex-row justify-between px-12 xl:px-24 -mb-4 md:-mt-4">
        <div className="space-y-2 flex flex-col justify-center text-center md:text-start">
          <p className="font-bold text-2xl lg:text-4xl text-pretty">
            Enchantée, moi c&apos;est
            <span className="text-sidebar-primary"> Stella</span> !
          </p>
          <p className="font-bold text-lg lg:text-2xl text-muted-foreground text-pretty">
            Développeuse web & mobile
          </p>
          <div className="mt-4 max-w-fit group hover:blur-none blur-xs hidden lg:block ">
            <GitHubCalendar
              username="slcode777"
              showMonthLabels={false}
              showTotalCount={false}
              showColorLegend={false}
              loading={false}
              colorScheme={theme === "dark" ? "dark" : "light"}
              transformData={selectNineLastMonths}
            />
            <div className="mt-2 text-sm text-card opacity-0 group-hover:opacity-100 group-hover:text-muted-foreground transition-all duration-500 ease-in-out">
              {totalCount} contributions sur les 9 derniers mois
            </div>
          </div>
        </div>
        <Image
          src={"/img/lucy-portfolio-glasses-nobg.png"}
          alt="avatar"
          height={300}
          width={300}
          className="self-center mt-6 md:mt-0"
        />
      </CardContent>
    </Card>
  );
}
