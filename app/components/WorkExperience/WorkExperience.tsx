import images from "@/app/constants/images";
import Title from "@/app/utils/Title";
import WorkExperienceCard from "./WorkExperienceCard";
import Wrapper from "@/app/utils/Wrapper";

export default function WorkExperience() {
  return (
    <Wrapper className="bg-[#121416] rounded-xl col-span-2 row-span-2  h-[220px] xl:-mt-[70px] border-2 border-[#28292b] sm:col-span-4 md:col-span-3 px-4">
      <div>
        <Title title="Work Experience" icon={images.WorkExperience} />
      </div>
      <div className="mt-10 flex items-center gap-4 justify-center">
        {workExperienceData.map((item, index) => {
          return (
            <WorkExperienceCard {...item} key={index}>
              {item.content}
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
    content: (
      <>
        <div>
          <div className="mb-4 font-bold text-sm">
            September 2022 - September 2023
          </div>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
            <li>
              Achieved exceptional page insights scores ranging from 98 to 100,
              significantly enhancing user experience.
            </li>
            <li>
              Developed and maintained multiple websites using Next.js and
              React.js, ensuring high performance and reliability.
            </li>
            <li>
              Implemented numerous UI/UX improvements, resulting in a more
              intuitive and engaging user interface.
            </li>
            <li>
              Collaborated with cross-functional teams to implement responsive
              designs, ensuring seamless functionality across various devices
              and screen sizes.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    name: "Modo Technologies",
    logo: images.Modo,
    content: (
      <>
        <div>
          <div className="mb-4 font-bold text-sm">December 2023 - Present</div>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
            <li>
              Developed a primary project to build a dashboard for building
              automation using Loxone Miniserver and its web socket, improving
              control and monitoring capabilities.
            </li>
            <li>
              Enhanced and maintained the company website, ensuring it remained
              up-to-date and functional.
            </li>
            <li>
              Implemented various features on Shopify, including custom bundles,
              bundle pop-ups, starter kits, promo-code pop-ups and
              cross-organization functionalities such as sharing delivery
              details between transport management companies.
            </li>
            <li>
              Mentored two team members, a junior developer and an intern,
              providing guidance in HTML, CSS, JavaScript, TypeScript, and
              React.
            </li>
          </ul>
        </div>
      </>
    ),
  },
];
