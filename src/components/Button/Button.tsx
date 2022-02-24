import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: (event: any) => void
}

export function Button({ children, onClick }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{children}</button>
}
