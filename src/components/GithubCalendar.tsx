import GithubCalendar from "react-github-calendar";

export default function GitHubCalendar() {
    return(
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white transition-colors duration-300">
                Github Contribution Chart
            </h2>

            <GithubCalendar username="avnkrlo"/>
        </section>
    );
}