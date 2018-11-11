import React from "react";
import '../App.css';


function ButtonInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='button'
                    name={props.inputName.toLowerCase()}
                     onClick = {props.handleClick}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default ButtonInput;