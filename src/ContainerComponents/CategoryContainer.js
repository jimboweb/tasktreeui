import React, {Component} from 'react';
import DisplayStates from "../Enums/DisplayStates";
import Task from "../BranchComponents/Task";
import TaskForm from "../FormComponents/TaskForm";
import fetchUtil from "../util/fetchUtil";
import LoadingGif from "../DisplayComponents/LoadingGif";
import Category from "../BranchComponents/Category";
import CategoryApiCalls from '../ApiCallFunctions/CategoryApiCalls'
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'
import CategoryForm from "../FormComponents/CategoryForm";
import ModifyListActions from "../util/ModifyListActions";

class ComponentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState:DisplayStates.COLLAPSED,
            category: undefined
        };
    }

    expandCollapse=()=>{
        this.state.displayState===DisplayStates.COLLAPSED?
            this.setState({displayState:DisplayStates.EXPANDED})
            : this.setState({displayState:DisplayStates.COLLAPSED});
    }


    input=()=>{
        this.setState({displayState:DisplayStates.INPUT});
    };

    update=()=>{
        CategoryApiCalls.getCategory(
            this.props.id,
            this.props.xAccessToken,
            (returnedCategory)=>this.setState({category:returnedCategory}))
    };
    modify=(modifiedCategory)=> {
        CategoryApiCalls.modifyCategory(
            modifiedCategory,
            this.props.xAccessToken,
            (returnedCategory)=>this.setState({category:returnedCategory}))
    };

    modifyListActions = new ModifyListActions(
        "Category",
        this.state.category._id,
        this.props.xAccessToken,
        this.update()
        )


    render() {
        if(this.state.category) {
            return (
                this.state.displayState === DisplayStates.INPUT ?
                    <CategoryForm data={this.props.data} submitAction = {this.modify}/> :
                    <Category data={this.props.data} buttonAction={this.expandCollapse} editAction={this.input}
                              displayState={this.state.displayState} modifyListActions = {this.modifyListActions}/>
            )
        } else {
            this.update();
            return <LoadingGif/>
        }
    }

}

export default ComponentName;
