import images from "@/app/constants/images";

export default function Tags() {
  return (
    <div className="my-4 flex flex-wrap items-center justify-left gap-2 bg-bgGradient border-2 border-primaryBorder rounded-md w-full h-42 sm:h-24 p-4">
      {tags.map(({ icon, text }, index) => {
        return (
          <div
            key={index}
            className="bg-[#383838] inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-white"
          >
            <div>{icon}</div>
            <div>{text}</div>
          </div>
        );
      })}
    </div>
  );
}

const tags = [
  {
    icon: images.Time,
    text: "IST",
  },
  {
    icon: images.Location,
    text: "Bangalore, India",
  },
  {
    icon: images.Language,
    text: "English",
  },
  {
    icon: images.Developer,
    text: "Fullstack Developer",
  },
  {
    icon: images.MERN,
    text: "MERN",
  },
  {
    text: "Microcontroller",
    icon: images.MicroController,
  },
];
