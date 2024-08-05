"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

interface IProps {
  text: string;
  icon?: JSX.Element | string;
  maxWidth?: string;
  background?: string;
  href: string;
}

export default function PrimaryButton({
  icon,
  text,
  maxWidth,
  background,
  href,
}: IProps) {
  const controls = useAnimation();
  const [hover, setHover] = useState(false);
  return (
    <motion.a
      style={{ maxWidth: maxWidth || "none" }}
      className="w-full mx-auto bg-[#505152] h-[45px] text-white py-3 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden cursor-pointer"
      onHoverStart={() => controls.start({ scaleX: 1 })}
      onHoverEnd={() => controls.start({ scaleX: 0 })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={href}
    >
      <motion.div
        style={{ background }}
        className="absolute inset-0 bg-[#3A3B3C] h-[45px]"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
      <div className="flex items-center gap-2 relative z-10 text-sm">
        <div className={`${hover ? "tiltAnimation origin-center" : ""}`}>
          {icon && icon}
        </div>
        <div>{text}</div>
      </div>
    </motion.a>
  );
}
