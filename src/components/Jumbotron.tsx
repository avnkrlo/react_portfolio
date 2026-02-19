import { Link } from "react-router-dom";
import Cv from '../assets/cv/Resume - Aivan Karlo Geronimo.pdf';

export default function Jumbotron() {
    return (
        <section id="about-section" className="-mt-20 pt-20 bg-fixed bg-gray-700 bg-center bg-no-repeat bg-cover bg-blend-multiply bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]">
            
            <div className="flex flex-col place-items-start min-h-screen pt-24 max-w-7xl lg:py-56 mx-auto">
                <p className="text-4xl font-extrabold text-white uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                    Hi, I'm Aivan
                </p>
                <p className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    Aspiring software engineer, with a little bit of experience in creating software using C# and web development using Laravel & PHP. Now I'm trying to explore other stack.
                </p>

                <p className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl mt-10">
                    My hobbies are mainly, playing computer games. But I love travelling, playing with my pets, and hopefully "running" soon.
                </p>

                <div className="flex items-center pt-3">
                    <div className="w-full">
                        <Link to="mailto:aivan.karlo28@gmail.com?subject=Let%27s catch up and talk about opportunity!" type="button" 
                            className="flex items-center justify-center gap-1.5 w-45 h-17 px-5 whitespace-nowrap text-md text-left text-white bg-blue-700 border border-blue-500 rounded-lg transition-all duration-300 ease-out hover:bg-white/20 hover:backdrop-blur-lg hover:border-white/50 hover:shadow-lg hover:scale-105
                                focus:ring-4 focus:ring-blue-700">
                                <span className="mr-1.5 text-black dark:text-white">Get in touch</span>

                                <svg className="w-6 h-6 shrink-0 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                </svg>
                        </Link>
                    </div>

                    <div className="w-full m-3">
                        <Link to={Cv} target='_blank'
                            className="flex items-center justify-center gap-1.5 w-45 h-17 px-5 whitespace-nowrap text-md text-left text-white bg-blue-700 border border-blue-500 rounded-lg transition-all duration-300 ease-out hover:bg-white/20 hover:backdrop-blur-lg hover:border-white/50 hover:shadow-lg hover:scale-105
                                focus:ring-4 focus:ring-blue-700">
                                <svg className="w-6 h-6 shrink-0 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M9 15L12 18M12 18L15 15M12 18L12 12M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span className="ml-1.5 text-black dark:text-white">View My CV</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}