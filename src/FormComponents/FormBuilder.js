import React, {Component} from 'react';
import '../App.css';

class FormBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {};


    }


//FIXME 181124: createElement just not working need a different way. Map to an array of components?
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
