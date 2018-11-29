import React from "react";
import '../App.css';


function NumberInput(props) {
    return (
        <React.Fragment>
            <label>
                {props.name}:
                <input
                    type='number'
                    name={props.name.toLowerCase()}
                    value={props.value}
                    onChange = {props.handlers.handleChange}
                    {...props.attributes}
                />
            </label>
        </React.Fragment>
    );
}

export default NumberInput;