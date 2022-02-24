import { ReactNode } from 'react'
import classes from './Form.module.css'

type FormProps = {
  children: ReactNode
}

export function Form({ children }: FormProps): JSX.Element {
  return <form className={classes.form}>{children}</form>
}
