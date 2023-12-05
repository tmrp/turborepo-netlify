import clsx from "clsx";
import { TYPOGRAPHY } from "../constants";

interface TypographyProps {
  children: React.ReactNode;
  invert?: boolean;
}

export const Typography = ({ children, invert }: TypographyProps) => {
  return (
    <div className={clsx(`prose lg:prose-xl`, invert && TYPOGRAPHY.invert)}>
      {children}
    </div>
  );
};
