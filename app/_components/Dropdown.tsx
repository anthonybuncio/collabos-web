"use client";

import { useState } from "react";

const Dropdown = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing((isShowing) => !isShowing);
  };
  return (
    <div className="relative">
      <button
        className="flex items-center h-8 pl-3 pr-2 border border-black focus:outline-none"
        onClick={toggle}
      >
        <svg
          fill="none"
          viewBox="0 0 15 15"
          height="1em"
          width="1em"
          className="w-4 h-4"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.007 13.418l2-12 .986.164-2 12-.986-.164zm-.8-8.918l-3 3 3 3-.707.707L.793 7.5 4.5 3.793l.707.707zm5.293-.707L14.207 7.5 10.5 11.207l-.707-.707 3-3-3-3 .707-.707z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-2 text-sm leading-none">Select Language</span>
        <svg
          className="w-4 h-4 mt-px ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isShowing && (
        <div className="absolute flex flex-col w-full mt-1 border border-black shadow-lg bg-white">
          <a
            className="flex items-center h-8 px-3 text-sm hover:bg-gray-200"
            href="#"
          >
            <svg
              fill="none"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              className="h-4 w-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M0 0h15v15H0V0zm10 6a2 2 0 100 4h1a1 1 0 110 2h-1a1 1 0 01-1-1H8a2 2 0 002 2h1a2 2 0 100-4h-1a1 1 0 010-2h1.167c.46 0 .833.373.833.833V8h1v-.167C13 6.821 12.18 6 11.167 6H10zM3 6h5v1H6v6H5V7H3V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 leading-none">Typescript</span>
          </a>
          <a
            className="flex items-center h-8 px-3 text-sm hover:bg-gray-200"
            href="#"
          >
            <svg
              fill="none"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              className="h-4 w-4"
            >
              <path
                fill="currentColor"
                d="M3 12H1.5A1.5 1.5 0 010 10.5v-5A1.5 1.5 0 011.5 4H8V3H7V2H6v1H4V1.5A1.5 1.5 0 015.5 0h4A1.5 1.5 0 0111 1.5v5a.5.5 0 01-.5.5h-6A1.5 1.5 0 003 8.5V12z"
              />
              <path
                fill="currentColor"
                d="M12 3v3.5A1.5 1.5 0 0110.5 8h-6a.5.5 0 00-.5.5v5A1.5 1.5 0 005.5 15h4a1.5 1.5 0 001.5-1.5V12H9v1H8v-1H7v-1h6.5A1.5 1.5 0 0015 9.5v-5A1.5 1.5 0 0013.5 3H12z"
              />
            </svg>
            <span className="ml-2 leading-none">Python</span>
          </a>
          <a
            className="flex items-center h-8 px-3 text-sm hover:bg-gray-200"
            href="#"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="h-4 w-4"
            >
              <path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 004.348.15 5.492 5.492 0 002.85.645 5.04 5.04 0 00.645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 00-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 002.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 001.578-.138 5.322 5.322 0 001.498-.495 5.035 5.035 0 002.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 00-.01-.724 10.5 10.5 0 00-.138-1.576 5.328 5.328 0 00-.495-1.5A5.039 5.039 0 0021.152.645 5.32 5.32 0 0019.654.15a10.493 10.493 0 00-1.578-.138 34.98 34.98 0 00-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 01-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 01-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 01-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" />
            </svg>
            <span className="ml-2 leading-none">Swift</span>
          </a>
          <a
            className="flex items-center h-8 px-3 text-sm hover:bg-gray-200"
            href="#"
          >
            <svg
              fill="none"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              className="h-4 w-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15 0H0v15h15V0zM8 8a2 2 0 012-2h1.167C12.179 6 13 6.82 13 7.833V8h-1v-.167A.833.833 0 0011.167 7H10a1 1 0 000 2h1a2 2 0 110 4h-1a2 2 0 01-2-2h1a1 1 0 001 1h1a1 1 0 100-2h-1a2 2 0 01-2-2zM6 6v5a1 1 0 11-2 0H3a2 2 0 104 0V6H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 leading-none">Javascript</span>
          </a>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
