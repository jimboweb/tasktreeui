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
                     <input
                        type='button'
                        name={props.name.toLowerCase()}
                        onClick={this.handleClick.bind(this)}
                        {...props.attributes}
                    />
            </React.Fragment>
        );
    }
}

export default ButtonInput;