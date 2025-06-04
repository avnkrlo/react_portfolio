import GitHubCalendar from "../components/GithubCalendar";

export default function Home() {
    return (
        <>
            <div className="mt-15">
                <div className="place-items-center max-w-screen-xl pt-5 text-white">
                    Home

                    <GitHubCalendar/>
                </div>
            </div>
        </>
    );
}