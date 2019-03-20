import React, {Component} from 'react';
import InputTypes from "../Enums/InputTypes";
import formUtil from "../util/formUtil";
import FormBuilder from "./FormBuilder";

class CategoryForm extends Component {
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
        const formData = formUtil.formInputsToObject(form);
        const categoryJson = Object.assign(this.props.category, formData);
        this.props.submitAction(categoryJson)

    }


    render() {
        return <div className="taskInput" id={"form"+this.props.id}>
            <FormBuilder
                inputFields={this.state.inputFields}
                handlers = {this.state.handlers}
                data = {this.props.data}
            />
        </div>
    }

}

export default CategoryForm;
