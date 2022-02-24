import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
}

export function Button({ children }: ButtonProps): JSX.Element {
  return <button>{children}</button>
}
