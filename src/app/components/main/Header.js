/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { create } from "zustand";

export const propTabs = [
  { title: "Home", value: "home" },
  { title: "About", value: "about" },
  { title: "Tech", value: "tech" },
  { title: "White Paper", value: "white_paper" },
  { title: "Roadmap", value: "roadmap" },
  { title: "Our Team", value: "our_team" },
  { title: "Blog", value: "blog" },
  { title: "Contact", value: "contact" },
];

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState(null);

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export const useNavStore = create((set) => ({
  active: propTabs[0],
  setActive: (value) =>
    set((state) => ({ active: propTabs.find((item) => value === item.value) })),
}));

const Header = () => {
  const active = useNavStore((state) => state.active);
  const setActive = useNavStore((state) => state.setActive);
  const scrollDirection = useScrollDirection();

  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0].value);

    document?.getElementById(newTabs[0]?.value)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <header
      className={cn(
        "transition-all duration-500 z-50 fixed top-0 left-0 right-0 sm:mt-4 sm:ml-3 sm:mr-3 mt-2 ml-2 mr-2 flex items-center justify-between lg:flex-row flex-col gap-4",
        `${scrollDirection === "down" ? "md:-top-36 -top-48" : "top-0"}`
      )}
    >
      <img
        src="/logo_mono.svg"
        alt="logo"
        className="w-36 block backdrop-blur-xl bg-slate-900 bg-opacity-45 rounded-2xl pl-4 pr-5 pt-3 pb-2"
      />
      <nav
        className={
          "flex flex-row items-center flex-wrap justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar backdrop-blur-xl bg-slate-900 bg-opacity-45 p-1 rounded-2xl"
        }
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={
              "relative sm:px-4 px-3 py-2 outline-none rounded-xl bg-transparent"
            }
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={
                  "absolute inset-0 bg-slate-400 bg-opacity-15 rounded-xl z-0 shadow-lg"
                }
              />
            )}

            <span className="relative block text-white">{tab.title}</span>
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
