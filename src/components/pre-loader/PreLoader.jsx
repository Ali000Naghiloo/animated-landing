import { useEffect } from "react";
import { useSelector } from "react-redux";
import loader from "../../assets/loading/preloader.gif";
import loaderBack from "../../assets/loading/black-back.gif";
import { motion } from "framer-motion";

export default function PreLoader() {
  const showLoader = useSelector((state) => state.preLoader.show);

  return (
    <>
      <motion.div
        animate={!showLoader ? { scale: 0.4, opacity: 0, display: "none" } : {}}
        className="w-screen h-screen fixed top-0 left-0 bg-black flex flex-col justify-center items-center z-[9999]"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img src={loaderBack} alt="" className="w-full h-full" />
        </div>

        {/* loading gif */}
        <div className="z-10 relative">
          <img src={loader} alt="" className="" />
          {/* radial colored text */}
          <div className="bg-clip-text bg-red-800 absolute top-[50%] left-[50%] translate-y-[100px] translate-x-[-50%] text-[1.5em]">
            <span className="text-white text-transparent radial-text">
              Loading Intelligence...
            </span>
          </div>

          {/* footer */}
          <div className="w-full flex justify-between text-[#94A8ED] text-[2em] p-[80px]">
            <div className="flex">
              AI Loading <span className="animate-pulse">..</span>
            </div>

            <span>50%</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
