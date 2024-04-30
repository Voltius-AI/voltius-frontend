import Image from "next/image";
import Header, { propTabs } from "./components/main/Header";
import Hero from "./components/main/Hero";
import About from "./components/main/About";
import Technology from "./components/main/Technology";
import WhitePaper from "./components/main/WhitePaper";
import Roadmap from "./components/main/Roadmap";
import OurTeam from "./components/main/OurTeam";
import Blogs from "./components/main/Blogs";
import Footer from "./components/main/Footer";
import ContactUs from "./components/main/ContactUs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Technology />
      <WhitePaper />
      <Roadmap />
      <OurTeam />
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  );
}
