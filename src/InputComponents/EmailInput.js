import React from "react";
import '../App.css';


function EmailInput(props) {
    return (
        <fragment>
            <label>
                {props.name}:
                <input
                    type='email'
                    name={props.name.toLowerCase()}
                    value={props.value}
                    onChange = {props.handlers.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default EmailInput;