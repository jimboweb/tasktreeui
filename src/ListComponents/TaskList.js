import React, { Component } from 'react';
import '../App.css';
import TaskContainer from '../ContainerComponents/TaskContainer';
import TaskObject from '../ObjectClasses/TaskObject'
import DeleteModal from "../Modals/DeleteModal";
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'
import TaskForm from "../FormComponents/TaskForm";
import CategoryContainer from "./CategoryList";

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

    addTask =(task)=>{
        this.taskApiCalls.createTask(task, this.props.parentType, this.props.parentId, this.props.xAccessToken, this.props.update)
        this.state.newTask = false;
    };

    deleteTaskRebaseChildren=(taskId, newParentType, newParentId)=>{
        this.taskApiCalls.deleteTaskRebaseChildren(taskId, this.props.xAccessToken,newParentType, newParentId, this.props.update);
    };

    //fixme 190316: delete works but doesn't remove deleted task from page.
    deleteTaskAndChildren=(taskId)=>{
        this.taskApiCalls.deleteTaskAndChildren(taskId,this.props.xAccessToken,this.props.update);
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
        return (
            <div className="TaskList" id={this.props.catId + "Tasks"}>

                {
                    //fixme 190314: taskId here is the whole task, not just the id. so when I do `!taskId` in the task component it's not undefined
                    this.props.data.map(
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
                <TaskContainer display = {this.state.newTask?'block':'none'}
                               id={`NewTaskCat${this.props.parentId}`}
                               xAccessToken = {this.props.xAccessToken}
                               showDeleteModal = {this.showDeleteModal}
                               addTask = {this.addTask}
                               newTask = {true}
                />
                <div style = {{display:this.state.newTask?'none':'block'}} className='addButton'>
                    <button  onClick={this.newTask}>+</button>
                </div>
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
