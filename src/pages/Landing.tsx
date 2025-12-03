import Jumbotron from "../components/Jumbotron";
import SkillCards from "../components/SkillCards";
import GitHubCalendar from "../components/GithubCalendar";

function Landing() {
  return (
    <div>
      <title>Home | /avnkrlo</title>

      <Jumbotron />

      <SkillCards/>

      <GitHubCalendar/>
    </div>
  );
}

export default Landing;