import React, { Component } from 'react';
import '../App.css';
import TaskContainer from '../ContainerComponents/TaskContainer';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addTask:false
        };
    }

    addTask = ()=>this.setState({addTask:true});
    //null taskId will create a new task
    addNewTaskTrue=data=>{
        return [...data, null];
    }

    render() {

        const taskListData = this.addTask?
            this.props.data:
            this.props.data.addNewTaskTrue();
        return (
            <div className="TaskList" id={this.props.catId + "Tasks"}>
                {
                    taskListData.map(
                        taskId => {
                            return <TaskContainer id={taskId} xAccessToken = {this.props.xAccessToken}
                            modifyListActions = {this.props.modifyListActions}/>
                        }
                    )
                }
            </div>
        );
    }
}

export default TaskList;
