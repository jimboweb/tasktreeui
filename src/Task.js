import React from "react";
import './App.css';
import DisplayStates from './util/DisplayStates'
import TaskList from "./TaskList";
import EventList from "./EventList";
import NoteList from "./NoteList";


function Task(props) {
    return <div className='task ' id={props.data._id}>
        <button className='collapser' onClick={this.props.buttonAction}>
            {this.props.displayState === DisplayStates.EXPANDED ? '-' : '+'}
        </button>
        <div className='dataWrapper'>
            <h4>{this.props.data.name}</h4>
            <div className={this.props.displayState === DisplayStates.EXPANDED ? 'expanded' : 'collapsed'}>
                <div className='property'>
                    Description : {this.props.data.description}
                </div>
                <div className='property'>
                    Completed : {this.props.data.completed}
                </div>
                <div className='property'>
                    Deadline : {this.props.data.deadline}
                </div>
                <div className='property'>
                    Start Date : {this.props.data.startDate}
                </div>
                <div className='property'>
                    External : {this.props.data.external}
                </div>
                <div className='property'>
                    Estimated Time : {this.props.data.estTime}
                </div>
                {
                    this.props.data.subTasks?
                        <div className='sublist'>
                            <h5>SubTasks:</h5>
                            <TaskList data = {this.props.data.subTasks} />
                        </div>
                        :''
                }
                {
                    this.props.data.events?
                        <div className='sublist'>
                            <h5>Events:</h5>
                            <EventList data = {this.props.data.events} />
                        </div>
                        :''
                }
                {
                    this.props.data.prqTasks?
                        <div className='sublist'>
                            <h5>Prerequisite Tasks:</h5>
                            <TaskList data = {this.props.data.prqTasks} />
                        </div>
                        :''
                }
                {
                    this.props.data.prqEvents?
                        <div className='sublist'>
                            <h5>Prerequisite Events:</h5>
                            <EventList data = {this.props.data.prqEvents} />
                        </div>
                        :''
                }
                {
                    this.props.data.notes?
                        <div className='sublist'>
                            <h5>Notes:</h5>
                            <NoteList data = {this.props.data.notes} />
                        </div>
                        :''
                }
            </div>
        </div>
    </div>
}

export default Task;