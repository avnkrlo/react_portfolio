import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import logo from '../assets/AKG-ICON.png'

export default function NavbarComponent() {
  const scrollToSection = (id: string): void => {
    const section: HTMLElement | null = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar fluid rounded className="sticky top-6 z-50 mx-auto w-[95%] max-w-4xl rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg shadow-black/10 border border-white/20">
        <NavbarBrand>
          <button onClick={() => scrollToSection("about-section")}>
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="AKG Logo"/>
          </button>
        </NavbarBrand>

        <div className="flex items-center gap-3 md:order-2">
            <NavbarToggle />
        </div>

        <div className="hidden md:flex items-center gap-6 mx-auto">
          <NavbarCollapse className="w-full md:w-auto md:overflow-visible">
            <button onClick={() => scrollToSection("about-section")} className="relative px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 hover:bg-gray-900/5 dark:hover:bg-white/10">
              About Me
            </button>
            
            <button onClick={() => scrollToSection("skill-section")} className="relative px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 hover:bg-gray-900/5 dark:hover:bg-white/10">
              Skills
            </button>

            <button onClick={() => scrollToSection("project-section")} className="relative px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 hover:bg-gray-900/5 dark:hover:bg-white/10">
              Projects
            </button>

            <button onClick={() => scrollToSection("experience-section")} className="relative px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 hover:bg-gray-900/5 dark:hover:bg-white/10">
              Experience
            </button>

            <button onClick={() => scrollToSection("contact-section")} className="relative px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 hover:bg-gray-900/5 dark:hover:bg-white/10">
              Contact
            </button>
          </NavbarCollapse>
        </div>
    </Navbar>
  );
}