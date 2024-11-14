import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FillingText = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const interpolateColor = (startColor, endColor, factor) => {
    const start = parseInt(startColor.slice(1), 16);
    const end = parseInt(endColor.slice(1), 16);

    const r = Math.round(
      ((end >> 16) - (start >> 16)) * factor + (start >> 16)
    );
    const g = Math.round(
      (((end >> 8) & 0xff) - ((start >> 8) & 0xff)) * factor +
        ((start >> 8) & 0xff)
    );
    const b = Math.round(
      ((end & 0xff) - (start & 0xff)) * factor + (start & 0xff)
    );

    return `rgb(${r}, ${g}, ${b})`;
  };

  const textColor = interpolateColor("#262626", "#FFFFFF", scrollProgress);

  return (
    <div className="h-[200vh] bg-black">
      {/* Full-screen section */}
      <div className="h-screen flex items-center justify-center">
        <motion.h1
          className="text-5xl font-bold"
          style={{
            color: textColor,
          }}
        >
          Vyvo AI reshapes technology with adaptive responses that enhance
          decision-making.
        </motion.h1>
      </div>
    </div>
  );
};

export default FillingText;
