import React, {Component} from 'react';
import '../App.css';
import DisplayStates from '../Enums/DisplayStates'
import Task from "../BranchComponents/Task";
import TaskForm from "../FormComponents/TaskForm";
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'
import LoadingGif from "../DisplayComponents/LoadingGif";
import TaskObject from '../ObjectClasses/TaskObject'
import ModifyTaskListActions from "../ListActions/ModifyTaskListActions";



class TaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState: DisplayStates.COLLAPSED,
            task: undefined,
            taskApiCalls: new TaskApiCalls()
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

    //todo 190118: need to create a delete button that creates a rebase/delete children modal






    render() {
        if (this.state.task) {
            const modifyListActions = new ModifyTaskListActions(
                this.state.task._id,
                this.props.xAccessToken,
                this.update
            )
            return (
                this.state.displayState === DisplayStates.INPUT ?
                    <TaskForm data={this.state.task} xAccessToken={this.props.xAccessToken} submitAction = {this.modify}/> :
                    <Task
                        data={this.state.task}
                        buttonAction={this.expandCollapse}
                        editAction={this.input}
                        displayState={this.state.displayState}
                        xAccessToken = {this.props.xAccessToken}
                        modifyListActions = {modifyListActions}
                    />
            )
        } else if(!this.props.id){
            //fixme 190205: right now the task form is appearing no matter what, why?
            return <TaskForm data={new TaskObject()} xAccessToken={this.props.xAccessToken}
                             submitAction = {this.props.modifyListActions.addTask}/>
        } else {
            this.update();
            return (
                <LoadingGif/>
            )
        }
    }
}

export default TaskContainer;
