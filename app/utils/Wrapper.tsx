interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ className, children }: IProps) {
  return (
    <div className={`${className || ""} border-secondaryBorder border-2 bg-bgGradient rounded-xl`}>
      {children}
    </div>
  );
}
