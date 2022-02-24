type TextInputProps = {
  label: string
  labelName: string
}

export function TextInput({
  label,

  labelName,
}: TextInputProps): JSX.Element {
  return (
    <label htmlFor={label}>
      {labelName}
      <input type="text" id={label}></input>
    </label>
  )
}
