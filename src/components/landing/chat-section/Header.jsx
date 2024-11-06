import React from "react";
import logoOne from "../../../assets/logo.png";
import logoTow from "../../../assets/life-copilot-logo.png";
import MyButton from "../../reusables/MyButton";
import Slash from "../../../assets/icons/Slash";
import { motion } from "framer-motion";

export default function Header() {
  const links = [
    { title: "About", path: "/" },
    { title: "Features", path: "/" },
    { title: "Pricing", path: "/" },
    { title: "How it works", path: "/" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full flex justify-center items-center z-10"
      >
        {/* logos */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="flex h-[30px]"
        >
          <img src={logoOne} alt="" className="h-full" />
          <img src={logoTow} alt="" className="h-[50%]" />
        </motion.div>

        {/* links */}
        <div className="flex gap-4 mx-auto translate-x-[-30px]">
          <div className="flex gap-[30px] rounded-xl px-[30px] py-[12px] buttons">
            {links.map((i) => (
              <div key={i} className="">
                {i.title}
              </div>
            ))}
          </div>
        </div>

        {/* auth button */}
        <div>
          <MyButton
            children={
              <div className="w-full min-w-fit flex gap-2">
                <span>Log In</span>
              </div>
            }
            onClick={() => {
              console.log("logged");
            }}
            variant=""
            className={"rounded-2xl buttons px[30px] py-[12px]"}
          />
        </div>
      </motion.div>
    </>
  );
}
