import React, {Component} from 'react';
import DisplayStates from "../Enums/DisplayStates";
import LoadingGif from "../DisplayComponents/LoadingGif";
import Category from "../BranchComponents/Category";
import CategoryApiCalls from '../ApiCallFunctions/CategoryApiCalls'
import CategoryForm from "../FormComponents/CategoryForm";
import CategoryObject from '../ObjectClasses/CategoryObject'
import Task from "./TaskContainer";


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
        this.state.categoryApiCalls.modifyCategory(
            modifiedCategory,
            this.props.xAccessToken,
            (returnedCategory)=>this.setState({category:returnedCategory}))
    };


    render() {
        if(this.state.category) {
            return (
                this.state.displayState === DisplayStates.INPUT ?
                    <CategoryForm data={this.state.category} submitAction = {this.modify}/> :
                    <Category
                        data={this.state.category}
                        buttonAction={this.expandCollapse}
                        editAction={this.input}
                        displayState={this.state.displayState}
                        xAccessToken = {this.props.xAccessToken}
                        showDeleteModal = {this.props.showDeleteModal}
                        update = {this.update}
                        visibleTasks = {this.props.visibleTasks}
                    />
            )
        } else if(this.props.newCategory){
            const newCategory = new CategoryObject();
            return <CategoryForm display = {this.props.display} data={newCategory} xAccessToken={this.props.xAccessToken}
                             submitAction = {this.props.addCategory} id={this.props.id}/>
        }else {
            this.update();
            return <LoadingGif/>
        }
    }

}

export default CategoryContainer;
