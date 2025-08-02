type FormInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ ...props }: FormInputProps) {
  return <input className="size-8 sm:size-10" {...props} />;
}
