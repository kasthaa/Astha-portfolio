 import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
       <main>
  <section id="home">
    <Hero />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="skills">
    <TechStack />
  </section>

  <section id="journey">
    <Journey />
  </section>

  <section id="contact">
    <Contact />
  </section>
</main>
    </>
  );
}

export default App;