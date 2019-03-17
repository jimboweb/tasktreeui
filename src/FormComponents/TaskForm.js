import React, {Component} from 'react';
import '../App.css';
import InputTypes from '../Enums/InputTypes';
import FormBuilder from './FormBuilder';
import formUtil from '../util/formUtil'

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
        const formData = formUtil.formInputsToObject(form);
        const taskJson = Object.assign(this.props.data,formData);
        this.props.submitAction(taskJson)

    }


    render() {
        return <div style = {{display:this.props.display?this.props.display:'block'}} className="taskInput" id={"form"+this.props.id}>
            <FormBuilder
                inputFields={this.state.inputFields}
                handlers = {this.state.handlers}
                data = {this.props.data}
            />
        </div>
    }
}

export default TaskForm;
