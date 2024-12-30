import Projectscard from "./Projectscard";

function Projects(){

    return(
        <main>
<h2 className="text-gray-400   uppercase text-center pt-8 ">portfolio</h2>
<h1 className="  capitalize text-center font-bold text-4xl mb-6 "> featured projects </h1>
<div className="   p-5 grid place-items-center lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2  grid-cols-1  gap-5 ">

<Projectscard tag="HTML, CSS, Javascript" title = " Todo" description="this is todo website i created "  />
<Projectscard tag="HTML ,CSS , Javascript" title = " Quotes Generator " description=" This is the card description that appears on hover." />
</div>
        </main>
    );

}

export default Projects;