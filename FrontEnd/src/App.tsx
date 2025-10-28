import Skills from "./Sections/Skills";
import LandingPage from "./Sections/LandingPage";
import About from "./Sections/About";
import Portfolio from "./Sections/Portfolio";
import Quote from "./Sections/Quote";
import Testimonials from "./Sections/Testimonials";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <LandingPage />
      <About />
      <Skills />
      <Portfolio />
      <Quote />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
