import React, { Component } from 'react';
import '../App.css';
import TaskContainer from '../ContainerComponents/TaskContainer';
import TaskObject from '../ObjectClasses/TaskObject'
import DeleteModal from "../Modals/DeleteModal";
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addTask:false,
            taskToDeleteName: '',
            deleteModalOpen:false,
        };

        this.showDeleteModal = this.showDeleteModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);

    }

    addTask = ()=>this.setState({addTask:true});
    addNewTaskTrue=data=>{
        if(!data || !data.length)
            return [new TaskObject()];
        data.push(new TaskObject())
    }

    deleteTaskRebaseChildren=(taskId, newParentType, newParentId)=>{
        TaskApiCalls.deleteTaskRebaseChildren(taskId, newParentType, newParentId, ()=>this.props.update);
    };

    deleteTaskAndChildren=(taskId)=>{
        TaskApiCalls.deleteTaskAndChildren(taskId,this.props.xAccessToken,()=>this.props.update)
    };

    showDeleteModal=(taskId, taskName)=>{
        this.setState({deleteModalOpen:true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeDeleteModal() {
        this.setState({deleteModalOpen: false});
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
                    closeModal = {this.closeDeleteModal}
                    onAfterOpen = {this.afterOpenModal}
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
