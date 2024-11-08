import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowPreLoader } from "../../store/reducers/preLoaderSlice";
import ChatSection from "./chat-section/ChatSection";
import FillingText from "./filling text-section/FillingText";

export default function Landing() {
  return (
    <div className="h-full w-full">
      {/* chat with AI */}
      <ChatSection />

      {/* filling text */}
      <FillingText />

      {/* features */}

      {/* plans */}

      {/* last secton */}

      {/* footer */}
    </div>
  );
}
