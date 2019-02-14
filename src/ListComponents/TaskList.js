import React, { Component } from 'react';
import '../App.css';
import TaskContainer from '../ContainerComponents/TaskContainer';
import TaskObject from '../ObjectClasses/TaskObject'
import DeleteModal from "../Modals/DeleteModal";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addTask:false,
            taskToDeleteName: '',
            deleteModalOpen:false,
        };
    }

    addTask = ()=>this.setState({addTask:true});
    addNewTaskTrue=data=>{
        if(!data || !data.length)
            return [new TaskObject()];
        data.push(new TaskObject())
    }

    deleteTaskRebaseChildren=(taskId, newParent)=>{
        //todo 190210: create deleteTaskRebaseChildren
    };

    deleteTaskAndChildren=(taskId)=>{
        //todo 190210: create deleteTaskAndChildren
    };

    showDeleteModal=(taskId, taskName)=>{
        //fixme 190214: method is running but delete isn't showing
        console.log('showDeleteModal running');
        this.setState({deleteModalOpen:true});
    }



    render() {
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
                                showDeleteModal = {this.showDeleteModal}
                            />
                        }
                    )
                }
                <DeleteModal
                    modalIsOpen = {this.state.deleteModalOpen}
                    componentType='task'
                    parentTypes = {['component','task']}
                    componentName = {this.state.taskToDeleteName}
                    rebaseChildren = {this.deleteTaskRebaseChildren}
                    deleteChildren = {this.deleteTaskAndChildren}
                />
            </div>
        );
    }
}

export default TaskList;
