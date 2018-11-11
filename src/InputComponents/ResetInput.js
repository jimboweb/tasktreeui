import React from "react";
import '../App.css';


function ResetInput(props) {
    return (
        <fragment>
            <label>
                {props.name}:
                <input
                    type='reset'
                    name={props.name.toLowerCase()}
                     onClick = {props.handlers.handleReset}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default ResetInput;