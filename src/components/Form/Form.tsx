import { FormEventHandler, ReactNode } from 'react'
import classes from './Form.module.css'

type FormProps = {
  children: ReactNode
  onSubmit: React.FormEventHandler<Element>
}

export function Form({ children, onSubmit }: FormProps): JSX.Element {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
