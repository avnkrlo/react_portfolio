import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from '../assets/AKG-ICON.png'
import BtnDownloadCV from "./BtnDownloadCV";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white dark:bg-gray-900">
        <NavbarBrand href="/react_portfolio/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="AKG Logo"/>
        </NavbarBrand>

        <div className="flex items-center gap-3 md:order-2">
          <div className="hidden md:flex items-center gap-4">
              <NavLink to="/react_portfolio/contact" state={{ scrollTo: "cal" }} className="inline-flex items-center px-4 py-2 rounded-full
                text-sm font-medium text-white/80
                transition-all duration-300
                hover:text-white hover:bg-white/10">Book a Call
              </NavLink>
              <BtnDownloadCV/> 
          </div>
            <NavbarToggle />
        </div>

        <div className="w-full md:absolute md:left-1/2 md:-translate-x-1/2 md:flex md:justify-center">
          <NavbarCollapse className="w-full md:w-auto md:overflow-visible">
            <NavLink to="/react_portfolio/" end className={({ isActive }) => `relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300
              ${isActive ? "after:w-full text-blue-600" : "after:w-0"}`
              }>Home
            </NavLink>
            <NavLink to="/react_portfolio/project" className={({ isActive }) => `relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300
              ${isActive ? "after:w-full text-blue-600" : "after:w-0"}`
              }>Projects
            </NavLink>
            <NavLink to="/react_portfolio/about" className={({ isActive }) => `relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300
              ${isActive ? "after:w-full text-blue-600" : "after:w-0"}`
              }>About
            </NavLink>
            <NavLink to="/react_portfolio/contact" className={({ isActive }) => `relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300
              ${isActive ? "after:w-full text-blue-600" : "after:w-0"}`
              }>Contact
            </NavLink>

            <div className="mt-3 flex flex-col gap-3 md:hidden">
                <NavLink to="/react_portfolio/contact" className="inline-flex items-center px-4 py-2 rounded-full
                  text-sm font-medium text-white/80
                  transition-all duration-300
                  hover:text-white hover:bg-white/10">Book a Call
                </NavLink>
                <BtnDownloadCV/>
            </div>
          </NavbarCollapse>
        </div>
    </Navbar>
  );
}