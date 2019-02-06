import React, { Component } from 'react';
import '../App.css';
import TaskContainer from '../ContainerComponents/TaskContainer';
import TaskObject from '../ObjectClasses/TaskObject'

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
        if(!data || !data.length)
            return [new TaskObject()];
        data.push(new TaskObject())
    }

    render() {
        //fixme 190206: the lists alwqys have a 'null' at the end
        const taskListData = this.state.addTask?
            this.addNewTaskTrue(this.props.data):
            this.props.data;
        return (
            <div className="TaskList" id={this.props.catId + "Tasks"}>
                {
                    taskListData.map(
                        taskId => {
                            return <TaskContainer
                                id={taskId}
                                xAccessToken = {this.props.xAccessToken}
                                modifyListActions = {this.props.modifyListActions}
                            />
                        }
                    )
                }
            </div>
        );
    }
}

export default TaskList;
