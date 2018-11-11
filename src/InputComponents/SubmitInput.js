import React from "react";
import '../App.css';


function SubmitInput(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='submit'
                    name={props.inputName.toLowerCase()}
                     onClick = {props.handleSubmit}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default SubmitInput;