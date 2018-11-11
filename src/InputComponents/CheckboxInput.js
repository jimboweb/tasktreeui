import React from "react";
import '../App.css';


function CheckboxInput(props) {
    return (
        <fragment>
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
        </fragment>
    );
}

export default CheckboxInput;