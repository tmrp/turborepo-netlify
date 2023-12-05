interface GridProps {
  children: React.ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
};
