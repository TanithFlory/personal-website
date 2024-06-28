interface IProps {
  icon: JSX.Element;
  title: string;
}

export default function PrimaryCard({ icon, title }: IProps) {
  return (
    <div className="bg-secondary rounded-md flex items-center p-2 border border-gray-700 cursor-pointer gap-2">
      <div> {icon}</div>
      <div className="text-white">{title}</div>
    </div>
  );
}
