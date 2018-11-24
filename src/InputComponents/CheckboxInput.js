import React from "react";
import '../App.css';


function CheckboxInput(props) {
    return (
        <React.Fragment>
            <label>
                {props.name}:
                <input
                    type='checkbox'
                    name={props.name.toLowerCase()}
                    value={props.value}
                    onChange = {props.handlers.handleCheck}
                    {...this.props.attributes}
                />
            </label>
        </React.Fragment>
    );
}

export default CheckboxInput;