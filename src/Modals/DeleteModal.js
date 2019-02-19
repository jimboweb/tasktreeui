import React from "react";
import NewParentSearch from "../InputComponents/NewParentSearch";
import Modal from 'react-modal'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')


/**
 * @param props: !modalIsOpen, !componentType, !componentName !parentTypes !rebaseChildren()  !deleteChildren()
 */
class DeleteModal extends React.Component  {
    constructor(props){
        super(props);
        this.state={
        }


    }

    deleteChildren=()=>{
      this.props.deleteChildren(this.props.taskToDeleteId);
      this.props.closeModal();
    };

    rebaseChildren=(newParentType, newParentId)=>{
        this.props.rebaseChildren(this.props.taskToDeleteId, newParentType, newParentId);
        this.props.closeModal();
    }





    render(){
            return <Modal
                isOpen={this.props.modalIsOpen}
                onAfterOpen={this.props.afterOpenModal}
                onRequestClose={this.props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                The {this.props.componentType} {this.props.componentName} that you are deleting contains child Tasks or Events.
                Do you want to delete the children or assign them to a new parent?
                <button className="deleteChildren" onClick={this.deleteChildren}>Delete Children</button>
                <NewParentSearch parentTypes={this.props.parentTypes} buttonAction = {this.state.rebaseChildren}/>
                <button onClick={this.props.closeModal} id='closeModalButton'>Cancel delete</button>

            </Modal>
            }

    }


export default DeleteModal;