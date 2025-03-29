import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavbarComponent/>
        <Jumbotron/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
