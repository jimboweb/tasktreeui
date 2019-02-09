import React from "react";
import './App.css';
import NewParentSearch from "../InputComponents/NewParentSearch";
import Modal from "./Modal";
import DeleteModalContent from "./DeleteModalContent";


function DeleteModal(props) {


    const newParentSelectContainerStyle = {
        display:'none'
    }

    const showRebaseChildren=()=>{
        document.querySelector('#newParentSelectContainer').style.display='block';
        document.querySelector("#modal").style.display='none'
    }

    const rebaseChildren = (newParent) => {

        props.rebaseChildren(newParent);
    };


    //todo 190209: still not doing this right. have to pass this as a component then call it in child. 
    const children = <DeleteModalContent/>

    return <Modal children = {children} />

    }


export default DeleteModal;