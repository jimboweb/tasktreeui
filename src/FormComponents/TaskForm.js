import React, {Component} from 'react';
import '../App.css';
import InputTypes from './util/formEnums';
import FormBuilder from './FormBuilder';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task:{},
            inputFields: [
                {props: {name:'name'}, type:InputTypes.TEXT},
                {props: {name: 'description'}, type:InputTypes.TEXT},
                {props: {name:'deadline'},type:InputTypes.DATE},
                {props:{name:'startDate'},type:InputTypes.DATE},
                {props: {name:'external'},type:InputTypes.CHECKBOX},
                {props: {name:'estTime'},type:InputTypes.NUMBER}
            ],
            handlers : {
                handleCheck : this.handleCheck,
                handleCancel: this.handleCancel,
                handleReset: this.handleReset,
                handleSubmit:this.handleSubmit,
                handleChange:this.handleChange

            };
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

        return <div className="taskInput" id={this.props.id}>
            <FormBuilder
                inputs={this.state.inputFields}
                handlers = handlers;
            />
        </div>
    }
}

export default TaskForm;
