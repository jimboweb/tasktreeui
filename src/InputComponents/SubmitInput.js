import React, {Component} from "react";
import '../App.css';


class SubmitInput extends Component{

    constructor(props){
        super(props);

    }

    handleClick(event){
        //TODO 181221: have to put the arguments in the action here, or up in the TaskForm
        this.props.action();
        event.preventDefault();
    }



    render() {
        return (
            <React.Fragment>
                    <input
                        type='submit'
                        name={this.props.name.toLowerCase()}
                        onClick={this.handleClick.bind(this)}
                        {...this.props.attributes}
                    />
             </React.Fragment>
        );
    }
}

export default SubmitInput;