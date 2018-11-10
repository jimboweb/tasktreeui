import React from "react";
import './App.css';


function TextInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='text'
                    name={props.inputName.toLowerCase()}
                    value={props.value}
                    onChange = {props.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default TextInput;