import React, { lazy } from "react";
import aiListeningGif from "../../../assets/landing/listening.gif";

export default function Body() {
  // const aiListeningGif = lazy(() =>
  //   import()
  // );

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-end z-10 relative">
        <div className="w-full h-full flex gap-[25px] pointer-events-none flex-col items-center justify-end absolute top-0 left-0 translate-y-[-10%]">
          <img
            src={aiListeningGif}
            alt=""
            className="w-[300px] h-[300px] object-cover"
          />
          <div className="text-[#94A8ED]">Ai Listening..</div>
          <div className="radial-text text-5xl">Experience the Vyvo AI</div>
          <div className="font-light text-[rgba(255,255,255,0.6)] max-w-[30%] mx-auto text-center">
            <span>
              An Intelligence that listens, thinks, and responds with
              unparalleled precision.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
