export const Button = ({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) => {
  return (
    <button
      className={`${className} px-5 py-1`}
    >
      {children}
    </button>
  );
};
