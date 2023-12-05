import clsx from "clsx";

import { SPACE_BOTTOM, SPACE_LEFT, SPACE_RIGHT, SPACE_TOP } from "../constants";

interface BoxProps {
  children: React.ReactNode;
  spaceTop?: keyof typeof SPACE_TOP;
  spaceBottom?: keyof typeof SPACE_BOTTOM;
  spaceLeft?: keyof typeof SPACE_LEFT;
  spaceRight?: keyof typeof SPACE_RIGHT;
}

export const Box = ({
  children,
  spaceTop = "2",
  spaceBottom = "2",
  spaceLeft = undefined,
  spaceRight = undefined,
}: BoxProps) => {
  return (
    <div
      className={clsx(
        `${SPACE_TOP[spaceTop]} ${SPACE_BOTTOM[spaceBottom]}`,
        spaceLeft ? SPACE_LEFT[spaceLeft] : undefined,
        spaceRight ? SPACE_RIGHT[spaceRight] : undefined,
      )}
    >
      {children}
    </div>
  );
};
