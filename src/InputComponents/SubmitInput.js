import React from "react";
import '../App.css';


function SubmitInput(props) {
    return (
        <React.Fragment>
            <label>
                {props.name}:
                <input
                    type='submit'
                    name={props.name.toLowerCase()}
                     onClick = {props.handlers.handleSubmit}
                    {...props.attributes}
                />
            </label>
        </React.Fragment>
    );
}

export default SubmitInput;