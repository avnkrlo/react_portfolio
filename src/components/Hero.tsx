import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div id="about-section" className="bg-gray-900">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="flex rounded-full place-content-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm font-medium backdrop-blur-md">
              <span className="relative flex items-center justify-center h-2.5 w-2.5">
                <span className="absolute h-full w-full rounded-full bg-green-400 opacity-70 animate-pulse-out"></span>
                <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Available for work
            </div>
          </div>
          <div className="text-justify">
            <h1 className="text-5xl text-center font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Hi, I'm Aivan
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Software engineer, with 2 years of experience in maintaining and web development using Laravel, PHP, JavaScript & MySQL, creating software using C#. Now I'm trying to explore other stack especially React + TypeScript.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="mailto:aivan.karlo28@gmail.com?subject=Let%27s catch up and talk about opportunity!"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >Get in touch
              </Link>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}