type TextFieldProps = {
  label: string
  labelName: string
}

export function TextField({
  label,

  labelName,
}: TextFieldProps): JSX.Element {
  return (
    <label htmlFor={label}>
      {labelName}
      <textarea></textarea>
    </label>
  )
}
