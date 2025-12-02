import GithubCalendar from "react-github-calendar";

export default function GitHubCalendar() {
    return(
        <section className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Github Contribution Chart
            </h2>

            <GithubCalendar username="avnkrlo"/>
        </section>
    );
}