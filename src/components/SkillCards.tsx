import {
  FaReact,
  FaJs,
  FaHtml5,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
} from 'react-icons/si';

const skills = [
  {
    title: 'JavaScript',
    icon: <FaJs className="text-yellow-400" />,
    description:
      'Great knowledge with ES6+, focusing on understanding what happens under the hood.',
  },
  {
    title: 'React.js',
    icon: <FaReact className="text-cyan-400" />,
    description:
      'Familiar with many concepts. Principle is to write clean and maintainable code.',
  },
  {
    title: 'HTML/CSS/SASS',
    icon: <FaHtml5 className="text-orange-500" />,
    description:
      'Designs that encourage user trust. Focus on pleasing and effective UI.',
  },
  {
    title: 'Tailwind',
    icon: <SiTailwindcss className="text-sky-400" />,
    description: 'Go-to CSS framework for styling modern web apps.',
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript className="text-blue-500" />,
    description:
      '"Fix bugs in development, not in production." Main language for new projects.',
  },
  {
    title: 'Vite',
    icon: <SiVite className="text-purple-500" />,
    description: 'Modern toolchain. Love the speed and dev experience.',
  },
  {
    title: 'Next.js',
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    description: 'Used in most client projects. Great for SSR and routing.',
  },
  {
    title: 'And more',
    icon: <FaGitAlt className="text-red-500" />,
    description:
      'Git, Styled Components, VSCode, Adobe, Yarn, Bootstrap, and more tools I explore daily.',
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
            className="bg-gradient-to-br from-white/60 to-gray-100/40 dark:from-slate-800 dark:to-slate-700 rounded-xl p-5 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-2xl">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
