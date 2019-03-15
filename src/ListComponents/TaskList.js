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
            newTask:false,
            taskToDeleteName: '',
            taskToDeleteId: 0,
            deleteModalOpen:false,
        };

        this.taskApiCalls = new TaskApiCalls();
        this.showDeleteModal = this.showDeleteModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);

    }

    newTask = ()=>this.setState({newTask:true});
    addNewTaskTrue=data=>{
        if(!data || !data.length)
            return [0];
        data.push(0)
    };

    addTask =(task)=>{
        this.taskApiCalls.createTask(task, this.props.parentType, this.props.parentId, this.props.xAccessToken, this.props.update)
    }

    deleteTaskRebaseChildren=(taskId, newParentType, newParentId)=>{
        this.taskApiCalls.deleteTaskRebaseChildren(taskId, this.props.xAccessToken,newParentType, newParentId, ()=>this.props.update);
    };
    deleteTaskAndChildren=(taskId)=>{
        this.taskApiCalls.deleteTaskAndChildren(taskId,this.props.xAccessToken,()=>this.props.update)
    };

    showDeleteModal=(taskId, taskName)=>{
        this.setState({taskToDeleteName: taskName, taskToDeleteId: taskId});
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
        const taskListData = this.state.newTask?
            this.addNewTaskTrue(this.props.data):
            this.props.data;
        return (
            <div className="TaskList" id={this.props.catId + "Tasks"}>
                <div className='addButton'>
                    <button  onClick={this.newTask}>+</button>
                </div>

                {
                    //fixme 190314: taskId here is the whole task, not just the id. so when I do `!taskId` in the task component it's not undefined
                    taskListData.map(
                        taskId => {
                            return <TaskContainer
                                id={taskId}
                                xAccessToken = {this.props.xAccessToken}
                                showDeleteModal = {this.showDeleteModal}
                                addTask = {this.addTask}
                            />
                        }
                    )
                }
                <DeleteModal
                    modalIsOpen = {this.state.deleteModalOpen}
                    closeModal = {this.closeDeleteModal}
                    onAfterOpen = {this.afterOpenModal}
                    componentType='task'
                    parentTypes = {['category','task']}
                    componentName = {this.state.taskToDeleteName}
                    rebaseChildren = {this.deleteTaskRebaseChildren}
                    deleteChildren = {this.deleteTaskAndChildren}
                    taskToDeleteName = {this.state.taskToDeleteName}
                    taskToDeleteId = {this.state.taskToDeleteId}
                    xAccessToken = {this.props.xAccessToken}
                />
            </div>
        );
    }
}

export default TaskList;
