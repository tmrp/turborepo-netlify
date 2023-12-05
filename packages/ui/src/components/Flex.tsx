import clsx from "clsx";

interface FlexProps {
  children: React.ReactNode;
  direction?: "row" | "col";
  gap?: "gap-1" | "gap-2" | "gap-3" | "gap-4" | "gap-5";
}

export const Flex = ({
  children,
  direction = "row",
  gap = "gap-4",
}: FlexProps) => {
  return (
    <div className={clsx(`flex flex-${direction} ${gap}`)}>{children}</div>
  );
};
