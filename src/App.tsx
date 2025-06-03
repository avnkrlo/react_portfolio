import Footer from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-black">
      <NavbarComponent/>
        <Home/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
