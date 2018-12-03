import React, {Component} from "react";
import '../App.css';


class PasswordInput extends Component{

    constructor(props){
        super(props);
        this.state={
            value:this.props.value?this.props.value:''
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <label>
                    {this.props.name}:
                    <input
                        type='password'
                        name={this.props.name.toLowerCase()}
                        value={this.state.value}
                        onChange = {this.handleChange.bind(this)}
                        {...this.props.attributes}
                    />
                </label>
            </React.Fragment>
        );
    }

}

export default PasswordInput;