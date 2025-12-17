import Project1 from "./project1-allymeal";
import Project2 from "./project2-blog";

export default function Projects() {
  return (
    <div className="mt-16">
      <p className="font-bold text-4xl mb-8">Mes réalisations</p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-16">
        {/* Project #1 - AllyMeal */}
        <Project1 />

        {/* Project #2 - Blog */}
        <Project2 />
      </div>
    </div>
  );
}
