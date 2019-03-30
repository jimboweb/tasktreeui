import React, {Component} from 'react';
import '../App.css';
import InputTypes from "../Enums/InputTypes";
import formUtil from "../util/formUtil";
import FormBuilder from './FormBuilder';
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: [
                {props: {name: 'Note',}, type: InputTypes.TEXT},
                {props: {name: 'Done', action: this.submitAction}, type: InputTypes.SUBMIT}
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
                id={this.props.id}
            />
        </div>
    }
}


export default NoteForm;
