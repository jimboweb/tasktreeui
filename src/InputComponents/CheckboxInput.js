import React from "react";
import '../App.css';


function CheckboxInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='checkbox'
                    name={props.inputName.toLowerCase()}
                    value={props.value}
                    onChange = {props.handleCheck}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default CheckboxInput;