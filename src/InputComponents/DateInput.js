import React from "react";
import '../App.css';


function DateInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='date'
                    name={props.inputName.toLowerCase()}
                    value={props.value}
                    onChange = {props.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default DateInput;