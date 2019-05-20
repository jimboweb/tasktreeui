import React from "react";
import '../App.css';
import DisplayStates from '../Enums/DisplayStates'
import TaskList from "../ListComponents/TaskList";
import EventList from "../ListComponents/EventList";
import NoteList from "../ListComponents/NoteList";

function Task(props) {

    const deleteOrShowModal =  ()=>{
        if((props.data.tasks && props.data.tasks.length>0) || (props.data.events&&props.data.events.length>0)){
            props.showDeleteModal(props.data._id,props.data.name);
        } else {
            props.deleteTask(props.data._id);
        }
    }
    return <div className='task ' id={props.data._id}>
        <div className='collapser'>
            <button onClick={props.buttonAction}>
                {props.displayState === DisplayStates.EXPANDED ? 'V' : '>'}
            </button>
        </div>

        <div className='dataWrapper'>
            <h4 className = {props.data.completed?'completedTaskName':'taskName'}>{props.data.name}</h4>
            <div className={props.displayState === DisplayStates.EXPANDED ? 'expanded' : 'collapsed'}>
                <div className='property'>
                    Description : {props.data.description}
                </div>
                <div className='property'>
                    //fixme 190519: cannot read property toString of undefined on "progress bars" ends in 4a48
                    //it's something in the database, because whatever it is I got rid of it, but I still need to
                    //figure out why this happens, and not screw around with my main db while developing
                    Completed : {props.data.completed.toString()}
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
                    props.data.subTasks?
                        <div className='sublist'>
                            <h5>SubTasks:</h5>
                            <TaskList
                                data = {props.data.subTasks}
                                xAccessToken = {props.xAccessToken}
                                modifyListActions = {props.modifyListActions}
                                parentType = "task"
                                parentId = {props.data._id}
                                update = {props.update}
                                visibleTasks = {props.visibleTasks}
                            />
                        </div>
                        :''
                }
                {
                    props.data.events?
                        <div className='sublist'>
                            <h5>Events:</h5>
                            <EventList data = {props.data.events}
                                       xAccessToken = {props.xAccessToken}
                                       modifyListActions = {props.modifyListActions}
                                       parentType = "task"
                                       parentId = {props.data._id}
                            />
                        </div>
                        :''
                }
                {
                    props.data.prqTasks?
                        <div className='sublist'>
                            <h5>Prerequisite Tasks:</h5>
                            <TaskList
                                data = {props.data.prqTasks}
                                xAccessToken = {props.xAccessToken}
                                modifyListActions = {props.modifyListActions}
                            />
                        </div>
                        :''
                }
                {
                    props.data.prqEvents?
                        <div className='sublist'>
                            <h5>Prerequisite Events:</h5>
                            <EventList
                                data = {props.data.prqEvents}
                                xAccessToken = {props.xAccessToken}
                                modifyListActions = {props.modifyListActions}

                            />
                        </div>
                        :''
                }
                {
                    props.data.notes?
                        <div className='sublist'>
                            <h5>Notes:</h5>
                            <NoteList
                                data = {props.data.notes}
                                xAccessToken = {props.xAccessToken}
                                modifyListActions = {props.modifyListActions}
                                parentType = "task"
                                parentId = {props.data._id}

                            />
                        </div>
                        :''
                }
            </div>
        </div>
        <div className='editDeleteButton'>
            <button onClick={props.editAction} className ='inputButton'>
                <img src='../src/img/edit.svg' />
            </button>
            <button onClick={deleteOrShowModal} className='inputButton'>
                <img src='../src/img/trash.png' />
            </button>
            <button onClick={props.complete} className='inputButton'>
                &#10003;
            </button>
        </div>
    </div>
}

export default Task;
