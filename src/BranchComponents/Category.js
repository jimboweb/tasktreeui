import React from "react";
import '../App.css';
import TaskList from "../ListComponents/TaskList";
import EventList from "../ListComponents/EventList";

//TODO 190206: add expand/collapse button
function Category(props){
    return(
        <div className="category" id={props.data._id}>
            <h2 className = "catName">
                {props.data.name}
            </h2>
            <h3>Tasks</h3>
            <TaskList
                data = {props.data.tasks}
                catId={props.data._id}
                modifyListActions = {props.modifyListActions}
                xAccessToken = {props.xAccessToken}
            />
            <h3 >Events</h3>
            <EventList
                data={props.data.events} catId={props.data._id}
                modifyListActions = {props.modifyListActions}
                catId={props.data._id}
                xAccessToken = {props.xAccessToken}

            />
        </div>
    );
}

export default Category;