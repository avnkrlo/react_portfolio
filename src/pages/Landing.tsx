// import Jumbotron from "../components/Jumbotron";
import Skills from "../components/SkillsComponent";
import Calendar from "../components/Calendar";
import ProjectCard from "../components/ProjectCard";
import AlternateTimeline from "../components/AlternateTimeline";

export default function Landing() {
  return (
    <div className="overflow-x-hidden">
      <title>/avnkrlo Portfolio</title>

      <section id="about-section">
        {/* <Jumbotron /> */}
      </section>

      <section id="skill-section" className="scroll-mt-42">
        <div className="max-w-7xl mx-auto pt-12">
          <h1 className="text-4xl font-bold text-white">Skills & Technologies</h1>

          <Skills/>
        </div>
      </section>

      <section id="project-section" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto pt-12">
          <h1 className="text-4xl font-bold text-white">Projects</h1>

          <div className="mt-10">
              <ProjectCard/>
          </div>
        </div>
      </section>

      <section id="experience-section" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto pt-12">
          <h1 className="text-4xl font-bold text-white">Experience</h1>

          <section className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto mt-10 text-center text-white">
            <AlternateTimeline/>
          </section>
        </div>
      </section>

      <section id="contact-section" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto pt-12">
          <h1 className="text-4xl font-bold text-white">Contact</h1>

            <section className="flex flex-col items-center justify-center max-w-7xl mx-auto mt-10 text-center text-white">
                <Calendar/>
            </section>
        </div>
      </section>
    </div>
  );
}