import React from "react";
import {
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMariadb,
  SiGit,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

type SkillLogo = {
  icon: React.ReactNode;
  name: string;
  color: string;
};

type SkillsLogoMarqueeProps = {
  direction?: "left" | "right";
  speedSeconds?: number;
};

export default function SkillsMarquee({
  direction = "left",
  speedSeconds = 20,
}: SkillsLogoMarqueeProps) {
  const skills: SkillLogo[] = [
    { icon: <SiLaravel />, name: "Laravel", color: "#FF2D20" },
    { icon: <SiPhp />, name: "PHP", color: "#777BB4" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiVuedotjs />, name: "Vue", color: "#42B883" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
    { icon: <SiMariadb />, name: "MariaDB", color: "#003545" },
    { icon: <SiGit />, name: "Git", color: "#F1502F" },
    { icon: <SiGithub />, name: "Node", color: "#FFFFFF" },
    { icon: <SiNodedotjs />, name: "Node", color: "#215732" },
  ];

  const items = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden">
      <div
        className="group"
        style={
          {
            ["--marquee-duration" as any]: `${speedSeconds}s`,
          } as React.CSSProperties
        }
      >
        <div
          className={`flex w-max items-center gap-10 marquee-track min-h-[96px] ${
            direction === "right" ? "marquee-right" : "marquee-left"
          }`}
        >
          {items.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              style={{ ["--logo-color" as any]: skill.color }}
              className="group/logo flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 text-4xl
                        text-white/50 backdrop-blur-md transition
                        hover:scale-110 hover:border-white/40"
            >
              <span className="transition-colors duration-300 group-hover/logo:text-[color:var(--logo-color)]" title={skill.name}>
                {skill.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}