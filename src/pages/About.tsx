import AlternateTimeline from "../components/AlternateTimeline";
import AvatarComponent from "../components/AvatarComponent";

export default function About() {
    return (
        <>
            <title>About | /avnkrlo</title>
            
            <div className="max-w-7xl mx-auto pt-24">
                <div className="flex flex-col items-start min-h-screen max-w-7xl mx-auto">
                    <AvatarComponent/>
                </div>

                <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto text-center text-white">
                    <AlternateTimeline/>
                </div>
            </div>
        </>
    );
}