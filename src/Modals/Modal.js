import React from "react";
import './App.css';

/**
 *
 * @param props ?width, ?height,?maxWidth,?maxHaight,?padding, ?color. ?background-color
 * @returns {*}
 * @constructor
 */
function Modal(props) {
    const modalContainerStyle = {
        position: 'fixed',
        zIndex: '1',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: props.width?props.width:'600px',
        maxWidth: props.maxWidth?props.maxWidth:'90%',
        height: props.height?props.height:'400px',
        maxHeight: props.maxHeight?props.maxHeight:'90%',
        display: 'none',
    };

    const modalContentStyle = {
        position: 'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height: '100%',
        padding: props.padding?props.padding:'20px 50px 20px 20px',
        overflow: 'auto',
        color:props.color?props.color:'black',
        backgroundColor:props.backgroundColor?props.backgroundColor:'white',

    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '5%',
        right: '5%',
        color:'color',
        width: '10px',
        height: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    };

    const hide=()=>{
        document.querySelector('#modal').style.display='none';
    };

    const show=()=>{
        document.querySelector('#modal').style.display='block';
    }

    return (
        <div id = 'modal' className='modal' style = {modalContainerStyle}>
            <div className='modalContent' style = {modalContentStyle}>
                {props.children}
            </div>
            <div id='modalCloseButton' style = {closeButtonStyle}>
                &times;
            </div>
        </div>
    );
}

export default Modal;