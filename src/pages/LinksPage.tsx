import { Link } from "react-router-dom";

export default function LinksPage() {
    return (
        <>
            <div className="grid place-content-center mt-20">
                <Link to="https://www.linkedin.com/in/aivangeronimo/" target="_blank" rel="noopener noreferrer" className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="font-normal text-white">LinkedIn</p>
                </Link>
            </div>
        </>
    )
}