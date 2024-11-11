import MyButton from "../../reusables/MyButton";
import logo from "../../../assets/life-copilot-logo.png";
import { motion } from "framer-motion";

const downVariants = {
  animate: { y: 15 },
  initial: { y: -30 },
  transition: {
    delay: 1,
    ease: "circIn",
    repeat: Infinity,
    duration: 0.5,
    repeatType: "reverse",
    repeatDelay: 2,
  },
};

export default function Footer({ mode, setMode }) {
  const Down = () => (
    <svg
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="elements">
        <path
          id="Vector"
          d="M6 16.9999L6 0.999878"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M11 12C11 12 7.31756 17 5.99996 17C4.68237 17 1 12 1 12"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );

  return (
    <div className="absolute bottom-0 left-0 w-full h-fit flex justify-between p-[80px] z-[-1]">
      <motion.div
        variants={downVariants}
        initial={"initial"}
        animate={"animate"}
        transition={{
          delay: 1,
          ease: "circIn",
          repeat: Infinity,
          duration: 0.5,
          repeatType: "reverse",
          repeatDelay: 2,
        }}
      >
        <MyButton
          variant=""
          className={"buttons px-[11px] py-[16px]"}
          children={<Down />}
        />
      </motion.div>

      <div className="max-w-[75px]">
        <img src={logo} className="w-full object-cover" alt="" />
      </div>
    </div>
  );
}
