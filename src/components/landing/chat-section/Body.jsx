import React, { useEffect, useRef, useState } from "react";
import aiListeningGif from "../../../assets/landing/listening.gif";
import aiWaitingGif from "../../../assets/landing/waiting.gif";
import aiSpeakingGif from "../../../assets/landing/speaking.gif";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import MyButton from "../../reusables/MyButton";
import MyInput from "../../reusables/MyInput";

const buttonVariant = {
  animate: { opacity: 0, z: -100 },
  initial: { opacity: 1, z: 0, exit: { opacity: 0, z: -100 } },
};

export default function Body() {
  const [details, setDetails] = useState({
    aiMode: "listening",
  });
  const [data, setData] = useState({
    aiMode: "AI Listening..",
    title: "Experience the Vyvo AI",
  });
  const ref = useRef(null);
  const isInView = useInView(ref);

  const allMods = ["listening", "waiting", "thinking", "speaking"];

  const handleAiButton = () => {
    if (details.aiMode == "listening") {
      return (
        <motion.div
          key="listening"
          variants={{
            animate: { opacity: 0, z: -100 },
            initial: {
              opacity: 1,
              z: 0,
              exit: { opacity: 0, z: -100 },
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          initial={"animate"}
          animate={"initial"}
          transition={"transition"}
          exit={"exit"}
        >
          <MyButton
            children={<span>Press to start</span>}
            className={
              "buttons hover:bg-[#77A9E8] text-[1.3em] hover:shadow-[0_0_50px_#77A9E8] px-[43px] py-[20px] backdrop-blur-[10px]"
            }
            variant=""
            onClick={() => {
              setDetails({ ...details, aiMode: "waiting", title: "" });
            }}
          />
        </motion.div>
      );
    }
    if (details.aiMode == "waiting") {
      return (
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
      );
    }
    if (details.aiMode == "thinking") {
      setTimeout(() => {
        setDetails({ ...details, aiMode: "speaking" });
      }, 3000);
      return (
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
          />
        </motion.div>
      );
    }
    if (details.aiMode == "speaking") {
      return (
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
              setDetails({ ...details, aiMode: "listening" });
            }}
          />
        </motion.div>
      );
    }
  };

  const handleAiMode = () => {
    return (
      <motion.div className="text-[#77A9E8] w-full text-center">
        {data.aiMode.split("").map((char, index) => (
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
            }}
            initial="hidden"
            animate="visible"
            exit={{
              speed: index * 0.05,
              opacity: 0,
              scale: 0.2,
            }}
            transition={{ delay: index * 0.05, duration: 1 }}
            key={index}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
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

  const handleRenderTitle = () => {
    return data.title.split(" ").map((t, index) => (
      <motion.span
        className="text-left radial-text text-5xl"
        key={t}
        initial={{ z: 40, y: 15, opacity: 0 }}
        animate={{ z: 0, y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1, duration: 2 }}
        exit={{ z: 40, y: 15, opacity: 0 }}
      >
        {t}
      </motion.span>
    ));
  };

  useEffect(() => {
    setData({ ...data, aiMode: "" });
    setTimeout(() => {
      if (details.aiMode === "listening") {
        setData({ aiMode: "AI Listening..", title: "Experience the Vyvo AI" });
      }
      if (details.aiMode === "waiting") {
        setData({ aiMode: "Ai is waiting for a question..", title: "" });
      }
      if (details.aiMode === "thinking") {
        setData({ ...data, aiMode: "AI Thinking.." });
      }
      if (details.aiMode === "speaking") {
        setData({ ...data, aiMode: "AI Speaking..." });
      }
    }, 1000);
  }, [details.aiMode]);

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
        <div className="w-full flex flex-col items-center justify-center gap-8">
          {/* ai mode */}
          <AnimatePresence>{data.aiMode && handleAiMode()}</AnimatePresence>

          <div className="flex flex-col items-center w-full gap-5">
            {/* title */}
            <AnimatePresence>
              <motion.div className="flex gap-2">
                {handleRenderTitle()}
              </motion.div>
            </AnimatePresence>

            {/* descriptions */}
            <div className="font-light text-[1em] text-[rgba(255,255,255,0.6)] max-w-[30%] mx-auto mt-auto text-center">
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
            <motion.div className="w-full flex justify-center z-10 text-xl">
              {details.aiMode && handleAiButton()}
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer
          setData={(e) => setDetails({ ...details, aiMode: allMods[e] })}
          mode={details.aiMode}
        />
      </motion.div>
    </>
  );
}
