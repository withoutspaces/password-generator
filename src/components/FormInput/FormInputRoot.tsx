type FormInputRootProps = React.HTMLAttributes<HTMLDivElement>;

export function FormInputRoot({ children }: FormInputRootProps) {
  return (
    <div className="flex gap-1 flex-col-reverse items-center p-2 px-4 border border-slate-400 rounded-md">
      {children}
    </div>
  );
}
