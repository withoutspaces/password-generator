type PassAreaProps = React.HTMLAttributes<HTMLButtonElement>;

export function PassArea({ children, ...rest }: PassAreaProps) {
  return (
    <button
      className="w-full bg-blue-900 h-12 p-4 font-semibold flex justify-center items-center rounded-md cursor-pointer border-2 border-blue-800"
      {...rest}
    >
      {children}
    </button>
  );
}
