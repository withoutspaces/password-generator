type ActionButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function ActionButton({ children, ...rest }: ActionButtonProps) {
  return (
    <button
      type="button"
      className="text-2xl rounded-full size-10 p-1 border border-slate-100 cursor-pointer flex items-center justify-center hover:bg-blue-800"
      {...rest}
    >
      {children}
    </button>
  );
}
