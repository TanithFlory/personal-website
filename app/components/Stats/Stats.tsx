import images from "@/app/constants/images";
import StatCard from "./StatCard";

const statsData = [
  {
    text: "Projects",
    icon: images.Projects,
    count: "25",
  },
  {
    text: "Experience",
    icon: images.Experience,
    count: "2",
  },
  {
    text: "Clients",
    icon: images.Clients,
    count: "10",
  },
];

export default function Stats() {
  return (
    <div className="flex items-center gap-2 col-span-3">
      {statsData.map((item, index) => (
        <StatCard {...item} key={index} />
      ))}
    </div>
  );
}
