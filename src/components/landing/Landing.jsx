import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowPreLoader } from "../../store/reducers/preLoaderSlice";
import ChatSection from "./chat-section/ChatSection";

export default function Landing() {
  return (
    <div className="h-screen w-full">
      {/* chat with AI */}
      <ChatSection />

      {/* filling text */}

      {/* features */}

      {/* plans */}

      {/* last secton */}

      {/* footer */}
    </div>
  );
}
