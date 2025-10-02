import Skills from "./Sections/Skills";
import LandingPage from "./Sections/LandingPage";
import Navbar from "./Sections/Navbar";
import About from "./Sections/About";
import Portfolio from "./Sections/Portfolio";
import Test4 from "./Sections/Test4";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Portfolio />
      <Test4 />
    </div>
  );
}

export default App;
