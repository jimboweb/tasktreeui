import React from "react";
import '../App.css';
import TaskList from "../ListComponents/TaskList";
import EventList from "../ListComponents/EventList";
import DisplayStates from "../Enums/DisplayStates";

function Category(props){
    const showDeleteModal =  ()=>{
        props.showDeleteModal(props.data._id,props.data.name);
    };
    return(
        <div className="category" id={props.data._id}>
            <div className='collapser'>
                <button onClick={props.buttonAction}>
                    {props.displayState === DisplayStates.EXPANDED ? 'V' : '>'}
                </button>
            </div>

            <div className='dataWrapper'>
                <h2 className = "catName">
                    {props.data.name}
                </h2>
                <h3>Tasks</h3>
                <TaskList
                    data = {props.data.tasks}
                    parentType = "category"
                    parentId={props.data._id}
                    modifyListActions = {props.modifyListActions}
                    xAccessToken = {props.xAccessToken}
                    update={props.update}
                    visibleTasks = {props.visibleTasks}
                />
                <h3 >Events</h3>
                <EventList
                    data={props.data.events} catId={props.data._id}
                    parentType = "category"
                    modifyListActions = {props.modifyListActions}
                    parentId={props.data._id}
                    xAccessToken = {props.xAccessToken}
                    update = {props.update}
                />
            </div>
            <div className='editDeleteButton'>
                <button onClick={props.editAction} className ='inputButton'>
                    <img src='../src/img/edit.svg' />
                </button>
                <button onClick={showDeleteModal} className='inputButton'>
                    <img src='../src/img/trash.png' />
                </button>
            </div>
        </div>
    );
}

export default Category;