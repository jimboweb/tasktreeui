import React from "react";
import DisplayStates from "../Enums/DisplayStates";
import TaskList from "../ListComponents/TaskList";
import NoteList from "../ListComponents/NoteList";
import EventList from "../ListComponents/EventList";


function Event(props) {
    return (
        <div className='dataWrapper'>
            <h4>{props.data.name}</h4>
            <div className={props.displayState === DisplayStates.EXPANDED ? 'expanded' : 'collapsed'}>
                <div className='property'>
                    Date : {props.data.date}
                </div>
                <div className='property'>
                    Length : {props.data.length}
                </div>
                <div className='property'>
                    Completed : {props.data.completed}
                </div>
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

                            />
                        </div>
                        :''
                }
            </div>
        </div>
    );
}

export default Event;