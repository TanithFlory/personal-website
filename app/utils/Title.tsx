export default function Title({
  title,
  icon,
  className,
}: {
  title: string;
  icon: JSX.Element | string;
  className?: string;
}) {
  return (
    <div className={`mt-6 ${className}`}>
      <div className="text-lg flex items-center gap-2 justify-center">
        <div className="">{icon}</div>
        <span className="gradient-text font-bold">{title}</span>
      </div>
    </div>
  );
}
