import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Breads } from "./components/Breads";
import { Banner } from "./components/Banner";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Breads />
      <Banner />
      <Testimonials />
      <Contact />
    </>
  );
}
