import { Form } from './components/Form/Form'
import { TextField } from './components/TextField/TextField'
import { TextInput } from './components/TextInput/TextInput'

export function CustomerInput() {
  return (
    <Form>
      <TextInput label={'subject'} labelName={'Your Subject'} />
      <TextField label={'message'} labelName={'Your Message to us'} />
    </Form>
  )
}
