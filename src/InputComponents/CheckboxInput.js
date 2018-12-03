import React, {Component} from "react";
import '../App.css';


class CheckboxInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            checked:this.props.checked?this.state.checked:false;
        }
    }

    //not tested yet might not work
    handleCheck(event){
        this.setState({checked:event.target.checked})
    }

    render() {
        return (
            <React.Fragment>
                <label>
                    {props.name}:
                    <input
                        type='checkbox'
                        name={this.props.name.toLowerCase()}
                        checked = {this.state.checked};
                        onChange={this.handleCheck.bind(this)}
                        {...this.props.attributes}
                    />
                </label>
            </React.Fragment>
        );
    }
}

export default CheckboxInput;