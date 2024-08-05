"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/app/utils/Wrapper";

interface IProps {
  count: string;
  text: string;
  icon: JSX.Element | string;
}

export default function StatCard({ count, text, icon }: IProps) {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(count);
    const duration = end <= 2 ? 250 : 2000; 
    const startTime = performance.now();

    function animateCount(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easing =
        progress < 0.5 ? 2 * progress ** 2 : -1 + (4 - 2 * progress) * progress;
      const value = Math.floor(easing * (end - start) + start);

      setCurrentCount(value);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    }

    requestAnimationFrame(animateCount);
  }, [count]);

  return (
    <Wrapper className="h-[200px] flex flex-col items-center justify-center w-[280px]">
      <div className="gradient-text text-5xl font-bold">{currentCount}+</div>
      <div className="mt-2 flex items-center gap-2  py-1 px-4 border-primaryBorder border-2 rounded-xl">
        <div>{icon}</div>
        <div className="text-xs">{text}</div>
      </div>
    </Wrapper>
  );
}
