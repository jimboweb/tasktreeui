import React from "react";
import '../App.css';
import TaskList from "../ListComponents/TaskList";
import EventList from "../ListComponents/EventList";

function Category(props){
    return(
        <div className="category" id={props.data._id}>
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
        //todo 190323: put in edit and delete buttons
    );
}

export default Category;