import clsx from "clsx";

interface AppBarProps {
  children: React.ReactNode;
}

export const AppBar = ({ children }: AppBarProps) => {
  return (
    <div
      className={clsx(`flex flex-row justify-between rounded-md bg-white p-2`)}
    >
      {children}
    </div>
  );
};
