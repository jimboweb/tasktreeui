import React, {Component} from 'react';
import '../App.css';
import DisplayStates from '../Enums/DisplayStates'
import Task from "../BranchComponents/Task";
import TaskForm from "../FormComponents/TaskForm";
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'
import LoadingGif from "../DisplayComponents/LoadingGif";
import TaskObject from '../ObjectClasses/TaskObject'



class TaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState: DisplayStates.COLLAPSED,
            task: undefined,
            taskApiCalls: new TaskApiCalls(),
        }
    }

    expandCollapse = () => {
        this.state.displayState === DisplayStates.COLLAPSED ?
            this.setState({displayState: DisplayStates.EXPANDED})
            : this.setState({displayState: DisplayStates.COLLAPSED});
    }


    input = () => {
        this.setState({displayState: DisplayStates.INPUT});
    };

    update = () => {
        this.state.taskApiCalls.getObject(
            this.props.id,
            this.props.xAccessToken,
            (returnedTask) => this.setState({task: returnedTask}))
    };


    modify =(modifiedTask) =>{
        this.state.taskApiCalls.modifyObject(modifiedTask,this.props.xAccessToken,(returnedTask) => {
            this.setState({task: returnedTask, displayState: DisplayStates.EXPANDED})
        }
        );
    };









    render() {
        if (this.state.task) {
            return (
                this.state.displayState === DisplayStates.INPUT ?
                    <TaskForm data={this.state.task} xAccessToken={this.props.xAccessToken} submitAction = {this.modify}/> :
                    <Task
                        data={this.state.task}
                        buttonAction={this.expandCollapse}
                        editAction={this.input}
                        displayState={this.state.displayState}
                        xAccessToken = {this.props.xAccessToken}
                        showDeleteModal = {this.props.showDeleteModal}
                        update = {this.update}
                    />
            )
        } else if(!this.props.id){
            return <TaskForm data={new TaskObject()} xAccessToken={this.props.xAccessToken}
                             submitAction = {this.props.addTask}/>
        } else {
            this.update();
            return (
                <LoadingGif/>
            )
        }
    }
}

export default TaskContainer;
