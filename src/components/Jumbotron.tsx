import { Link } from "react-router-dom";

export default function Jumbotron() {
    return (
        <>
            <section className="relative bg-fixed bg-gray-700 bg-center bg-no-repeat bg-cover bg-blend-multiply" style={{backgroundImage:"url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg'), height: 700px"}}>
                <div className="place-items-center max-w-screen-xl px-4 py-24 lg:py-56">
                    <p className="mb-4 text-4xl font-extrabold text-white uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                    Hi, My name is Aivan Karlo Geronimo
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
                            <div className="w-full">
                                <div className="relative">
                                    <label htmlFor="npm-install-copy-button" className="sr-only">Label</label>
                                    <input id="npm-install-copy-button" type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="aivan.karlo28@gmail.com" disabled readOnly/>
                                    <button data-copy-to-clipboard-target="npm-install-copy-button" data-tooltip-target="tooltip-copy-npm-install-copy-button" className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
                                        <span id="default-icon">
                                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                            </svg>
                                        </span>
                                        <span id="success-icon" className="hidden">
                                            <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                            </svg>
                                        </span>
                                    </button>
                                    <div id="tooltip-copy-npm-install-copy-button" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                                        <span id="default-tooltip-message">Copy to clipboard</span>
                                        <span id="success-tooltip-message" className="hidden">Copied!</span>
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}