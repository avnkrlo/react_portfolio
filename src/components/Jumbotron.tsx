import { Link } from "react-router-dom";
import Clipboard from "./Clipboard";
import TypingTextComponent from "./TypingTextComponent";
import BtnDownloadCV from "./BtnDownloadCV";

export default function Jumbotron() {
    return (
        <section className="relative bg-fixed bg-gray-700 bg-center bg-no-repeat bg-cover bg-blend-multiply bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]">
            <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl px-4 py-24 lg:py-56 mx-auto text-center">
                <p className="mb-4 text-4xl font-extrabold text-white uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                    Hi, <TypingTextComponent/>
                </p>
                <p className="text-3xl text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    Let's build your business idea into a reality.
                </p>

                <div className="flex items-center p-3">
                    <div className="w-full">
                        <Link to="mailto:aivan.karlo28@gmail.com?subject=Let%27s catch up and talk about opportunity!" type="button" 
                            className="inline-flex items-center px-5 py-5 text-md text-left text-white bg-blue-700 border border-blue-500 rounded-lg center-center hover:text-white sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-blue-700">
                                Get in touch

                                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                </svg>
                        </Link>
                    </div>

                    <div className="w-full m-5">
                        <Clipboard/>
                    </div>
                </div>
            </div>
        </section>
    )
}