import React from "react";
import '../App.css';


function ButtonInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='button'
                    name={props.name.toLowerCase()}
                     onClick = {props.handlers.handleSubmit}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default ButtonInput;