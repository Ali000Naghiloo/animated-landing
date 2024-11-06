import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loader from "../../assets/loading/preloader.gif";
import loaderBack from "../../assets/loading/black-back.gif";
import { motion } from "framer-motion";
import { setShowPreLoader } from "../../store/reducers/preLoaderSlice";

const variants = {
  animate: {
    scale: 0.4,
    opacity: 0,
    display: "none",
  },
};

export default function PreLoader() {
  const showLoader = useSelector((state) => state.preLoader.show);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setShowPreLoader(0));
    }, 3000);
  }, []);

  return (
    <>
      <motion.div
        variants={variants}
        animate={!showLoader ? "animate" : ""}
        className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden fixed top-0 left-0 bg-black z-[9999]"
      >
        {/* background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img src={loaderBack} alt="" className="w-full h-full" />
        </div>

        {/* loading gif */}
        <div className="w-full flex flex-col items-center justify-center z-10 my-auto">
          <div className="flex justify-center items-center w-[500px] h-[200px] overflow-hidden">
            <img
              src={loader}
              alt=""
              className="object-cover w-[800px] h-[800px]"
            />
          </div>
          {/* radial colored text */}
          <div className="w-full text-center bg-clip-text text-[1.5em]">
            <span className="text-white text-transparent radial-text">
              Loading Intelligence...
            </span>
          </div>
        </div>

        {/* footer */}
        <div className="w-full flex justify-between text-[#94A8ED] text-[2em] p-[80px]">
          <div className="flex">
            AI Loading <span className="animate-pulse">..</span>
          </div>

          <span>50%</span>
        </div>
      </motion.div>
    </>
  );
}
