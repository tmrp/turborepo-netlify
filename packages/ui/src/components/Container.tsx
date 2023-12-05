import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  space?: string;
}

export const Container = ({ children, space = "4" }: ContainerProps) => {
  return (
    <div className={clsx(`container mx-auto max-w-2xl py-${space}`)}>
      {children}
    </div>
  );
};
