import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="mt-10 bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">

                    <div className="mb-6 md:mb-0 gap-8">
                        <Link to="/react_portfolio/" className="flex items-center">
                            <span className="mb-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Aivan Karlo Geronimo</span>
                        </Link>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <span>Feel free to reach out to me on my socials. You may also book me for a call.</span>
                            </li>
                        </ul>

                        <div className="sm:flex sm:items-center sm:justify-between">
                            <div className="flex mt-4 sm:justify-center sm:mt-0">
                                <Link to="https://www.linkedin.com/in/aivangeronimo/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                    </svg>
                                    <span className="sr-only">LinkedIn</span>
                                </Link>

                                {/* <Link to="https://www.reddit.com/user/weezywiz29/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12.008 16.521a3.84 3.84 0 0 0 2.47-.77v.04a.281.281 0 0 0 .005-.396.281.281 0 0 0-.395-.005 3.291 3.291 0 0 1-2.09.61 3.266 3.266 0 0 1-2.081-.63.27.27 0 0 0-.38.381 3.84 3.84 0 0 0 2.47.77Z"/>
                                        <path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-4.845-1.407A1.463 1.463 0 0 1 18.67 12a1.46 1.46 0 0 1-.808 1.33c.01.146.01.293 0 .44 0 2.242-2.61 4.061-5.829 4.061s-5.83-1.821-5.83-4.061a3.25 3.25 0 0 1 0-.44 1.458 1.458 0 0 1-.457-2.327 1.458 1.458 0 0 1 2.063-.064 7.163 7.163 0 0 1 3.9-1.23l.738-3.47v-.006a.31.31 0 0 1 .37-.236l2.452.49a1 1 0 1 1-.132.611l-2.14-.45-.649 3.12a7.11 7.11 0 0 1 3.85 1.23c.259-.246.6-.393.957-.405Z" clipRule="evenodd"/>
                                        <path fill="currentColor" d="M15.305 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4.625 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                                    </svg>
                                    <span className="sr-only">Reddit</span>
                                </Link> */}

                                <Link to="https://stackoverflow.com/users/21461087/akg" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 20v-5h2v6.988H3V15h1.98v5H17Z"/>
                                        <path d="m6.84 14.522 8.73 1.825.369-1.755-8.73-1.825-.369 1.755Zm1.155-4.323 8.083 3.764.739-1.617-8.083-3.787-.739 1.64Zm3.372-5.481L10.235 6.08l6.859 5.704 1.132-1.362-6.859-5.704ZM15.57 17H6.655v2h8.915v-2ZM12.861 3.111l6.193 6.415 1.414-1.415-6.43-6.177-1.177 1.177Z"/>
                                    </svg>
                                    <span className="sr-only">StackOverflow</span>
                                </Link>

                                <Link to="https://github.com/avnkrlo" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="sr-only">GitHub</span>
                                </Link>

                                <Link to="https://wa.link/4bd27x" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
                                        <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                                    </svg>
                                    <span className="sr-only">WhatsApp</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">General</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="/react_portfolio/" className="hover:underline">Home</Link>
                                </li>

                                <li className="mb-4">
                                    <Link to="/react_portfolio/project" className="hover:underline">Project</Link>
                                </li>

                                <li>
                                    <Link to="/react_portfolio/about" className="hover:underline">About</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Website</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="/react_portfolio/contact" className="hover:underline ">Contact</Link>
                                </li>

                                <li className="mb-4">
                                    <Link to="/react_portfolio/contact" className="hover:underline">Book a Call</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-900 dark:text-white">Let's work together in making your imagination into reality.</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="flex items-center gap-2 mb-4">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Airport Road, Abu Dhabi, United Arab Emirates</span>
                                </li>

                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1976D2">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1976D2" strokeWidth="2" strokeLinecap="round"></rect> 
                                        </g>
                                    </svg>
                                    <Link to="mailto:aivan.karlo28@gmail.com?subject=Let%27s catch up and talk about opportunity!" className="text-blue-500 hover:underline">aivan.karlo28@gmail.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 
                            <Link to="/react_portfolio/" className="hover:underline"> Aivan Karlo Geronimo</Link>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>        
        </>
    );
}