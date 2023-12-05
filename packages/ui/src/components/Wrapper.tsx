import clsx from "clsx";
import { BACKGROUND_COLOR } from "../constants";

interface WrapperProps {
  children: React.ReactNode;
  backgroundColor?: keyof typeof BACKGROUND_COLOR;
}

export const Wrapper = ({
  children,
  backgroundColor = "next",
}: WrapperProps) => {
  return (
    <div
      className={clsx(
        `h-screen w-full ${BACKGROUND_COLOR[backgroundColor]} p-2`,
      )}
    >
      {children}
    </div>
  );
};
