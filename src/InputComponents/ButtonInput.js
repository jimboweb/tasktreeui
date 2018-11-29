import React from "react";
import '../App.css';


function ButtonInput(props) {
    return (
        <React.Fragment>
            <label>
                {props.inputName}:
                <input
                    type='button'
                    name={props.name.toLowerCase()}
                     onClick = {props.handlers.handleSubmit}
                    {...props.attributes}
                />
            </label>
        </React.Fragment>
    );
}

export default ButtonInput;