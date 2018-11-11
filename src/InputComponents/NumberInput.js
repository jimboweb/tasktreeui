import React from "react";
import '../App.css';


function NumberInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='number'
                    name={props.inputName.toLowerCase()}
                    value={props.value}
                    onChange = {props.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default NumberInput;