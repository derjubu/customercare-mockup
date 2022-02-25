import { useState } from 'react'
import { Button } from './components/Button/Button'
import { Form } from './components/Form/Form'
import { TextField } from './components/TextField/TextField'
import { TextInput } from './components/TextInput/TextInput'

export function CustomerInput() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const currentRequest: any = {
    subject: subject,
    message: message,
  }

  async function sendRequest(newRequest: any) {
    const response = await fetch('http://localhost:3001/api/submitRequest/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRequest),
    })
    if (response.status === 200) {
      console.log(response)
      console.log('Request received')
    } else {
      console.log('An error occured =(')
    }
  }

  function submitRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendRequest(currentRequest)
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
