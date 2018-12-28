import React, {Component} from 'react';
import '../App.css';
import DisplayStates from '../Enums/DisplayStates'
import Task from "../BranchComponents/Task";
import TaskForm from "../FormComponents/TaskForm";
import {UserConsumer} from "../UserContext";

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

    //TODO 181209: I think I need to put the UserProvider around the TaskForm here so TaskForm can get the Token

    render() {
        return (
            this.state.displayState!==DisplayStates.INPUT?
            <Task data={this.props.data} buttonAction = {this.expandCollapse} editAction = {this.input} displayState = {this.state.displayState}/>
            :<UserConsumer>{context=><TaskForm task={this.props.data} xAccessToken = {context} newTask = {this.props.newTask}/>}</UserConsumer>
        )
    }
}

export default TaskContainer;
