"use client"
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
interface IModal {
  title: string;
  children: React.ReactNode;
  closeModalHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  icon: string | JSX.Element;
}

export default function Modal({
  title,
  children,
  closeModalHandler,
  icon,
}: IModal) {
  useEffect(() => {
    const bodyElement = document.querySelector("body");

    if (bodyElement) {
      bodyElement.style.overflowY = "hidden";
    }

    return () => {
      if (bodyElement) {
        bodyElement.style.overflowY = "scroll";
      }
    };
  }, []);

  return createPortal(
    <div
      className="h-screen w-screen bg-[rgba(0,0,0,0.7)] absolute top-0 left-0 z-[999]"
      onClick={closeModalHandler}
    >
      <motion.div
        className={`fixed top-[50%] left-[50%] bg-black rounded-md p-6 modal-content w-full slideUpAndFade border-2 border-brightBorder max-w-[750px]`}
        initial={{ transform: "translate(-50%,-50%) scale(0)" }}
        animate={{ transform: "translate(-50%,-50%) scale(1)" }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex gap-2 items-center">
          <div>
            {typeof icon === "string" ? (
              <Image src={icon} width={36} height={36} alt={title} />
            ) : (
              icon
            )}
          </div>
          <div className="text-md font-bold">{title}</div>
        </div>
        <div className="mt-4">{children}</div>
      </motion.div>
    </div>,
    document.querySelector("body") as HTMLElement
  );
}
