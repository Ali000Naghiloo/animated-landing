import React, { useEffect, useRef, useState } from "react";
import aiListeningGif from "../../../assets/landing/listening.gif";
import aiWaitingGif from "../../../assets/landing/waiting.gif";
import aiSpeakingGif from "../../../assets/landing/speaking.gif";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import MyButton from "../../reusables/MyButton";
import MyInput from "../../reusables/MyInput";
import playIcon from "../../../assets/landing/play.png";

const buttonVariant = {
  animate: { opacity: 0, z: -100 },
  initial: { opacity: 1, z: 0, exit: { opacity: 0, z: -100 } },
};

const voiceLines = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export default function Body() {
  const [details, setDetails] = useState({
    aiMode: "listening",
  });
  const [data, setData] = useState({
    aiMode: "AI Listening..",
    title: "Experience the Vyvo AI",
    button: "Press to start",
  });
  const ref = useRef(null);
  const isInView = useInView(ref);

  const allMods = ["listening", "waiting", "thinking", "speaking"];

  const handleAiButton = () => {
    if (details.aiMode == "thinking") {
      setTimeout(() => {
        setDetails({ aiMode: "speaking" });
        setData({
          ...data,
          title: "Sleep Well!!!",
          button: "speaking",
          aiMode: "Ai Speaking...",
        });
      }, 3000);
    }

    return (
      <motion.div
        variants={{
          animate: { opacity: 0, z: -100 },
          initial: {
            opacity: 1,
            z: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        initial={"animate"}
        animate={"initial"}
        transition={"transition"}
        exit={{ opacity: 0, z: -100 }}
      >
        <MyButton
          children={<span>{data.button}</span>}
          className={
            "buttons hover:bg-[#77A9E8] text-[1.3em] hover:shadow-[0_0_50px_#77A9E8] px-[43px] py-[20px] backdrop-blur-[10px]"
          }
          variant=""
          onClick={() => {
            setDetails({ aiMode: false });
            setTimeout(() => {
              switch (details.aiMode) {
                case "listening":
                  setDetails({ aiMode: "waiting" });
                  setData({
                    ...data,
                    title: "",
                    button: "Submit",
                    aiMode: "Ai is waiting for a question...",
                  });
                  break;
                case "waiting":
                  setDetails({ aiMode: "thinking" });
                  setData({
                    ...data,
                    button: "/ / /",
                    aiMode: "Ai Thinking...",
                  });
                  break;
                // case "thinking":
                //   setDetails({ aiMode: "speaking" });
                //   setData({
                //     ...data,
                //     button: "speaking",
                //     aiMode: "Ai Speaking...",
                //   });
                case "speaking":
                  setDetails({ aiMode: "listening" });
                  setData({
                    ...data,
                    title: "Experience the Vyvo AI",
                    button: "Press to start",
                    aiMode: "Ai is listening...",
                  });
                  break;
                default:
                  break;
              }
            }, 100);
          }}
        />
      </motion.div>
    );
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
              speed: index * 0.1,
              opacity: 0,
              scale: 0.2,
            }}
            transition={{ delay: index * 0.05, duration: 0.1 }}
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
    return (
      <>
        {details.aiMode == "waiting" && (
          <motion.div
            initial={{ y: 40, z: 20, opacity: 0 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            exit={{ y: 40, z: 20, opacity: 0 }}
          >
            <MyInput
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder={"Ask something..."}
              className={"bg-[#000] rounded-xl w-[390px] h-[50px] p-2 px-8"}
            />
          </motion.div>
        )}
        {details.aiMode == "speaking" && (
          <motion.div className="flex flex-col gap-10">
            <motion.div className="flex gap-2">
              {data.title.split(" ").map((t, index) => (
                <motion.span
                  className="text-left radial-text text-5xl"
                  key={t}
                  initial={{ z: 40, y: 15, opacity: 0 }}
                  animate={{ z: 0, y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  exit={{ z: 40, y: 15, opacity: 0 }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            <motion.div className="flex gap-5">
              {/* voice */}
              <motion.div className="h-[55px] flex gap-2 flex-1 p-1 buttons">
                <motion.div className="p-4 flex items-center justify-center buttons">
                  <img src={playIcon} />
                </motion.div>
                <div className="flex h-full flex-col gap-[3px]">
                  {/* lines */}
                  <div className="flex items-end gap-[1.5px] overflow-hidden flex-[0.5] w-full">
                    {voiceLines.map((_, index) => (
                      <div
                        key={index}
                        className="w-[2px] max-h-[100%] bg-[#77A9E8] rounded"
                        style={{ height: Math.random() * 100 }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex-[0.5] text-sm">00:21</div>
                </div>
              </motion.div>

              {/* open modal */}
              <motion.div className="px-[33px] h-full buttons"></motion.div>
            </motion.div>
          </motion.div>
        )}
        {(details.aiMode == "thinking" || details.aiMode == "listening") &&
          data.title.split(" ").map((t, index) => (
            <motion.span
              className="text-left radial-text text-5xl"
              key={t}
              initial={{ z: 40, y: 15, opacity: 0 }}
              animate={{ z: 0, y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              exit={{ z: 40, y: 15, opacity: 0 }}
            >
              {t}
            </motion.span>
          ))}
      </>
    );
  };

  return (
    <AnimatePresence>
      {/* ai section */}
      <motion.div
        ref={ref}
        className="w-full h-full flex flex-col gap-10 items-center justify-between relative"
      >
        {/* gif */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ z: -20, opacity: 0 }}
          className="w-[380px] h-[300px] flex justify-center items-center pointer-events-none my-auto z-0"
        >
          <motion.img
            src={handleAiGif()}
            alt=""
            className="w-[550px] h-[550px] object-cover"
          />
        </motion.div>

        {/* texts */}
        <div className="w-full h-[40%] flex flex-col items-center justify-between gap-8">
          {/* ai mode */}
          {details.aiMode && handleAiMode()}

          <div className="flex flex-col items-center w-full gap-5">
            {/* title */}
            <motion.div className="flex gap-2 my-auto">
              {details.aiMode && handleRenderTitle()}
            </motion.div>

            {/* descriptions */}
            {details.aiMode == "listening" && (
              <motion.div
                className="font-light text-[1em] text-[rgba(255,255,255,0.6)] max-w-[30%] mx-auto mt-auto text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, z: -100, y: 20 }}
              >
                An Intelligence that listens, thinks, and responds with
                unparalleled precision.
              </motion.div>
            )}
          </div>

          {/* button */}
          <motion.div className="w-full flex justify-center z-10 text-xl">
            {details.aiMode && handleAiButton()}
          </motion.div>
        </div>

        <Footer
          setData={(e) => setDetails({ ...details, aiMode: allMods[e] })}
          mode={details.aiMode}
        />
      </motion.div>
    </AnimatePresence>
  );
}
