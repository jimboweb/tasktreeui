import React from "react";
import '../App.css';


function RadioInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='radio'
                    name={props.inputName.toLowerCase()}
                     onClick = {props.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default RadioInput;