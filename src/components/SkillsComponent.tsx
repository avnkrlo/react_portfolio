import SkillIconsComponent from "../components/SkillIconsComponent";

import {
  siLaravel,
  siPhp,
  siJavascript,
  siReact,
  siVuedotjs,
  siTypescript,
  siTailwindcss,
  siMysql,
  siMariadb,
  siGit,
  siGithub,
  siNodedotjs,
  siHtml5,
  siCss,
  siVite
} from "simple-icons";

export const skills = [
  { name: "Laravel", icon: siLaravel },
  { name: "PHP", icon: siPhp },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "React", icon: siReact },
  { name: "Vue.js", icon: siVuedotjs },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "MySQL", icon: siMysql },
  { name: "MariaDB", icon: siMariadb },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
  { name: "HTML", icon: siHtml5 },
  { name: "CSS", icon: siCss },
  { name: "Vite", icon: siVite },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center">
        Skills & Technologies
    </h2>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {skills.map((skill) => (
        <div
            key={skill.name}
            className="flex flex-col items-center gap-3 p-4 rounded-xl
                        bg-white shadow-sm hover:shadow-md
                        transition hover:-translate-y-1"
            >
            <SkillIconsComponent icon={skill.icon} />
            <span className="text-sm font-medium">{skill.name}</span>
            </div>
        ))}
    </div>
    </section>
  );
}
