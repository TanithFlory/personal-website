interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ className, children }: IProps) {
  return (
    <div className={`${className || ""} border-primaryBorder border-2 bg-bgGradient`}>
      {children}
    </div>
  );
}
