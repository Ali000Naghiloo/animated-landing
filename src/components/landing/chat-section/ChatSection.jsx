import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import background from "../../../assets/landing/full-back.gif";

export default function ChatSection() {
  return (
    <>
      <div className="w-full h-screen bg-black relative flex flex-col px-[80px] py-[80px]">
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center !z-0">
          <img src={background} alt="" />
        </div>

        <Header />

        <Body />

        <Footer />
      </div>
    </>
  );
}
