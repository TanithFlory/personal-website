import Wrapper from "@/app/utils/Wrapper";

interface IProps {
  count: string;
  text: string;
  icon: JSX.Element;
}

export default function StatCard({ count, text, icon }: IProps) {
  return (
    <Wrapper className="h-[200px] w-full flex flex-col items-center justify-center">
      <div className="gradient-text text-5xl font-bold">{count || 25}+</div>
      <div className="mt-2 flex items-center gap-2  py-1 px-4  border-primaryBorder border-2 rounded-xl">
        <div>{icon}</div>
        <div className="text-xs">{text}</div>
      </div>
    </Wrapper>
  );
}
