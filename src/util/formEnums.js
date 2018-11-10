import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput'
import ResetInput from '../ResetInput'
import CheckboxInput from '../CheckboxInput'
const inputTypes = Object.freeze({
    TEXT: TextInput,
    PASSWORD: PasswordInput,
    SUBMIT: 'submit',
    RESET: ResetInput,
    RADIO:'radio',
    CHECKBOX: CheckboxInput,
    BUTTON: 'button',
    DATE: 'date',
    EMAIL: 'email',
    NUMBER: 'number',
    TIMEINTERVAL: 'time'
});
//TODO 181110: make the rest of these object
//TODO 181110: import them and match them to the type
//TODO 181110: make a StandardForm object that creates form inputs for each of these types
//TODO 181110: put that in the TaskInput section

export const InputTypes = inputTypes;
