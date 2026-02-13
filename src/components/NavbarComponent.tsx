import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from '../assets/AKG-ICON.png'

export default function NavbarComponent() {
  const scrollToSection = (id: string): void => {
    const section: HTMLElement | null = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white dark:bg-gray-900">
        <NavbarBrand href="/react_portfolio/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="AKG Logo"/>
        </NavbarBrand>

        <div className="flex items-center gap-3 md:order-2">
          <div className="hidden md:flex items-center gap-4">
              <button onClick={() => scrollToSection("contact-section")} className="inline-flex items-center px-4 py-2 rounded-full
                text-sm font-medium text-white/80
                transition-all duration-300
              hover:text-white hover:bg-white/10">Book a Call
              </button>
          </div>
            <NavbarToggle />
        </div>

        <div className="w-full md:absolute md:left-1/2 md:-translate-x-1/2 md:flex md:justify-center">
          <NavbarCollapse className="w-full md:w-auto md:overflow-visible">
            <button onClick={() => scrollToSection("home-section")} className="relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Home
            </button>
            
            <button onClick={() => scrollToSection("skill-section")} className="relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Skills
            </button>

            <button onClick={() => scrollToSection("project-section")} className="relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Projects
            </button>

            <button onClick={() => scrollToSection("experience-section")} className="relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Experience
            </button>

            <button onClick={() => scrollToSection("contact-section")} className="relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Contact
            </button>

            <div className="mt-3 flex flex-col gap-3 md:hidden">
                <button onClick={() => scrollToSection("contact-section")} className="inline-flex items-center px-4 py-2 rounded-full
                  text-sm font-medium text-white/80
                  transition-all duration-300
                  hover:text-white hover:bg-white/10">Book a Call
                </button>
            </div>
          </NavbarCollapse>
        </div>
    </Navbar>
  );
}