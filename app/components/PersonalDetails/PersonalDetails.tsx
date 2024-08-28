import Wrapper from "@/app/utils/Wrapper";
import Image from "next/image";
import profilePic from "../../../public/download.png";
import Title from "@/app/utils/Title";
import images from "@/app/constants/images";
import ResumeDownload from "./ResumeDownload";
import Tags from "./Tags";
import PrimaryButton from "@/app/utils/PrimaryButton";

export default function PersonalDetails() {
  return (
    <Wrapper className="col-span-3 h-[380px] max-sm:h-[auto] row-span-2 px-4 relative">
      <Title title="About me" icon={images.ProjectsDisplay} />
      <div className="flex gap-4 mt-4 flex-wrap">
        <div className="">
          <Image
            src={profilePic}
            width={100}
            height={100}
            alt="ProfilePicture"
            className="h-[120px] w-[120px] rounded-md object-contain"
          />
        </div>
        <div className="text-sm">
          <div className="flex items-center gap-2 px-2 py-1 border-primaryBorder border-2 bg-bgGradient rounded-full">
            <div>
              <svg
                className="h-1.5 w-1.5 fill-[#4ADE80]"
                viewBox="0 0 6 6"
                aria-hidden="true"
              >
                <circle cx="3" cy="3" r="3"></circle>
              </svg>
            </div>
            <div>Available to work</div>
          </div>
          <div className="mt-2">Tanith Flory</div>
          <div className="mt-2 flex items-center gap-1 flex-wrap">
            <div className="">I am a </div>
            <span className="text-primary font-bold inline-block">
              Full-Stack Developer.
            </span>
          </div>
        </div>
      </div>
      <Tags />
      <PrimaryButton href="mailto:tanithflory6660@gmail.com" text="Email me" icon={images.Email} maxWidth="320px" />
      <ResumeDownload />
    </Wrapper>
  );
}
