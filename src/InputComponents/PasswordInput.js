import React from "react";
import '../App.css';


function PasswordInput(props) {
    return (
        <fragment>
            <label>
                {props.name}:
                <input
                    type='password'
                    name={props.name.toLowerCase()}
                    value={props.value}
                    onChange = {props.handlers.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default PasswordInput;