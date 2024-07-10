import Wrapper from "@/app/utils/Wrapper";
import Image from "next/image";
import profilePic from "../../../public/download.png";
import Title from "@/app/utils/Title";
import images from "@/app/constants/images";
import ResumeDownload from "./ResumeDownload";

export default function PersonalDetails() {
  return (
    <Wrapper className="col-span-3 h-[346px] row-span-2 px-4 relative">
      <Title title="About me" icon={images.ProjectsDisplay} />
      <div>
        <div>
          <Image
            src={profilePic}
            width={100}
            height={100}
            alt="ProfilePicture"
          />
        </div>
        <ResumeDownload />
      </div>
    </Wrapper>
  );
}
