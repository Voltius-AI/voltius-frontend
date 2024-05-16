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
    <div className="flex flex-col bg-black">
      <Header />
      <div className="fixed bottom-3 right-3 z-[12000]">
        <a
          href="https://docsend.com/view/9jgbtiig65yamrew"
          rel="noopener"
          target="_blank"
          className=" text-xs box-border content-center items-center flex flex-row flex-nowrap gap-2.5 h-auto justify-center overflow-visible relative no-underline w-auto opacity-100 p-0 rounded-[16px]"
        >
          <div className=" text-xs box-border content-center items-center cursor-pointer flex flex-none flex-row flex-nowrap justify-center overflow-hidden relative will-change-[var(--framer-will-change-override,transform)] z-2 bg-[rgba(255,255,255,0.1)] shadow-[rgba(0,0,0,0.075)_0px_0.78363px_2.66434px_-0.535714px,rgba(0,0,0,0.075)_0px_1.91965px_6.5268px_-1.07143px,rgba(0,0,0,0.07)_0px_3.63745px_12.3673px_-1.60714px,rgba(0,0,0,0.067)_0px_6.35004px_21.5902px_-2.14286px,rgba(0,0,0,0.063)_0px_11.0519px_37.5764px_-2.67857px,rgba(0,0,0,0.05)_0px_20.2428px_68.8256px_-3.21429px,rgba(0,0,0,0.024)_0px_40px_136px_-3.75px] opacity-100 p-[4px] sm:rounded-[19px] rounded-[16px]">
            <div className="bg-white sm:px-[25px] sm:py-3 px-[20px] py-3  sm:rounded-[16px] rounded-[12px] text-xs cursor-pointer box-border flex-none h-auto relative whitespace-pre w-auto z-2 flex flex-col justify-start shrink-0 opacity-100">
              <p className="text-black font-semibold sm:text-base text-sm flex items-center gap-2 leading-3">
                White Paper{" "}
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </a>
      </div>
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
