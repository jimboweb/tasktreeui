import React from "react";
import '../App.css';


function RadioInput(props) {
    return (
        <fragment>
            <label>
                {props.name}:
                <input
                    type='radio'
                    name={props.name.toLowerCase()}
                     onClick = {props.handlers.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default RadioInput;