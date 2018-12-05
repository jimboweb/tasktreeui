import React, {Component} from "react";
import '../App.css';


class ResetInput extends Component {

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
                        type='reset'
                        name={this.props.name.toLowerCase()}
                        onClick={this.handleClick.bind(this)}
                        {...this.props.attributes}
                    />
            </React.Fragment>
        );
    }
}

export default ResetInput;