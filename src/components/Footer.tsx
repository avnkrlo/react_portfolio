import { Link } from "react-router-dom";
import Resume from '../assets/cv/AIVAN_KARLO_GERONIMO.pdf';

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto py-32 sm:py-48 lg:py-56">
          <div>
            <h1 className="text-center font-semibold text-balance text-white sm:text-7xl italic">
              Let's build something great together!
            </h1>
            <p className="mt-8 text-lg text-center font-medium text-pretty text-gray-300 sm:text-xl/8">
              Open to Software Engineer/Web Developer opportunities worldwide, including visa-sponsored roles in New Zealand.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="mailto:aivan.karlo28@gmail.com?subject=Let%27s catch up and talk about opportunity!"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >Get in touch
              </Link>
              <Link to={ Resume } target="_blank"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}