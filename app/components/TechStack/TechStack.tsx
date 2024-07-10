"use client";
import Wrapper from "@/app/utils/Wrapper";
import techStackData from "./techStackData";
import Title from "@/app/utils/Title";
import images from "@/app/constants/images";
import Image from "next/image";
import { useState, useEffect } from "react";
import PrimaryCard from "@/app/utils/PrimaryCard";

export default function TechStack() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const margin = 20;

  useEffect(() => {
    const updateWidth = () => {
      if (container) {
        setContainerWidth(container.clientWidth);
        console.log(container.clientWidth);
      }
    };

    updateWidth();
    // console.log(containerWidth);
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
      setContainerWidth(0);
    };
  }, [container]);
  return (
    <Wrapper className="col-span-1 h-[470px] px-4">
      <Title title="Tech Stack" icon={images.ProjectsDisplay} />
      <div className="space-y-2 overflow-hidden mt-4" ref={setContainer}>
        {techStackData.map((item, index) => {
          return (
            <div
              className="flex items-center overflow-hidden"
              style={{ width: `${item.length * containerWidth}px` }}
              key={`line-${index}`}
            >
              {item.map((techStack, index) => {
                return (
                  <PrimaryCard
                    key={`tech-${index}`}
                    style={{ width: `${containerWidth}px` }}
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
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
