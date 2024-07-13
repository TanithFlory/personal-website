import images from "@/app/constants/images";
import Title from "@/app/utils/Title";
import WorkExperienceCard from "./WorkExperienceCard";
import Wrapper from "@/app/utils/Wrapper";

export default function WorkExperience() {
  return (
    <Wrapper className="col-span-2 row-span-1 pb-6 sm:col-span-4 md:col-span-3 px-4">
      <div>
        <Title title="Work Experience" icon={images.WorkExperience} />
      </div>
      <div className="mt-4 flex items-center gap-4 justify-center">
        {workExperienceData.map((item, index) => {
          return (
            <WorkExperienceCard {...item} key={index}>
              <div></div>
            </WorkExperienceCard>
          );
        })}
      </div>
    </Wrapper>
  );
}

const workExperienceData = [
  {
    name: "AetherByte Tech Solutions",
    logo: images.AetherByte,
  },
  {
    name: "Modo Technologies",
    logo: images.Modo,
  },
];
