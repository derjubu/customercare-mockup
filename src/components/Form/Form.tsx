import { FormEventHandler, ReactNode } from 'react'
import classes from './Form.module.css'

type FormProps = {
  children: ReactNode
  onSumbit: React.FormEventHandler<Element>
}

export function Form({ children }: FormProps): JSX.Element {
  return <form className={classes.form}>{children}</form>
}
