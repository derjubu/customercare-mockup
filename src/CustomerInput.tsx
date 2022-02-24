import { useState } from 'react'
import { Button } from './components/Button/Button'
import { Form } from './components/Form/Form'
import { TextField } from './components/TextField/TextField'
import { TextInput } from './components/TextInput/TextInput'

export function CustomerInput() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function submitRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(subject, message)
  }

  return (
    <Form onSubmit={submitRequest}>
      <TextInput
        label={'subject'}
        labelName={'Your Subject'}
        onChange={(event) => setSubject(event.target.value)}
      />
      <TextField
        label={'message'}
        labelName={'Your Message to us'}
        onChange={(event) => setMessage(event.target.value)}
      />
      <Button>Send</Button>
    </Form>
  )
}
