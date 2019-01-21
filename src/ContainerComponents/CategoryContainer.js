import React, {Component} from 'react';
import DisplayStates from "../Enums/DisplayStates";
import TaskForm from "../FormComponents/TaskForm";
import fetchUtil from "../util/fetchUtil";
import LoadingGif from "../DisplayComponents/LoadingGif";
import Category from "../BranchComponents/Category";
import CategoryApiCalls from '../ApiCallFunctions/CategoryApiCalls'
import TaskApiCalls from '../ApiCallFunctions/TaskApiCalls'
import CategoryForm from "../FormComponents/CategoryForm";
import ModifyCategoryListActions from '../ListActions/ModifyCategoryListActions'


//todo 190105: make all the update, add, modify methods in category, task, note


class CategoryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState:DisplayStates.COLLAPSED,
            category: undefined,
            categoryApiCalls: new CategoryApiCalls()
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
        this.state.categoryApiCalls.getCategory(
            this.props.id,
            this.props.xAccessToken,
            (returnedCategory)=>this.setState({category:returnedCategory}))
    };
    modify=(modifiedCategory)=> {
        this.categoryApiCalls.modifyCategory(
            modifiedCategory,
            this.props.xAccessToken,
            (returnedCategory)=>this.setState({category:returnedCategory}))
    };
    //todo 190118: need to create a delete button that creates a rebase/delete children modal


    render() {
        if(this.state.category) {
            const modifyListActions = new ModifyCategoryListActions(
                this.state.category._id,
                this.props.xAccessToken,
                this.update
            )
            return (
                this.state.displayState === DisplayStates.INPUT ?
                    <CategoryForm data={this.props.data} submitAction = {this.modify}/> :
                    <Category
                        data={this.state.category}
                        buttonAction={this.expandCollapse}
                        editAction={this.input}
                        displayState={this.state.displayState}
                        modifyListActions = {modifyListActions}
                        xAccessToken = {this.props.xAccessToken}
                    />
            )
        } else {
            this.update();
            return <LoadingGif/>
        }
    }

}

export default CategoryContainer;
