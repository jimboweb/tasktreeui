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
                //TODO 181223: put arguments here. the data will be what's in the form, which I can get with
                // getElementById or whatever. i guess the function has to be written down below.
                {props: {name: 'Done', action: TaskApiCalls.createTask(/* */)}, type: InputTypes.SUBMIT}
            ],


         };




    }

    const submitAction=()=>{
        const form = document.getElementById("form"+this.props.id);
        const parentType = this.props.task.parentType;
        //and I have to know the parent type
        //call createTask or modifyTask, I have to know which one
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
