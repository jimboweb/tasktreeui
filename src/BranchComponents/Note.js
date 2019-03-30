import React from "react";

function Note(props) {
    return (
        <div className='note' id={props.data.id}>
            <div className='dataWrapper'>
                    <div className='property'>
                        {props.data.dateTime} : {props.data.note}
                    </div>

             </div>
            <div className='editDeleteButton'>
                <button onClick={props.editAction} className ='inputButton'>
                    <img src='../src/img/edit.svg' />
                </button>
                <button onClick={props.delete} className='inputButton'>
                    <img src='../src/img/trash.png' />
                </button>
            </div>

        </div>
    );
}

export default Note;