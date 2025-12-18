"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar";
import { Card, CardContent } from "./ui/card";

export default function Hero() {
  const { theme } = useTheme();

  const selectNineLastMonths = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 9;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
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
            Développeuse web & mobile en Freelance
          </p>
          <div className="mt-4 max-w-fit hover:blur-none blur-xs hidden lg:block ">
            <GitHubCalendar
              username="slcode777"
              showMonthLabels={false}
              showTotalCount={true}
              showColorLegend={false}
              loading={false}
              colorScheme={theme === "dark" ? "dark" : "light"}
              transformData={selectNineLastMonths}
              labels={{
                totalCount: "{{count}} contributions sur les 9 derniers mois",
              }}
            />
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
