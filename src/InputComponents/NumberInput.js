import React from "react";
import '../App.css';


function NumberInput(props) {
    return (
        <fragment>
            <label>
                {props.name}:
                <input
                    type='number'
                    name={props.name.toLowerCase()}
                    value={props.value}
                    onChange = {props.handlers.handleChange}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default NumberInput;