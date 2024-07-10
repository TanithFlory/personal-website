import images from "@/app/constants/images";
import PrimaryCard from "@/app/utils/PrimaryCard";
import Title from "@/app/utils/Title";
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
    <Wrapper className="flex flex-col items-center justify-start col-span-2 h-[470px]">
      <Title title="Projects" icon={images.ProjectsDisplay} />
      <div className="w-full space-y-4 my-6 px-6 ">
        {projectsData.map((item, index) => {
          return <PrimaryCard {...item} key={index} />;
        })}
      </div>
    </Wrapper>
  );
}
