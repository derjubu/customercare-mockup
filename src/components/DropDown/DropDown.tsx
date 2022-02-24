import { ReactNode } from 'react'

type DropDownProps = {
  children: ReactNode
  name: string
  id: string
}

export function DropDown({ name, id, children }: DropDownProps): JSX.Element {
  return (
    <select name={name} id={id}>
      {children}
    </select>
  )
}
