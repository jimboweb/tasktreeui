import React from "react";
import DisplayStates from "../Enums/DisplayStates";



function Note(props) {
    return (
        <div className='note' id={props.data.id}>
            <div className='dataWrapper'>
                <div className={props.displayState === DisplayStates.EXPANDED ? 'expanded' : 'collapsed'}>
                    <div className='property'>
                        {props.data.dateTime} : {props.data.note}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Note;