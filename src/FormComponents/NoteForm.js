import React, {Component} from 'react';
import './App.css';
import InputTypes from "../Enums/InputTypes";
import formUtil from "../util/formUtil";
import FormBuilder from "./TaskForm";
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: [
                {props: {Note: 'name',}, type: InputTypes.TEXT},
            ],


        };
    }

    submitAction=()=>{
        const form = document.getElementById("form"+this.props.id);
        const formData = formUtil.formInputsToObject(form);
        const noteJson = Object.assign(this.props.data,formData);
        this.props.submitAction(noteJson)

    }


    render() {
        return <div className="noteInput" id={"form"+this.props.id}>
            <FormBuilder
                inputFields={this.state.inputFields}
                handlers = {this.state.handlers}
                data = {this.props.data}
            />
        </div>
    }
}
}

export default NoteForm;
