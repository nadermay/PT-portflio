import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Motivation from "./components/Motivation";
import Pricing from "./components/Pricing";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Motivation />
        <Testimonials />
        <Pricing />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

export default App;
