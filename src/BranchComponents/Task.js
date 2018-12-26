import React from "react";
import '../App.css';
import DisplayStates from '../Enums/DisplayStates'
import TaskList from "../ListComponents/TaskList";
import EventList from "../ListComponents/EventList";
import NoteList from "../ListComponents/NoteList";

//TODO 181122: create an edit button that changes displayStates to input
function Task(props) {


    return <div className='task ' id={props.data._id}>
        <div className='collapser'>
            <button onClick={props.buttonAction}>
                {props.displayState === DisplayStates.EXPANDED ? '-' : '+'}
            </button>
        </div>

        <div className='dataWrapper'>
            <h4>{props.data.name}</h4>
            <div className={props.displayState === DisplayStates.EXPANDED ? 'expanded' : 'collapsed'}>
                <div className='property'>
                    Description : {props.data.description}
                </div>
                <div className='property'>
                    Completed : {props.data.completed}
                </div>
                <div className='property'>
                    Deadline : {props.data.deadline}
                </div>
                <div className='property'>
                    Start Date : {props.data.startDate}
                </div>
                <div className='property'>
                    External : {props.data.external}
                </div>
                <div className='property'>
                    Estimated Time : {props.data.estTime}
                </div>
                {
                    //TODO 181223: need to pass parent: task, action: modify
                    props.data.subTasks?
                        <div className='sublist'>
                            <h5>SubTasks:</h5>
                            <TaskList data = {props.data.subTasks} />
                        </div>
                        :''
                }
                {
                    props.data.events?
                        <div className='sublist'>
                            <h5>Events:</h5>
                            <EventList data = {props.data.events} />
                        </div>
                        :''
                }
                {
                    props.data.prqTasks?
                        <div className='sublist'>
                            <h5>Prerequisite Tasks:</h5>
                            <TaskList data = {props.data.prqTasks} />
                        </div>
                        :''
                }
                {
                    props.data.prqEvents?
                        <div className='sublist'>
                            <h5>Prerequisite Events:</h5>
                            <EventList data = {props.data.prqEvents} />
                        </div>
                        :''
                }
                {
                    props.data.notes?
                        <div className='sublist'>
                            <h5>Notes:</h5>
                            <NoteList data = {props.data.notes} />
                        </div>
                        :''
                }
            </div>
        </div>
        <div className='editButton'>
            <button onClick={props.editAction}>
                <img src='../img/edit.svg' />
            </button>
        </div>
    </div>
}

export default Task;