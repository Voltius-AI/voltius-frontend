"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

// import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
// import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import useResizeObserver from "@react-hook/resize-observer";

const StyledSlider = ({
  List,
  CardComponent,
  fetchNextPage,
  hasNextPage,
  ...props
}) => {
  const ref = useRef();
  const [ScrollLeft, setScrollLeft] = useState(ref.current?.scrollLeft);
  const [isContentEndReached, setIsContentEndReached] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setScrollLeft(ref.current?.scrollLeft);

      if (
        Math.ceil(ref.current?.scrollLeft + ref.current?.offsetWidth) >=
        Math.round(ref.current?.scrollWidth)
      ) {
        setIsContentEndReached(true);
      } else {
        setIsContentEndReached(false);
      }
    }
  }, []);

  useResizeObserver(ref, () => {
    if (ref.current) {
      setScrollLeft(ref.current?.scrollLeft);

      if (
        Math.ceil(ref.current?.scrollLeft + ref.current?.offsetWidth) >=
        Math.round(ref.current?.scrollWidth)
      ) {
        setIsContentEndReached(true);
      } else {
        setIsContentEndReached(false);
      }
    }
  });

  return (
    <div
      ref={ref}
      className="flex gap-[30px] items-center w-full min-h-[232px] pl-[var(--element-left-spacing)] pr-[1.2rem] overflow-x-auto pb-[45px] pt-[45px]"
      onScroll={(event) => {
        setScrollLeft(ref.current?.scrollLeft);

        if (
          Math.ceil(ref.current?.scrollLeft + ref.current?.offsetWidth) >=
          Math.round(ref.current?.scrollWidth)
        ) {
          setIsContentEndReached(true);
        } else {
          setIsContentEndReached(false);
        }
      }}
    >
      {List?.map((item) => (
        <CardComponent
          key={item?.bookId || item?.id || item?.contentId}
          item={item}
          {...props}
        />
      ))}
      {hasNextPage ? (
        <button className="" onClick={fetchNextPage}>
          Load More
        </button>
      ) : null}

      {/* <div
        className="top-[calc(50% - 22px)] absolute select-none cursor-pointer font-bold bg-[black] [box-shadow:2px_2px_20px_#ffffff55] p-[5px] [transition:0.2s_ease-in] hover:bg-[#ffffff99] hover:scale-110 right-4"
        style={{ transform: isContentEndReached ? "scale(0)" : "scale(1)" }}
        onClick={() => {
          ref.current?.scrollBy({
            top: 0,
            left: ref.current?.firstChild.offsetWidth * 1.5,
            behavior: "smooth",
          });
        }}
      >
        {">"}
      </div>

      <div
        className="top-[calc(50% - 22px)] absolute select-none cursor-pointer font-bold bg-[black] [box-shadow:2px_2px_20px_#ffffff55] p-[5px] [transition:0.2s_ease-in] hover:bg-[#ffffff99] hover:scale-110 left-4"
        style={{
          transform:
            ScrollLeft <= ref.current?.firstChild?.offsetWidth * 1
              ? "scale(0)"
              : "scale(1)",
        }}
        onClick={() => {
          ref.current?.scrollBy({
            top: 0,
            left: ref.current?.firstChild.offsetWidth * -1.5,
            behavior: "smooth",
          });
        }}
      >
        {"<"}
      </div> */}
    </div>
  );
};

export default StyledSlider;
