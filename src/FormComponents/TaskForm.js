import React, {Component} from 'react';
import '../App.css';
import InputTypes from '../Enums/InputTypes';
import FormBuilder from './FormBuilder';
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'

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
                //TODO 181221: I have to use the action in the form now. do I put the arguments here or there?
                {props: {name: 'Done'}, type: InputTypes.SUBMIT, action: TaskApiCalls.createTask}
            ],

         };




    }


    render() {
        return <div className="taskInput" id={this.props.id}>
            <FormBuilder
                inputFields={this.state.inputFields}
                handlers = {this.state.handlers}
                task = {this.props.task}
            />
        </div>
    }
}

export default TaskForm;
