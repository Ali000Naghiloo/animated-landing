import React from "react";
import MyButton from "../../reusables/MyButton";
import logo from "../../../assets/life-copilot-logo.png";

export default function Footer() {
  return (
    <div className="w-full flex justify-between z-10">
      <MyButton />
      <MyButton children={<>Press to start </>} />

      <div className="w-[72px] h-[48px]">
        <img src={logo} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
