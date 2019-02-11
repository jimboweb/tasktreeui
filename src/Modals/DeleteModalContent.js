import React, {Component} from 'react';
import NewParentSearch from "./DeleteModal";

function DeleteModalContent(props) {

    const deleteChildren = ()=>{
        props.deleteChildren();
        props.closeAction();
    };

    const rebaseChildren = (newParent) => {
        props.rebaseChildren(newParent);
        props.closeAction();
    };




    return <fragment>
        The {props.componentType} {props.componentName} that you are deleting contains child Tasks or Events.
        Do you want to delete the children or assign them to a new parent?
        <button className="deleteChildren" onClick={props.deleteChildren}>Delete Children</button>
        <button className="cancelDelete">Don't Delete</button>
        <NewParentSearch parentTypes={props.parentTypes} buttonAction = {rebaseChildren}/>


    </fragment>
}

export default DeleteModalContent;
