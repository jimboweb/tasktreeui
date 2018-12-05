import React, {Component} from 'react';
import '../App.css';
import InputTypes from '../Enums/InputTypes';
import FormBuilder from './FormBuilder';

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
                {props: {name: 'Done'}, type: InputTypes.SUBMIT, action: {/*TODO 181205: submit form action here*/}}
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
