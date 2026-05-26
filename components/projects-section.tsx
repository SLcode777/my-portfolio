import AllyMeal from "./project1-allymeal";
import Blog from "./project2-blog";
import AdaTools from "./project3-adatools";
import Pexy from "./project4-pexy";
import GlucoFamily from "./project5-glucofamily";

export default function Projects() {
  return (
    <div className="mt-16 w-full flex flex-col">
      <p className="font-bold text-4xl mb-8 text-center">Mes réalisations</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-fit gap-4 self-center">
        {/* Project #1 - AllyMeal */}
        <AllyMeal />

        {/* Project #4 - Pexy */}
        <Pexy />

        {/* Project #2 - Blog */}
        <Blog />

        {/* Project #3 - AdaTools */}
        <AdaTools />

        {/* Project #5 - GlucoFamily */}
        <GlucoFamily />
      </div>
    </div>
  );
}
