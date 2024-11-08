import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FillingText() {
  const pageRef = useRef(null);
  const inView = useInView(pageRef);

  return (
    <>
      <motion.div
        ref={pageRef}
        className="w-full h-screen flex justify-center items-center px-[20px] lg:px-[200px] xl:px-[350px] text-4xl text-[#262626] text-center"
      >
        <span className="w-full">
          Vyvo AI reshapes technology with adaptive responses that enhance
          decision-making.
        </span>
      </motion.div>
    </>
  );
}
