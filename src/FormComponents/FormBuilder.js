import React, {Component} from 'react';
import '../App.css';

class FormBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {};


    }


//FIXME 181228: I'm not passing the task as a prop here. so it doesn't know what's the id when it makes the http call.
    render() {
         return <form id={this.props.id}>
            {

                this.props.inputFields.map(input=>{
                    const propsWithKey = Object.assign({
                        key:"" + this.props.task._id + input.props.name,
                        value: this.props.task[input.props.name]}
                        ,input.props);
                    return input.content?
                        React.createElement(input.type, propsWithKey,input.content):
                        React.createElement(input.type, propsWithKey);
                })
            }
        </form>
    }
}

export default FormBuilder;
