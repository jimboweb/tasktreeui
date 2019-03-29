import React, {Component} from "react";
import '../App.css';


class NumberInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            value:this.props.value?this.props.value:'0'
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
                        type='number'
                        name={this.props.name}
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        {...this.props.attributes}
                    />
                </label>
            </React.Fragment>
        );
    }
}

export default NumberInput;