import React, {Component} from "react";
import '../App.css';


class ButtonInput extends Component {

    constructor(props){
        super(props);
    }

    handleClick(event){
        this.props.action();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <label>
                    {props.inputName}:
                    <input
                        type='button'
                        name={props.name.toLowerCase()}
                        onClick={this.handleClick.bind(this)}
                        {...props.attributes}
                    />
                </label>
            </React.Fragment>
        );
    }
}

export default ButtonInput;