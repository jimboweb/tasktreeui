import React, {Component} from "react";
import '../App.css';


class TimeIntervalInput extends Component{

    constructor(props){
        super(props);
        this.state={
            value: this.props.value?this.props.value:''
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <fragment>
                <label>
                    {this.props.name}:
                    <input
                        type='number'
                        name={this.props.name.toLowerCase()}
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        {...this.props.attributes}
                    />
                </label>
            </fragment>
        );
    }
}

export default TimeIntervalInput;