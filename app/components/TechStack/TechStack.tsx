"use client";
import Wrapper from "@/app/utils/Wrapper";
import techStackData from "./techStackData";
import Title from "@/app/utils/Title";
import images from "@/app/constants/images";
import Image from "next/image";
import { useState, useEffect } from "react";
import PrimaryCard from "@/app/utils/PrimaryCard";
import { motion } from "framer-motion";

export default function TechStack() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [animationCount, setAnimationCount] = useState(0);
  let margin = 16;
  useEffect(() => {
    const updateWidth = () => {
      if (container) {
        setContainerWidth(container.clientWidth);
        console.log(container.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
      setContainerWidth(0);
    };
  }, [container]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (index: number) => {
      return {
        opacity: 1,
        x: -animationCount * (containerWidth + margin),
        transition: {
          delay: index * 0.12,
          duration: 0.5,
          ease: "easeInOut",
        },
      };
    },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCount((prev) =>
        prev === techStackData[0].length - 1 ? 0 : ++prev
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Wrapper className="col-span-1 h-[470px] max-sm:col-span-3  max-md:col-span-3 row-span-2 px-4 ">
      <Title title="Tech Stack" icon={images.ProjectsDisplay} />
      <div className="space-y-2 overflow-hidden mt-4" ref={setContainer}>
        {techStackData.map((item, index) => {
          return (
            <motion.div
              className="flex items-center overflow-hidden gap-4"
              style={{
                width: containerWidth
                  ? `${item.length * containerWidth + margin * item.length}px`
                  : "100%",
              }}
              key={`line-${index}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {item.map((techStack, index) => {
                return (
                  <PrimaryCard
                    key={`tech-${index}`}
                    style={{
                      width: containerWidth ? `${containerWidth}px` : "100%",
                    }}
                    className="flex items-center justify-center gap-2 mx-1"
                    icon={
                      <Image
                        width={35}
                        height={35}
                        src={images[techStack] as string}
                        alt={techStack}
                      />
                    }
                    title={techStack}
                  />
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </Wrapper>
  );
}
