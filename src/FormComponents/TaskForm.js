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

    //TODO 191228: update the new task in the tasklist state so it'll reload. use this specific syntax: Object.assign([], array, { [i]: newItem })
    submitAction=()=>{
        const form = document.getElementById("form"+this.props.id);
        const task = formUtil.formInputsToJsonObject(form);
        if(this.props.modify){
            TaskApiCalls.modifyTask(task,this.props.xAccessToken, resp=>console.log(resp));
        } else {
            const parentType = this.props.task.parentType;
            const parentId = this.props.task.parent;
            TaskApiCalls.createTask(task,parentType,parentId,this.props.xAccessToken, resp=>console.log(resp));
        }
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
