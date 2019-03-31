import React from "react";

function Note(props) {
    const deleteNote = () => {props.delete(props.data._id)};
    return (
        <div className='note' id={props.data._id}>
            <div className='dataWrapper'>
                    <div className='property'>
                        {props.data.dateStamp} : {props.data.note}
                    </div>

             </div>
            <div className='editDeleteButton'>
                <button onClick={props.editAction} className ='inputButton'>
                    <img src='../src/img/edit.svg' />
                </button>
                <button onClick={deleteNote} className='inputButton'>
                    <img src='../src/img/trash.png' />
                </button>
            </div>

        </div>
    );
}

export default Note;