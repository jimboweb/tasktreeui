import React, { Component } from 'react';
import '../App.css';
import TaskContainer from '../ContainerComponents/TaskContainer';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchOptions: {
                method: 'get'
            },
            headers: new Headers({
                'x-access-token': this.props['xAccessToken']
            }),
        };
    }


    render() {
        return (
            <div className="TaskList" id={this.props.catId+"Tasks"}>
                {
                    this.props.data.map(
                        tsk=>{
                            return <TaskContainer data = {tsk} modify = {true}/>

                        }
                    )
                }
            </div>
        );

    }
}

export default TaskList;
