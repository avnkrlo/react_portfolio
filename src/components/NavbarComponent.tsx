import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import logo from '../assets/AKG-ICON.png'
import { Link } from 'react-router-dom';
import Resume from '../assets/cv/AIVAN_KARLO_GERONIMO.pdf';
import { useState } from "react";

export default function NavbarComponent() {
  const navButtonClass =
    "relative px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 hover:bg-gray-900/5 dark:hover:bg-white/10";
  const [activeSection, setActiveSection] = useState("about-section");
  const navItems = [
      {
        Label: "About Me",
        Section: "about-section"
      }, 
      {
        Label: "Skills",
        Section: "skill-section",
      },
      {
        Label: "Projects",
        Section: "project-section",
      },
      {
        Label: "Experience",
        Section: "experience-section",
      },
      {
        Label: "Contact",
        Section: "contact-section",
      },
    ];

  const scrollToSection = (id: string): void => {
    const section: HTMLElement | null = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar fluid rounded className="sticky top-6 z-50 mx-auto w-[75%] max-w-4xl rounded-2xl md:rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg shadow-black/10 border border-white/20">
        <NavbarBrand>
          <button onClick={() => scrollToSection("about-section")}>
            <img src={logo} className="mx-auto items-center mr-3 h-6 sm:h-9" alt="AKG Logo"/>
          </button>
        </NavbarBrand>

        <div className="flex items-center gap-3 md:order-2">
            <NavbarToggle />
        </div>

        <NavbarCollapse className="w-full md:w-auto md:overflow-visible md:mt-0 md:flex-row md:bg-transparent md:p-0 md:shadow-none">
          {navItems.map((item) => 
            <button
              key={item.Section}
              onClick={() => { 
                setActiveSection(item.Section);
                scrollToSection(item.Section);
              }}
              className={`relative px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300
                ${
                  activeSection == item.Section
                  ? "bg-indigo-500 text-white"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-900/5 dark:hover:bg-white/10"
                }
                `}
              >
                {item.Label}
            </button>
          )}

          <Link to={ Resume } target="_blank" className={"mx-auto border text-center relative px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 hover:bg-gray-900/5 dark:hover:bg-white/10"}>
            Resume
          </Link>
        </NavbarCollapse>
    </Navbar>
  );
}