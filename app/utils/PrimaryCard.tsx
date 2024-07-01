interface IProps {
  icon: JSX.Element;
  title: string;
}

export default function PrimaryCard({ icon, title }: IProps) {
  return (
    <div className="rounded-md bg-bgGradient flex items-center p-2 border-brightBorder border-[1px] cursor-pointer gap-2 w-full hover:scale-105 active:scale-95 h-[58px] transition-all duration-500 ease-in-out">
      <div> {icon}</div>
      <div className="text-white text-sm">{title}</div>
    </div>
  );
}
