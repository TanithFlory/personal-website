import images from "@/app/constants/images";
import PrimaryCard from "@/app/utils/PrimaryCard";
import Title from "@/app/utils/Title";
import Wrapper from "@/app/utils/Wrapper";

export default function Socials() {
  const socialsData = [
    {
      title: "Github",
      icon: images.Github,
      href: "https://github.com/TanithFlory",
    },
    {
      title: "Email",
      icon: images.Email,
      href: "mailto:tanithflory6660@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: images.LinkedIn,
      href: "https://in.linkedin.com/in/tanith-flory-0b737a1b7",
    },
  ];

  return (
    <Wrapper className="bg-[#121416] rounded-xl col-span-2 row-span-2 h-[400px] border-2 sm:h-[348px] border-[#28292b] max-sm:col-span-3 max-md:col-span-3">
      <Title title="Socials" icon={images.Socials} />
      <div className="w-full space-y-4 my-6 px-6 mx-auto">
        {socialsData.map((item, index) => {
          return (
            <a href={item.href} key={index} target="_blank" className="mb-4 block">
              <PrimaryCard {...item}/>
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
}
