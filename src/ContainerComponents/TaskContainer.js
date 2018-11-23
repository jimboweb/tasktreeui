import React, {Component} from 'react';
import '../App.css';
import DisplayStates from '../util/DisplayStates'
import Task from "../BranchComponents/Task";
import TaskForm from "../FormComponents/TaskForm";
import fetchUtil from '../util/fetchUtil';

class TaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState:DisplayStates.COLLAPSED
        };
    }

    expandCollapse=()=>{
        this.state.displayState===DisplayStates.COLLAPSED?
        this.setState({displayState:DisplayStates.EXPANDED})
        : this.setState({displayState:DisplayStates.COLLAPSED});
    }


    input=()=>{
        this.setState({displayState:DisplayStates.INPUT});
    };

    update=(data)=>{
        // fetchUtil.postData()
    };


    render() {
        return (
            this.state.displayState!==DisplayStates.INPUT?
            <Task data={this.props.data} buttonAction = {this.expandCollapse} displayState = {this.state.displayState}/>
            :<TaskForm task={this.props.data}/>
        )
    }
}

export default TaskContainer;
