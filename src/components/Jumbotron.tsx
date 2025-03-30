import { Link } from "react-router-dom";

export default function Jumbotron() {
    return (
        <>
            <section className="relative bg-fixed bg-gray-700 bg-center bg-no-repeat bg-cover bg-blend-multiply" style={{backgroundImage:"url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg'), height: 700px"}}>
                <div className="max-w-screen-xl px-4 py-24 mx-auto lg:py-56">
                    <p className="mb-4 text-4xl font-extrabold text-white uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                    Our business is to guarantee the success of yours.
                    </p>
                    <p className="text-3xl text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    Every business is different; every business needs specific outsourcing services.
                    And we can help you there. CCK City Network, Inc. has the keys to help you accelerate the growth of your business.
                    </p>

                    <div className="grid place-content-end">
                        <Link to="">
                            <button className="inline-flex items-center px-5 py-5 text-xl text-left text-white bg-orange-600 border border-orange-300 rounded-lg center-center hover:text-orange-300 sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-orange-300">
                                GET QUOTE
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}