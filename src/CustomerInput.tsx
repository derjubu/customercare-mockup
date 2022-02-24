import { Button } from './components/Button/Button'
import { Form } from './components/Form/Form'
import { TextField } from './components/TextField/TextField'
import { TextInput } from './components/TextInput/TextInput'

export function CustomerInput() {
  function submitRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <Form onSumbit={submitRequest}>
      <TextInput label={'subject'} labelName={'Your Subject'} />
      <TextField label={'message'} labelName={'Your Message to us'} />
      <Button>Send</Button>
    </Form>
  )
}
