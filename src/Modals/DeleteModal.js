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
            modalIsOpen:false
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }



    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }


    render(){
            return <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={this.closeModal} id='closeModalButton'>close</button>
                The {this.props.componentType} {this.props.componentName} that you are deleting contains child Tasks or Events.
                Do you want to delete the children or assign them to a new parent?
                <button className="deleteChildren" onClick={this.state.deleteChildren}>Delete Children</button>
                <button className="cancelDelete">Don't Delete</button>
                <NewParentSearch parentTypes={this.props.parentTypes} buttonAction = {this.state.rebaseChildren}/>

            </Modal>
            }

    }


export default DeleteModal;