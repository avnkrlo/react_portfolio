import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/AKG-ICON.png'
import BtnDownloadCV from "./BtnDownloadCV";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="w-full flex justify-between items-center">
        <NavbarBrand href="/react_portfolio/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="AKG Logo"/>
        </NavbarBrand>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <NavbarCollapse className="mx-auto">
            <NavLink to="/react_portfolio/" className={({ isActive }) => `relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-2px after:bg-blue-600 after:transition-all after:duration-300
              ${isActive ? "after:w-full text-blue-600" : "after:w-0"}`
              }>Home
            </NavLink>
            {/* <NavLink className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to="/react_portfolio/work">Work</NavLink> */}
            <NavLink to="/react_portfolio/project" className={({ isActive }) => `relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-2px after:bg-blue-600 after:transition-all after:duration-300
              ${isActive ? "after:w-full text-blue-600" : "after:w-0"}`
              }>Projects</NavLink>
            <NavLink to="/react_portfolio/about" className={({ isActive }) => `relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-2px after:bg-blue-600 after:transition-all after:duration-300
              ${isActive ? "after:w-full text-blue-600" : "after:w-0"}`
              }>About</NavLink>
            <NavLink to="/react_portfolio/contact" className={({ isActive }) => `relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-2px after:bg-blue-600 after:transition-all after:duration-300
              ${isActive ? "after:w-full text-blue-600" : "after:w-0"}`
              }>Contact</NavLink>
          </NavbarCollapse>
        </div>

        <div className="flex md:order-2">
            <Link to="/react_portfolio/booking" className="items-center px-1.5 py-2 text-md text-center text-white sm:ms-4"
                >Book a Call
            </Link>
            
            <BtnDownloadCV/>
          <NavbarToggle />
        </div>
      </div>
    </Navbar>
  );
}


// import { Link, NavLink } from "react-router-dom";
// import logo from '../assets/AKG-ICON.png';
// import "../Nav.css";

// export default function NavbarComponent() {
//     return ( 
//         <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <Link to="/react_portfolio/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                     <img src={logo} className="h-8" alt="Flowbite Logo"/>
//                 </Link>

//                 <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//                     <Link to="/react_portfolio/booking" type="button" className="items-center px-1.5 py-1.5 text-md text-left text-white bg-blue-700 border border-blue-500 rounded-lg center-center hover:text-white sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-blue-700">Book a Call</Link>
//                     <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//                         <span className="sr-only">Open main menu</span>
//                         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//                         </svg>
//                     </button>
//                 </div>
                
//                 <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//                     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                         <li>
//                             <NavLink to="/react_portfolio/home" className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</NavLink>
//                         </li>

//                         <li>
//                             <NavLink to="/react_portfolio/work" className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Work</NavLink>
//                         </li>

//                         <li>
//                             <NavLink to="/react_portfolio/project" className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project</NavLink>
//                         </li>

//                         <li>
//                             <NavLink to="/react_portfolio/about" className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
//                         </li>

//                         <li>
//                             <NavLink to="/react_portfolio/contact" className="py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }