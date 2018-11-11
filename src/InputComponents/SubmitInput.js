import React from "react";
import '../App.css';


function SubmitInput(props) {
    return (
        <fragment>
            <label>
                {props.name}:
                <input
                    type='submit'
                    name={props.name.toLowerCase()}
                     onClick = {props.handlers.handleSubmit}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default SubmitInput;