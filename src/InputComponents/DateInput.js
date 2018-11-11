import React from "react";
import '../App.css';


function DateInput(props) {
    return (
        <fragment>
            <label>
                {props.name}:
                <input
                    type='date'
                    name={props.name.toLowerCase()}
                    value={props.value}
                    onChange = {props.handlers.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default DateInput;