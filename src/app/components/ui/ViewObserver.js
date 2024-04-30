"use client";
import React from "react";
import { InView } from "react-intersection-observer";
import { useNavStore } from "../main/Header";

const ViewObserver = ({ children, valueId }) => {
  const setActive = useNavStore((state) => state.setActive);

  return (
    <InView
      as="div"
      threshold={0.3}
      onChange={(inView, entry) => {
        if (inView) {
          setActive(valueId);
        }
      }}
    >
      {children}
    </InView>
  );
};

export default ViewObserver;
