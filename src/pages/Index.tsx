import About from "@/components/site/About";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import Journey from "@/components/site/Journey";
import Nav from "@/components/site/Nav";
import OpenSourceSection from "@/components/site/OpenSourceSection";
import Projects from "@/components/site/Projects";
import Volunteering from "@/components/site/Volunteering";

const Index = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Projects />
      <OpenSourceSection />
      <Journey />
      <Volunteering />
      <About />
    </main>
    <Footer />
  </>
);

export default Index;
