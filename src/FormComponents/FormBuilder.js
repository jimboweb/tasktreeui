import React, {Component} from 'react';
import './App.css';

class FormBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return <form id={this.props.id}>
            {
                this.props.inputFields.map(input=>{
                    const propsWithKeyAndHandlers = Object.assign({
                        key:"" + this.props.id + input.name,
                        handlers:this.props.handlers}
                        ,input.props);
                    input.content?
                        React.createElement(input.type, propsWithKeyAndHandlers,input.content):
                        React.createElement(input.type, propsWithKeyAndHandlers);
                })
            }
        </form>
    }
}

export default FormBuilder;
