import images from "@/app/constants/images";
import PrimaryCard from "@/app/utils/PrimaryCard";
import Wrapper from "@/app/utils/Wrapper";

const projectsData = [
  {
    title: "Web Scraper",
    icon: images.WebScraper,
  },
  {
    title: "Cryptocurrency Tracker",
    icon: images.CryptoCurrency,
  },
  {
    title: "Discord Bot",
    icon: images.Discord,
  },
  {
    title: "CRUD Application",
    icon: images.WebScraper,
  },
  {
    title: "Social App",
    icon: images.SocialApp,
  },
];

export default function Projects() {
  return (
    <Wrapper className="flex flex-col items-center justify-start col-span-2 h-[470px]" >
      <div className="mt-6">
        <div className="text-md flex items-center gap-2">
          <div className="gradient-text">{images.ProjectsDisplay}</div>
          <span className="text-lg">Projects</span>
        </div>
      </div>
      <div className="w-full space-y-4 my-6 px-6 ">
        {projectsData.map((item, index) => {
          return <PrimaryCard {...item} key={index} />;
        })}
      </div>
    </Wrapper>
  );
}
