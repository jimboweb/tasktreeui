import React, {Component} from 'react';
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
import '../App.css';

class FormBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

//FIXME 181124: createElement just not working need a different way. Map to an array of components?
    render() {
        return <form id={this.props.id}>
            {

                this.props.inputFields.map(input=>{
                    const propsWithKeyAndHandlers = Object.assign({
                        key:"" + this.props.task._id + input.props.name,
                        handlers:this.props.handlers,
                        value: this.props.task[input.props.name]}
                        ,input.props);
                    input.content?
                        React.createElement(input.props.type, propsWithKeyAndHandlers,input.content):
                        React.createElement(input.props.type, propsWithKeyAndHandlers);
                })
            }
        </form>
    }
}

export default FormBuilder;
