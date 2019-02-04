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
        if(!data || !data.length)
            return [null];
        //fixme 190203: the line above probably fixes problem with spread operator but not form appearing when it shouldn't
        //honestly this whole method sucks, using a null like this is a terrible idea. need a new solution.
        //okay, let's use an empty object. if it has no _id then I know I need to use a form.
        //todo 190204: change this so instead of null it's an empty object. then if an object has no _id make it a form.
        return [...data, null];
    }

    render() {

        const taskListData = this.state.addTask?
            this.props.data:
            this.addNewTaskTrue(this.props.data);
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
