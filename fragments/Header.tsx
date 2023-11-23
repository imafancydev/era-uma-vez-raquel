"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="mt-8 w-full flex md:mt-12">
      <nav className="max-w-7xl w-full flex items-center justify-between container mx-6 md:m-auto ">
        <div className="w-full flex items-center justify-between md:mx-6 ">
          <a href="#inicio">
            <svg
              width="166"
              height="54"
              viewBox="0 0 166 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.8607 14.1817V11.2773C49.8607 10.7062 49.3989 10.2444 48.8278 10.2444H44.7203C44.1492 10.2444 43.6874 10.7062 43.6874 11.2773V27.1239C46.288 22.4939 46.0935 17.2319 49.8607 14.1817Z"
                fill="#FF1A5C"
              ></path>
              <path
                d="M38.5471 10.2322H34.4396C33.8685 10.2322 33.4067 10.694 33.4067 11.2652V26.6742C33.4067 32.3736 28.7402 37.0037 23.0286 36.9551C17.3657 36.8943 12.8572 32.2035 12.8572 26.5527V11.253C12.8572 10.6818 12.3954 10.2201 11.8364 10.2201H7.71678C7.14562 10.2201 6.68384 10.6818 6.68384 11.253V26.5041C6.68384 35.594 13.9874 43.0798 23.0772 43.1041C32.1671 43.1284 39.5679 35.7398 39.5679 26.6621V11.253C39.58 10.694 39.1182 10.2322 38.5471 10.2322Z"
                fill="url(#paint0_linear_110_188)"
              ></path>
              <path
                d="M60.1294 10.2322H60.0808C50.9909 10.2565 43.6874 17.7423 43.6874 26.8322V42.0955C43.6874 42.6666 44.1492 43.1284 44.7203 43.1284H48.8278C49.3989 43.1284 49.8607 42.6666 49.8607 42.0955V26.6743C49.8607 20.9748 54.5272 16.3448 60.2388 16.3934C65.9017 16.442 70.4102 21.145 70.4102 26.7958V42.0833C70.4102 42.6545 70.872 43.1163 71.4432 43.1163H75.5506C76.1218 43.1163 76.5836 42.6545 76.5836 42.0833V26.6743C76.5714 17.6087 69.195 10.2322 60.1294 10.2322Z"
                fill="url(#paint1_linear_110_188)"
              ></path>
              <path
                d="M142.862 10.2322C133.796 10.2322 126.42 17.6087 126.42 26.6743C126.42 35.7399 133.796 43.1163 142.862 43.1163C151.928 43.1163 159.304 35.7399 159.304 26.6743C159.304 17.6087 151.928 10.2322 142.862 10.2322ZM142.862 36.9429C137.199 36.9429 132.581 32.3372 132.581 26.6621C132.581 20.987 137.187 16.3813 142.862 16.3813C148.537 16.3813 153.143 20.987 153.143 26.6621C153.143 32.3372 148.525 36.9429 142.862 36.9429Z"
                fill="url(#paint2_linear_110_188)"
              ></path>
              <path
                d="M81.7118 10.2322H85.8192C86.3904 10.2322 86.8522 10.694 86.8522 11.253V42.0833C86.8522 42.6545 86.3904 43.1163 85.8192 43.1163H81.7118C81.1406 43.1163 80.6788 42.6545 80.6788 42.0833V11.253C80.691 10.694 81.1528 10.2322 81.7118 10.2322Z"
                fill="url(#paint3_linear_110_188)"
              ></path>
              <path
                d="M121.608 31.3407H116.71C116.322 31.3407 115.969 31.5473 115.775 31.8754C113.988 34.9256 110.671 36.9915 106.879 36.9794C101.399 36.9672 96.8536 32.5924 96.6348 27.1117C96.4039 21.2665 101.107 16.4299 106.904 16.4299C110.659 16.4299 113.952 18.4593 115.75 21.4852C115.969 21.8498 116.358 22.0685 116.771 22.0685H121.596C122.142 22.0685 122.519 21.5217 122.325 21.0113C119.931 14.5706 113.624 10.0256 106.308 10.2808C97.6799 10.5846 90.7167 17.6086 90.4736 26.2246C90.2063 35.4968 97.6799 43.1406 106.891 43.1406C113.964 43.1406 120.004 38.6564 122.313 32.3737C122.507 31.8633 122.142 31.3407 121.608 31.3407Z"
                fill="url(#paint4_linear_110_188)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_110_188"
                  x1="6.43229"
                  y1="26.6621"
                  x2="159.258"
                  y2="26.6621"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A5FF"></stop>
                  <stop offset="1" stop-color="#FF1D66"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_110_188"
                  x1="6.43216"
                  y1="26.6803"
                  x2="159.258"
                  y2="26.6803"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A5FF"></stop>
                  <stop offset="1" stop-color="#FF1D66"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_110_188"
                  x1="6.43219"
                  y1="26.6743"
                  x2="159.258"
                  y2="26.6743"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A5FF"></stop>
                  <stop offset="1" stop-color="#FF1D66"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_110_188"
                  x1="6.43214"
                  y1="26.6743"
                  x2="159.258"
                  y2="26.6743"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A5FF"></stop>
                  <stop offset="1" stop-color="#FF1D66"></stop>
                </linearGradient>
                <linearGradient
                  id="paint4_linear_110_188"
                  x1="6.43219"
                  y1="26.7056"
                  x2="159.258"
                  y2="26.7056"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A5FF"></stop>
                  <stop offset="1" stop-color="#FF1D66"></stop>
                </linearGradient>
              </defs>
            </svg>
          </a>
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="text-gray-800 visible md:hidden"
          >
            {menuIsOpen && <AiOutlineClose size={32} />}
            {!menuIsOpen && <AiOutlineMenu size={32} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
