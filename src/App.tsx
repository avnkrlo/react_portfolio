import Footer from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavbarComponent/>
        <main className="grow">
          <Outlet/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
