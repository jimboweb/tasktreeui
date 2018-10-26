import React, {Component} from 'react';
import './App.css';
import DisplayStates from './util/DisplayStates'
import Task from "./Task";
import TaskInput from "./TaskInput";

class TaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState:DisplayStates.COLLAPSED
        };
    }

    expandCollapse(displayState){
        displayState===DisplayStates.COLLAPSED?
        this.setState({displayStates:DisplayStates.EXPANDED})
        : this.setState({displayStates:DisplayStates.EXPANDED});
    }


    input(){
        this.setState({displayStates:DisplayStates.INPUT});
    }


    render() {
        return (
            this.state.displayState!==DisplayStates.INPUT?
            <Task data={this.props.data} buttonAction = {this.expandCollapse}/>
            :<TaskInput data={this.props.data}/>
        )
    }
}

export default TaskContainer;
