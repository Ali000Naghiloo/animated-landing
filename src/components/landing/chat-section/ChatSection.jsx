import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import background from "../../../assets/landing/full-back.gif";

export default function ChatSection() {
  return (
    <>
      <div className="w-full h-screen min-h-[900px] absolute top-0 left-0 flex justify-center items-center z-0">
        <img src={background} alt="" className="w-full h-full" />
      </div>

      <div className="w-full h-screen bg-black flex flex-col p-[20px] md:p-[40px] xl:p-[80px] overflow-hidden">
        <Header />

        <Body />

        <Footer />
      </div>
    </>
  );
}
