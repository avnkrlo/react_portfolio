import Calendar from "../components/Calendar";

export default function Booking() {
    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-xl mx-auto text-center text-white">
                    <Calendar/>
                </div>
            </div>
        </>
    );
}