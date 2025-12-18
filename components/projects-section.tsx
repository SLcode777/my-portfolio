import Project1 from "./project1-allymeal";
import Project2 from "./project2-blog";
import Project3 from "./project3-comingsoon";

export default function Projects() {
  return (
    <div className="mt-16 w-full flex flex-col">
      <p className="font-bold text-4xl mb-8 text-center">Mes réalisations</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-fit gap-4 self-center">
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
