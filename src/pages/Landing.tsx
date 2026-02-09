import Jumbotron from "../components/Jumbotron";
import SkillsMarquee from "../components/SkillsMarquee";
import GitHubCalendar from "../components/GithubCalendar";

export default function Landing() {
  return (
    <div>
      <title>Home | /avnkrlo</title>

      <Jumbotron />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>

        <SkillsMarquee direction="left" speedSeconds={18} />
      </section>

      <GitHubCalendar/>
    </div>
  );
}