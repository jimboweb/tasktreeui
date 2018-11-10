import React, {Component} from 'react';
import './App.css';
import InputTypes from './util/formEnums'

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task:{},
            submitFields: [
                {name:'name', type:InputTypes.TEXT},
                {name: 'description', type:InputTypes.TEXT},
                {name:'deadline',type:InputTypes.DATE},
                {name:'startDate',type:InputTypes.DATE},
                {name:'external',type:InputTypes.CHECKBOX},
                {name:'estTime',type:InputTypes.NUMBER}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.props.submit(this.state.task);
        event.preventDefault();
    }

    handleReset(event) {
        this.props.reset(this.state.task);
        event.preventDefault();
    }

    handleCancel(event){
        this.props.cancel(this.state.task);
        event.preventDefault();

    }

    handleCheck(){
        this.setState({[event.target.name]: event.target.checked});
    }


    render() {
        return (
            <div className = "taskInput" id ={this.props.id}>
                <form>

                </form>
            </div>
        )
    }
}

export default TaskInput;
