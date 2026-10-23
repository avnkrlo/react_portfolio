import {
  FaReact,
  FaJs,
  FaHtml5,
  FaGitAlt,
  FaVuejs,
  FaLaravel,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';

const skills = [
  {
    title: 'Laravel',
    icon: <FaLaravel className="text-red-400" />,
  },
  {
    title: 'JavaScript',
    icon: <FaJs className="text-yellow-200" />,
  },
  {
    title: 'Vue.js',
    icon: <FaVuejs className="text-green-400" />,
  },
  {
    title: 'React.js',
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    title: 'HTML/CSS/SASS',
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    title: 'Tailwind',
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    title: 'Vite',
    icon: <SiVite className="text-purple-500" />,
  },
  {
    title: 'Git',
    icon: <FaGitAlt className="text-red-500" />,
  },
];

export default function SkillsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white transition-colors duration-300">
        Skills & Tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-white/60 to-gray-100/40 dark:from-slate-800 dark:to-slate-700 rounded-xl p-5 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-2xl">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {skill.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
