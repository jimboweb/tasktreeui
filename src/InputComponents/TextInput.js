import React from "react";
import '../App.css';


function TextInput(props) {
    return (
        <fragment>
            <label>
                {props.name}:
                <input
                    type='text'
                    name={props.name.toLowerCase()}
                    value={props.value}
                    onChange = {props.handlers.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default TextInput;