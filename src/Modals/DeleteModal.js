import React from "react";
import NewParentSearch from "../InputComponents/NewParentSearch";
import Modal from "./Modal";
import DeleteModalContent from "./DeleteModalContent";

/**
 * @param props: !visible, !componentType, !componentName !parentTypes !rebaseChildren()  !deleteChildren()
 */
class DeleteModal extends Modal  {
    constructor(props){
        super(props);
        this.state={
            rebaseChildren : (newParent) => {
                this.props.rebaseChildren(newParent);
                this.hide();
            },
            deleteChildren:()=>{
                this.props.deleteChildren();
                this.hide()
            },

            children: <fragment>
                The {this.props.componentType} {this.props.componentName} that you are deleting contains child Tasks or Events.
                Do you want to delete the children or assign them to a new parent?
                <button className="deleteChildren" onClick={this.state.deleteChildren}>Delete Children</button>
                <button className="cancelDelete">Don't Delete</button>
                <NewParentSearch parentTypes={this.props.parentTypes} buttonAction = {this.state.rebaseChildren}/>
            </fragment>,
        }

    }

}



export default DeleteModal;