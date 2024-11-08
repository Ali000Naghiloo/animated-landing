import React, { useEffect, useRef, useState } from "react";
import aiListeningGif from "../../../assets/landing/listening.gif";
import aiWaitingGif from "../../../assets/landing/waiting.gif";
import aiSpeakingGif from "../../../assets/landing/speaking.gif";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import MyButton from "../../reusables/MyButton";

const buttonVariant = {
  animate: { opacity: 0, z: -100 },
  initial: { opacity: 1, z: 0, exit: { opacity: 0, z: -100 } },
};

export default function Body() {
  // const aiListeningGif = lazy(() =>
  //   import()
  // );
  const [details, setDetails] = useState({
    aiMode: "listening",
    title: "Experience the Vyvo AI",
  });
  const ref = useRef(null);
  const isInView = useInView(ref);

  const allMods = ["listening", "waiting", "thinking", "speaking"];

  const buttons = [
    // listening
    {
      key: "listening",
      element: (
        <motion.div
          key="listening"
          variants={buttonVariant}
          initial={"animate"}
          animate={"initial"}
          transition={{ duration: 0.8 }}
          exit={"exit"}
        >
          <MyButton
            children={<>Press to start</>}
            className={
              "buttons hover:bg-[#77A9E8] text-[1.3em] hover:shadow-[0_0_50px_#77A9E8] px-[43px] py-[20px] backdrop-blur-[10px]"
            }
            variant=""
            onClick={() => {
              setDetails({ ...details, aiMode: "waiting" });
            }}
          />
        </motion.div>
      ),
    },
    // waiting
    {
      key: "waiting",
      element: (
        <motion.div
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          exit={{ opacity: 0, z: -100 }}
        >
          <MyButton
            children={<>Submit</>}
            className={
              "buttons hover:bg-[#77A9E8] text-[1.3em] hover:shadow-[0_0_50px_#77A9E8] px-[43px] py-[20px] backdrop-blur-[10px]"
            }
            variant=""
            onClick={() => {
              setDetails({ ...details, aiMode: "thinking" });
            }}
          />
        </motion.div>
      ),
    },
    // thinking
    {
      key: "thinking",
      element: (
        <motion.div
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          exit={{ opacity: 0, z: -100 }}
        >
          <MyButton
            children={<>/ / /</>}
            className={
              "buttons hover:bg-[#77A9E8] text-[1.3em] hover:shadow-[0_0_50px_#77A9E8] px-[43px] py-[20px] backdrop-blur-[10px]"
            }
            variant=""
            onClick={() => {
              setDetails({ ...details, aiMode: "speaking" });
            }}
          />
        </motion.div>
      ),
    },
    // speaking
    {
      key: "speaking",
      element: (
        <motion.div
          key={"speaking"}
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          exit={{ opacity: 0, z: -100 }}
        >
          <MyButton
            children={<>speak</>}
            className={
              "buttons hover:bg-[#77A9E8] text-[1.3em] hover:shadow-[0_0_50px_#77A9E8] px-[43px] py-[20px] backdrop-blur-[10px]"
            }
            variant=""
            onClick={() => {
              setDetails({ ...details, aiMode: "waiting" });
            }}
          />
        </motion.div>
      ),
    },
  ];

  const handleAiMode = () => {
    let text = "";

    if (details.aiMode == "listening") {
      text = "AI Listening..";
    }
    if (details.aiMode == "waiting") {
      text = "Ai is waiting for a question..";
    }
    if (details.aiMode == "thinking") {
      text = "AI Thinking..";
    }
    if (details.aiMode == "speaking") {
      text = "Ai Speaking...";
    }

    return (
      <AnimatePresence>
        <motion.div className="text-[#77A9E8]">
          {text &&
            text.split("").map((char, index) => (
              <motion.span
                variants={{
                  hidden: {
                    scale: 0.8,
                    y: 0,
                    opacity: 0,
                  },
                  visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.2,
                  },
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.05, duration: 1 }}
                key={index}
              >
                {char}
              </motion.span>
            ))}
        </motion.div>
      </AnimatePresence>
    );
  };

  const handleAiGif = () => {
    if (details.aiMode == "listening") {
      return aiListeningGif;
    }
    if (details.aiMode == "waiting") {
      return aiWaitingGif;
    } else {
      return aiSpeakingGif;
    }
  };

  return (
    <>
      {/* ai section */}
      <motion.div
        ref={ref}
        className="w-full h-full flex flex-col gap-10 items-center justify-between z-10 relative"
      >
        {/* gif */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ z: -20, opacity: 0 }}
          className="w-[340px] h-[300px] flex justify-center items-center pointer-events-none my-auto"
        >
          <motion.img
            src={handleAiGif()}
            alt=""
            className="w-[550px] h-[550px] object-cover"
          />
        </motion.div>

        {/* texts */}
        <div className="w-full flex flex-col items-center justify-between gap-12 ">
          {/* ai mode */}
          {details.aiMode && handleAiMode()}

          <div className="flex flex-col items-center w-full gap-5 mb-auto">
            {/* title */}
            <AnimatePresence>
              <div className="flex gap-2">
                {details.title.split(" ").map((t, index) => (
                  <motion.span
                    className="text-left radial-text text-5xl"
                    key={t}
                    initial={{ z: 40, y: 40, opacity: 0 }}
                    animate={{ z: 0, y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </AnimatePresence>

            {/* descriptions */}
            <div className="font-light text-[rgba(255,255,255,0.6)] max-w-[30%] mx-auto text-center">
              {details.aiMode == "listening" && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, z: -100 }}
                >
                  An Intelligence that listens, thinks, and responds with
                  unparalleled precision.
                </motion.span>
              )}
            </div>
          </div>

          {/* button */}
          <AnimatePresence>
            <div className="w-full flex justify-center z-10">
              {buttons.map((b, index) =>
                b.key == details.aiMode ? b.element : null
              )}
            </div>
          </AnimatePresence>
        </div>
      </motion.div>

      <Footer
        setMode={(e) => setDetails({ ...details, aiMode: allMods[e] })}
        mode={details.aiMode}
      />
    </>
  );
}
