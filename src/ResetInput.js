import React from "react";
import './App.css';


function ComponentName(props) {
    return (
        <fragment>
            <label>
                {props.inputName}:
                <input
                    type='reset'
                    name={props.inputName.toLowerCase()}
                     onClick = {props.handleReset}
                    {...this.props.attributes}
                />
            </label>
        </fragment>
    );
}

export default ComponentName;