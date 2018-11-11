import React from "react";
import '../App.css';
import TaskList from "./TaskList";
import EventList from "./EventList";


function Category(props){
    return(
        <div className="category" id={props.data._id}>
            <h2 className = "catName">
                {props.data.name}
            </h2>
            <h3>Tasks</h3>
            <TaskList data = {props.data.children.tasks} catId={props.data._id}/>
            <h3 >Events</h3>
            <EventList data={props.data.children.events} catId={props.data._id}/>
        </div>
    );
}

export default Category;