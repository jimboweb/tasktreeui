import React from "react";
import '../App.css';


function ResetInput(props) {
    return (
        <React.Fragment>
            <label>
                {props.name}:
                <input
                    type='reset'
                    name={props.name.toLowerCase()}
                     onClick = {props.handlers.handleReset}
                    {...props.attributes}
                />
            </label>
        </React.Fragment>
    );
}

export default ResetInput;