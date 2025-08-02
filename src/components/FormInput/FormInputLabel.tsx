type FormInputLabelProps = React.HTMLAttributes<HTMLLabelElement>;

export function FormInputLabel({ children }: FormInputLabelProps) {
  return <label className="text-slate-900 font-bold">{children}</label>;
}
