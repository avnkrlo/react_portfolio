import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <NavbarComponent/>
      <Hero/>
        <main className="grow">
          <Outlet/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
