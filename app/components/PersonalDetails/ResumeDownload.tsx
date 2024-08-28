"use client";

import Download from "@/app/constants/SVG/Download";
import { useState } from "react";

export default function ResumeDownload() {
  const [animate, setAnimate] = useState(false);
  function setAnimation() {
    setAnimate((prev) => !prev);
  }
  return (
    <div
      className="absolute right-[16px] top-[16px] h-[42px] bg-[#505152] hover:bg-primary rounded-md flex items-center justify-center sm:px-4 gap-2 cursor-pointer max-sm:h-[30px] max-sm:w-[30px]"
      onMouseEnter={setAnimation}
      onMouseLeave={setAnimation}
    >
      <div className="text-sm max-sm:hidden">Resume</div>
      <div>
        <Download animate={animate} />
      </div>
    </div>
  );
}
