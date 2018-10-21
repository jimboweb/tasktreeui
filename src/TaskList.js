import React, { Component } from 'react';
import './App.css';
import fetchUtil from './util/fetchUtil';
import Category from './Category';
import TaskContainer from "./TaskContainer";

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
            <div className="TaskList" id={props.catId+"Tasks"}>
                {
                    this.props.data.map(
                        tsk=>{
                            return <TaskContainer data = {tsk}/>

                        }
                    )
                }
            </div>
        );

    }
}

export default TaskList;
