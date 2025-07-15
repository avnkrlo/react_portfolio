import GitHubCalendar from "../components/GithubCalendar";

export default function Home() {
    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-xl mx-auto text-center text-white">
                    <GitHubCalendar/>
                </div>
            </div>
        </>
    );
}