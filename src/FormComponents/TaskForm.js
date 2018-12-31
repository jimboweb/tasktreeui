import React, {Component} from 'react';
import '../App.css';
import InputTypes from '../Enums/InputTypes';
import FormBuilder from './FormBuilder';
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'
import formUtil from '../util/formUtil'
import fetchUtil from '../util/fetchUtil'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: [
                {props: {name: 'name',}, type: InputTypes.TEXT},
                {props: {name: 'description'}, type: InputTypes.TEXT},
                {props: {name: 'deadline'}, type: InputTypes.DATE},
                {props: {name: 'startDate'}, type: InputTypes.DATE},
                {props: {name: 'external'}, type: InputTypes.CHECKBOX},
                {props: {name: 'estTime'}, type: InputTypes.NUMBER},
                {props: {name: 'Done', action: this.submitAction}, type: InputTypes.SUBMIT}
            ],


         };




    }

    submitAction=()=>{
        const form = document.getElementById("form"+this.props.id);
        const task = formUtil.formInputsToJsonObject(form);
        this.props.submitAction(task)

    }


    render() {
        return <div className="taskInput" id={"form"+this.props.id}>
            <FormBuilder
                inputFields={this.state.inputFields}
                handlers = {this.state.handlers}
                task = {this.props.task}
            />
        </div>
    }
}

export default TaskForm;
