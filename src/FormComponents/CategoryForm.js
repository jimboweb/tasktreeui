import React, {Component} from 'react';
import InputTypes from "../Enums/InputTypes";
import formUtil from "../util/formUtil";
import FormBuilder from "./FormBuilder";

class ComponentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: [
                {props: {name: 'name',}, type: InputTypes.TEXT},
            ],


        };




    }

    submitAction=()=>{
        const form = document.getElementById("form"+this.props.id);
        const category = formUtil.formInputsToJsonObject(form);
        this.props.submitAction(category)

    }


    render() {
        return <div className="taskInput" id={"form"+this.props.id}>
            <FormBuilder
                inputFields={this.state.inputFields}
                handlers = {this.state.handlers}
                category = {this.props.category}
            />
        </div>
    }

}

export default ComponentName;
