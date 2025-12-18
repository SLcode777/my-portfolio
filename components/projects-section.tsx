import Project1 from "./project1-allymeal";
import Project2 from "./project2-blog";
import Project3 from "./project3-comingsoon";

export default function Projects() {
  return (
    <div className="mt-16">
      <p className="font-bold text-4xl mb-8 text-center">Mes réalisations</p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-16 justify-center items-center">
        {/* Project #1 - AllyMeal */}
        <Project1 />

        {/* Project #2 - Blog */}
        <Project2 />

        {/* Project #3 - ComingSoon */}
        <Project3 />
      </div>
    </div>
  );
}
