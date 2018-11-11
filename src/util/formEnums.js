import TextInput from '../InputComponents/TextInput';
import PasswordInput from '../InputComponents/PasswordInput';
import ResetInput from '../InputComponents/ResetInput';
import CheckboxInput from '../InputComponents/CheckboxInput';
import SubmitInput from '../InputComponents/SubmitInput';
import RadioInput from '../InputComponents/RadioInput';
import BButtonInput from '../InputComponents/ButtonInput';
import DateInput from "../InputComponents/DateInput";
import EmailInput from '../InputComponents/EmailInput';
import NumberInput from '../InputComponents/NumberInput';
import TimeIntervalInput from '../InputComponents/TimeIntervalInput'

const inputTypes = Object.freeze({
    TEXT: TextInput,
    PASSWORD: PasswordInput,
    SUBMIT: SubmitInput,
    RESET: ResetInput,
    RADIO: RadioInput,
    CHECKBOX: CheckboxInput,
    BUTTON: BButtonInput,
    DATE: DateInput,
    EMAIL: EmailInput,
    NUMBER: NumberInput,
    TIMEINTERVAL: TimeIntervalInput
});
//TODO 181110: make a StandardForm object that creates form inputs for each of these types
//TODO 181110: put that in the TaskForm section

export const InputTypes = inputTypes;
