/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback } from "react";

const Footer = () => {
  return (
    <div className="mx-auto  mt-10 w-full antialiased border-t border-slate-700 border-opacity-40 pt-10 flex flex-col">
      <div className="flex items-center justify-between w-full h-fit px-10 pb-8">
        <img src="/logo_mono.svg" alt="" className="max-w-36 opacity-90" />

        <div className="flex items-center gap-4 opacity-80">
          <a
            href="https://twitter.com/voltiusai"
            target="_blank"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="34px"
              height="34px"
              baseProfile="basic"
            >
              <linearGradient
                id="U8Yg0Q5gzpRbQDBSnSCfPa"
                x1="4.338"
                x2="38.984"
                y1="-10.056"
                y2="49.954"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#4b4b4b" />
                <stop offset=".247" stop-color="#3e3e3e" />
                <stop offset=".686" stop-color="#2b2b2b" />
                <stop offset="1" stop-color="#252525" />
              </linearGradient>
              <path
                fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa)"
                d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28 C42,40.209,40.209,42,38,42z"
              />
              <path
                fill="#fff"
                d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
              />
              <polygon
                fill="#fff"
                points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
              />
              <polygon
                fill="#fff"
                points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/voltius/"
            target="_blank"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="34px"
              height="34px"
            >
              <path
                fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
              />
              <path
                d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z"
                opacity=".05"
              />
              <path
                d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677 c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638 c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001 c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                opacity=".07"
              />
              <path
                fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UC_rUCUKc2SuZl1VUEzhLsLA"
            target="_blank"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="34px"
              height="34px"
            >
              <linearGradient
                id="PgB_UHa29h0TpFV_moJI9a"
                x1="9.816"
                x2="41.246"
                y1="9.871"
                y2="41.301"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f44f5a" />
                <stop offset=".443" stop-color="#ee3d4a" />
                <stop offset="1" stop-color="#e52030" />
              </linearGradient>
              <path
                fill="url(#PgB_UHa29h0TpFV_moJI9a)"
                d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40 c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56 c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267 C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"
              />
              <path
                d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376 v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624 c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z"
                opacity=".05"
              />
              <path
                d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334 c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z"
                opacity=".07"
              />
              <path
                fill="#fff"
                d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549 l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"
              />
            </svg>
          </a>
          <a
            href="https://medium.com/voltius"
            target="_blank"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="34px"
              height="34px"
            >
              <linearGradient
                id="~nVLpo1GG3OfFL9CbVAcxa"
                x1="11.916"
                x2="16.084"
                y1="12.18"
                y2="35.82"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#6d6d6d" />
                <stop offset=".438" stop-color="#626262" />
                <stop offset=".998" stop-color="#454545" />
              </linearGradient>
              <circle
                cx="14"
                cy="24"
                r="12"
                fill="url(#~nVLpo1GG3OfFL9CbVAcxa)"
              />
              <linearGradient
                id="~nVLpo1GG3OfFL9CbVAcxb"
                x1="32.11"
                x2="35.89"
                y1="13.282"
                y2="34.718"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#6d6d6d" />
                <stop offset=".438" stop-color="#626262" />
                <stop offset=".998" stop-color="#454545" />
              </linearGradient>
              <ellipse
                cx="34"
                cy="24"
                fill="url(#~nVLpo1GG3OfFL9CbVAcxb)"
                rx="6"
                ry="11"
              />
              <linearGradient
                id="~nVLpo1GG3OfFL9CbVAcxc"
                x1="42.289"
                x2="45.711"
                y1="14.295"
                y2="33.705"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#6d6d6d" />
                <stop offset=".438" stop-color="#626262" />
                <stop offset=".998" stop-color="#454545" />
              </linearGradient>
              <ellipse
                cx="44"
                cy="24"
                fill="url(#~nVLpo1GG3OfFL9CbVAcxc)"
                rx="2"
                ry="10"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex w-full h-fit px-10 items-center sm:pb-7 pb-20">
        <h6 className="text-sm text-slate-500 text-opacity-75 self-end opacity-65">
          Copyright © {new Date().getFullYear()} Voltius. All rights reserved
        </h6>
        <hr className="border-0 flex-1 ml-5 h-[2px] bg-slate-500 opacity-25" />
      </div>
    </div>
  );
};

export default Footer;
