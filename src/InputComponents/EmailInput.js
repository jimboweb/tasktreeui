import React from "react";
import '../App.css';


function EmailInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='email'
                    name={props.inputName.toLowerCase()}
                    value={props.value}
                    onChange = {props.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default EmailInput;