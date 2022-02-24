type DropDownOptionProps = {
  value: string
  optionName: string
}

export function DropDownOption({
  value,
  optionName,
}: DropDownOptionProps): JSX.Element {
  return <option value={value}>{{ optionName }}</option>
}
