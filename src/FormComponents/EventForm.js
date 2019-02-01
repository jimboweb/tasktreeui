import React, {Component} from 'react';
import '../App.css';
import InputTypes from '../Enums/InputTypes';
import FormBuilder from './FormBuilder';
import formUtil from '../util/formUtil'

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: [
                {props: {name: 'name',}, type: InputTypes.TEXT},
                {props: {name: 'date'}, type: InputTypes.DATE},
                {props: {name: 'length'}, type: InputTypes.NUMBER},
            ],
        };
    }

    //fixme: (done?)'external' is "on" when it should be "true"
    submitAction=()=>{
        const form = document.getElementById("form"+this.props.id);
        const formData = formUtil.formInputsToObject(form);
        const taskJson = Object.assign(this.props.data,formData);
        this.props.submitAction(taskJson)

    }


    render() {
        return <div className="eventInput" id={"form"+this.props.id}>
            <FormBuilder
                inputFields={this.state.inputFields}
                handlers = {this.state.handlers}
                data = {this.props.data}
            />
        </div>
    }
}

export default EventForm;
