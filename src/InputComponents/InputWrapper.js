import React from "react";
import './App.css';
import TextInput from '../InputComponents/TextInput';
import PasswordInput from '../InputComponents/PasswordInput';
import ResetInput from '../InputComponents/ResetInput';
import CheckboxInput from '../InputComponents/CheckboxInput';
import SubmitInput from '../InputComponents/SubmitInput';
import RadioInput from '../InputComponents/RadioInput';
import ButtonInput from '../InputComponents/ButtonInput';
import DateInput from "../InputComponents/DateInput";
import EmailInput from '../InputComponents/EmailInput';
import NumberInput from '../InputComponents/NumberInput';
import TimeIntervalInput from '../InputComponents/TimeIntervalInput'
import InputTypes from '../Enums/InputTypes'


function InputWrapper(props) {
    switch (props.type) {
        case InputTypes.TEXT:
            return <TextInput {...props}/>;
        case InputTypes.PASSWORD:
            return <PasswordInput {...props}/>;
        case InputTypes.BUTTON:
            return <ButtonInput {...props}/>;
        case InputTypes.CHECKBOX:
            return <CheckboxInput {...props}/>;
        case InputTypes.DATE:
            return <DateInput {...props}/>;
        case InputTypes.EMAIL:
            return <EmailInput {...props}/>;
        case InputTypes.NUMBER:
            return <NumberInput {...props}/>;
        case InputTypes.RADIO:
            return <RadioInput {...props}/>;
        case InputTypes.RESET:
            return <ResetInput {...props}/>;
        case InputTypes.SUBMIT:
            return <SubmitInput {...props}/>;
        case InputTypes.TIMEINTERVAL:
            return <TimeIntervalInput {...props}/>;
        default:
            return <div>
            </div>;

    }
    return (
        <div>
        </div>
    );
}

export default InputWrapper;