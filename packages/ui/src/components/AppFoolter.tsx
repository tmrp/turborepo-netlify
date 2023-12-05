interface AppFooterProps {
  children: React.ReactNode;
}

export const AppFooter = ({ children }: AppFooterProps) => {
  return <div>{children}</div>;
};
