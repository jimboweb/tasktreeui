import TextInput from '../InputComponents/TextInput';
import PasswordInput from '../InputComponents/PasswordInput';
import ResetInput from '../InputComponents/ResetInput';
import CheckboxInput from '../InputComponents/CheckboxInput';
import SubmitInput from '../InputComponents/SubmitInput';
import ButtonInput from '../InputComponents/ButtonInput';
import DateInput from '../InputComponents/DateInput';
import EmailInput from '../InputComponents/EmailInput';
import NumberInput from '../InputComponents/NumberInput';
import TimeIntervalInput from '../InputComponents/TimeIntervalInput'

const InputTypes = Object.freeze({
    TEXT: TextInput,
    PASSWORD: PasswordInput,
    SUBMIT: SubmitInput,
    RESET: ResetInput,
    CHECKBOX: CheckboxInput,
    BUTTON: ButtonInput,
    DATE: DateInput,
    EMAIL: EmailInput,
    NUMBER: NumberInput,
    TIMEINTERVAL: TimeIntervalInput
});



export default InputTypes;
