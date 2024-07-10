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
      className="absolute right-[16px] top-[16px] h-[42px] bg-[#505152] hover:bg-primary px-4 rounded-md py-2 flex items-center gap-2 cursor-pointer"
      onMouseEnter={setAnimation}
      onMouseLeave={setAnimation}
    >
      <div>Resume</div>
      <div>
        <Download animate={animate} />
      </div>
    </div>
  );
}
