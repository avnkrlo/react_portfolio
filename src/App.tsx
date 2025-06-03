import Footer from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";
// import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="bg-black">
      <NavbarComponent/>
        {/* <Jumbotron/> */}
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
