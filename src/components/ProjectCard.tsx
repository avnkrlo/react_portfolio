import { FiUsers, FiClock } from "react-icons/fi";
// FiExternalLink
// FiGithub

type ProjectProps = {
  title?: string;
  tagline?: string;
  description?: string;
  status?: "In Progress" | "Live" | "Paused";
  yourRole?: string[];
  collaboratorName?: string;
  collaboratorRole?: string;
  collaboratorName2?: string;
  collaboratorRole2?: string;
  tech?: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export default function ProjectCard({
  title = "HRIS",
  tagline = "Personal Collaborative Project",
  description = "An HR management tool where this system makes the process of HR much more smoother, productive and accurate.",
  status = "In Progress",
  yourRole = ["Backend (PHP, Laravel, JavaScript, AlpineJS)", "API integration", "Database Management", "Git Version Control"],
  collaboratorName = "Rodel Junia",
  collaboratorRole = "Backend / API / UI/UX",
  collaboratorName2 = "Kimberly Ann David",
  collaboratorRole2 = "Project Management / QA",
  tech = ["Laravel", "PHP", "jQuery", "JavaScript", "AlpineJS", "Vite", "MariaDB"],
  // liveUrl = "https://example.com",
  // repoUrl = "https://github.com/rdsps20/payroll",
}: ProjectProps) {
  const statusStyles =
    status === "Live"
      ? "bg-emerald-500/15 text-emerald-200 border-emerald-400/20"
      : status === "Paused"
      ? "bg-amber-500/15 text-amber-200 border-amber-400/20"
      : "bg-sky-500/15 text-sky-200 border-sky-400/20";

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
        {/* subtle background accents */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {title}
                </h3>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${statusStyles}`}
                >
                  <FiClock className="opacity-80" />
                  {status}
                </span>
              </div>

              <p className="mt-2 text-sm text-white/70">{tagline}</p>
              <p className="mt-4 max-w-2xl text-base text-white/85 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Links */}
            {/* <div className="flex gap-3">
              {repoUrl && (
                <a
                  href={"repoUrl"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white transition"
                >
                  <FiGithub />
                  Repo
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/15 px-4 py-2 text-sm text-white hover:bg-blue-500/25 transition"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              )}
            </div> */}
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-white/10" />

          {/* Content grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Your role */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white">Your role</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {yourRole.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaboration */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <FiUsers className="text-white/70" />
                Collaboration
              </h4>
              <p className="mt-3 text-sm text-white/80">
                Built with{" "}
                <span className="font-semibold text-white">{collaboratorName}</span>{" "}
                — <span className="text-white/70">{collaboratorRole}</span>
              </p>

              <p className="mt-3 text-sm text-white/80">
                and{" "}
                <span className="font-semibold text-white">{collaboratorName2}</span>{" "}
                — <span className="text-white/70">{collaboratorRole2}</span>
              </p>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
                {/* <p className="text-xs text-white/60">Tip</p> */}
                <p className="mt-1 text-sm text-white/80">
                  My friend had this dream and then started to build it, he then invited me midway when the system starts to grow bigger and bigger. Currently we are a team of 3. Me, my friend Rodel, and our previous QA and Front-End Team Leader Ms. Kimberly
                </p>
              </div>
            </div>

            {/* Tech stack */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold text-white">Tech stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* <div className="mt-5">
                <button
                  type="button"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                  onClick={() => alert("Optional: open a modal for screenshots / case study")}
                >
                  View screenshots / case study
                </button>
              </div> */}
            </div>
          </div>

          {/* Footer line */}
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-white/60">
            <p>Last updated: Jan 2026</p>
            {/* <p>Recruiter-friendly: Clear role + collaboration + links</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
