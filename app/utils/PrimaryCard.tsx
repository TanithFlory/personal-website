import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  icon: JSX.Element | string;
  title: string;
}

export default function PrimaryCard({
  icon,
  title,
  className,
  ...rest
}: IProps) {
  return (
    <div
      {...rest}
      className={`rounded-md bg-bgGradient flex items-center p-2 border-brightBorder border-[1px] cursor-pointer gap-2 w-full  h-[58px] transition-all duration-500 ease-in-out`}
    >
      <div> {icon}</div>
      <div className="text-white text-sm">{title}</div>
    </div>
  );
}
