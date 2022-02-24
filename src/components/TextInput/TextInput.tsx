type TextInputProps = {
  label: string
  labelName: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export function TextInput({
  label,
  labelName,
  onChange,
}: TextInputProps): JSX.Element {
  return (
    <label htmlFor={label}>
      {labelName}
      <input type="text" id={label} onChange={onChange}></input>
    </label>
  )
}
