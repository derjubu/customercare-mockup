type TextFieldProps = {
  label: string
  labelName: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export function TextField({
  label,
  onChange,
  labelName,
}: TextFieldProps): JSX.Element {
  return (
    <label htmlFor={label}>
      {labelName}
      <textarea onChange={onChange}></textarea>
    </label>
  )
}
