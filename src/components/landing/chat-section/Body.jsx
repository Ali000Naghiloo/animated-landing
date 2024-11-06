import React, { useEffect, useRef } from "react";
import aiListeningGif from "../../../assets/landing/listening.gif";
import { motion, useInView } from "framer-motion";

export default function Body() {
  // const aiListeningGif = lazy(() =>
  //   import()
  // );
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        className="w-full h-full flex flex-col gap-10 items-center justify-center z-10 relative"
      >
        {/* gif */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-[300px] h-[300px] flex justify-center items-center pointer-events-none"
        >
          <img
            src={aiListeningGif}
            alt=""
            className="w-[550px] h-[550px] object-cover"
          />
        </motion.div>

        {/* texts */}
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="text-[#94A8ED]">Ai Listening..</div>
          <motion.div
            initial={{ z: 100, y: 100, opacity: 0 }}
            animate={{ z: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="radial-text text-5xl"
          >
            Experience the Vyvo AI
          </motion.div>
          <div className="font-light text-[rgba(255,255,255,0.6)] max-w-[30%] mx-auto text-center">
            <span>
              An Intelligence that listens, thinks, and responds with
              unparalleled precision.
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
