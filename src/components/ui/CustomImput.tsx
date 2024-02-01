interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

export function CustomInput(props: InputProps): JSX.Element {
  const { name, type, placeholder, value } = props;
  return (
    <input type={type} name={name} placeholder={placeholder} value={value} />
  );
}
