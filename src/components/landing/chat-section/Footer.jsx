import React from "react";
import MyButton from "../../reusables/MyButton";
import logo from "../../../assets/life-copilot-logo.png";

export default function Footer() {
  const Down = () => (
    <svg
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="elements">
        <path
          id="Vector"
          d="M6 16.9999L6 0.999878"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M11 12C11 12 7.31756 17 5.99996 17C4.68237 17 1 12 1 12"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );

  return (
    <div className="w-full flex justify-between z-10">
      <MyButton
        variant=""
        className={"buttons px-[11px] py-[16px]"}
        children={
          <>
            <Down />
          </>
        }
      />

      <MyButton
        children={<>Press to start </>}
        className={
          "buttons hover:bg-[#77A9E8] hover:shadow-[10px_10px_50px_#77A9E8] px-[43px] py-[20px] text-[1.2em] backdrop-blur-[10px]"
        }
        variant=""
      />

      <div className="w-[72px] h-[48px]">
        <img src={logo} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
