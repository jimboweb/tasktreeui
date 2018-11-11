import React from "react";
import '../App.css';


function PasswordInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='password'
                    name={props.inputName.toLowerCase()}
                    value={props.value}
                    onChange = {props.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default PasswordInput;