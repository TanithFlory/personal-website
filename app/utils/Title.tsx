export default function Title({
  title,
  icon,
}: {
  title: string;
  icon: JSX.Element | string;
}) {
  return (
    <div className="mt-6">
      <div className="text-md flex items-center gap-2 justify-center">
        <div className="">{icon}</div>
        <span className="text-xl font-bold">{title}</span>
      </div>
    </div>
  );
}
