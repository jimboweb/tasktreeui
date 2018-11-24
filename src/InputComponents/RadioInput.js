import React from "react";
import '../App.css';


function RadioInput(props) {
    return (
        <React.Fragment>
            <label>
                {props.name}:
                <input
                    type='radio'
                    name={props.name.toLowerCase()}
                     onClick = {props.handlers.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </React.Fragment>
    );
}

export default RadioInput;