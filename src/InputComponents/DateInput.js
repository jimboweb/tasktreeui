import React from "react";
import '../App.css';


function DateInput(props) {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default DateInput;