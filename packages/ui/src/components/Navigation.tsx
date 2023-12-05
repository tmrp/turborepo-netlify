interface NavigationProps {
  children: React.ReactNode;
  subNav?: React.ReactNode;
}

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <nav className="flex w-full flex-row font-semibold">
      <ul className="flex w-full flex-row gap-2 px-2">{children}</ul>
    </nav>
  );
};
