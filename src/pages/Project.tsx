import ProjectCard from "../components/ProjectCard";

export default function Project() {
    return (
        <>
            <title>Projects | /avnkrlo</title>
            <div className="max-w-7xl mx-auto pt-24">
                <h1 className="text-center text-4xl font-bold text-white">Projects</h1>

                <div className="mt-10">
                    <ProjectCard/>
                </div>
            </div>
        </>
    );
}