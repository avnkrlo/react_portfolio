import Jumbotron from "../components/Jumbotron";
import Skills from "../components/SkillsComponent";
import Calendar from "../components/Calendar";
import ProjectCard from "../components/ProjectCard";
import AlternateTimeline from "../components/AlternateTimeline";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Landing() {
  const location = useLocation();
  
      useEffect(() => {
          if (location.state?.scrollTo === "contact") {
          const el = document.getElementById("contact-section");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
          }
      }, [location]);

  return (
    <div>
      <section id="home-section">
        <title>/avnkrlo Portfolio</title>
        <Jumbotron />
      </section>

      <section id="skill-section" className="scroll-mt-42">
        <section className="max-w-7xl mx-auto pt-12">
          <h1 className="text-4xl font-bold text-white">Skills & Technologies</h1>

          <Skills/>
        </section>
      </section>

      <section id="project-section" className="max-w-7xl mx-auto pt-12 scroll-mt-24">
        <h1 className="text-4xl font-bold text-white">Projects</h1>

        <div className="mt-10">
            <ProjectCard/>
        </div>
      </section>

      <section id="experience-section" className="max-w-7xl mx-auto pt-12 scroll-mt-24">
        <h1 className="text-4xl font-bold text-white">Experience</h1>

        <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto mt-10 text-center text-white">
          <AlternateTimeline/>
        </div>
      </section>

      <section id="contact-section" className="max-w-7xl mx-auto pt-12 scroll-mt-24">
        <h1 className="text-4xl font-bold text-white">Book a Call</h1>

        <section id="cal-section">
          <div className="flex flex-col items-center justify-center max-w-7xl mx-auto mt-10 text-center text-white">
              <Calendar/>
          </div>
        </section>
      </section>
    </div>
    
  );
}