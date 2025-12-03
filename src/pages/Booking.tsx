import Calendar from "../components/Calendar";

export default function Booking() {
    return (
        <>
            <title>Booking | /avnkrlo</title>

            <div>
                <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto text-center text-white">
                    <Calendar/>
                </div>
            </div>
        </>
    );
}