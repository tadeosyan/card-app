interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => (
  <div className={className}>{children}</div>
);
