import React, {Component} from 'react';
import DisplayStates from "../Enums/DisplayStates";
import LoadingGif from "../DisplayComponents/LoadingGif";
import Category from "../BranchComponents/Category";
import CategoryApiCalls from '../ApiCallFunctions/CategoryApiCalls'
import CategoryForm from "../FormComponents/CategoryForm";




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
                    <CategoryForm data={this.props.data} submitAction = {this.modify}/> :
                    <Category
                        data={this.state.category}
                        buttonAction={this.expandCollapse}
                        editAction={this.input}
                        displayState={this.state.displayState}
                        xAccessToken = {this.props.xAccessToken}
                        update = {this.update}
                    />
            )
        } else {
            this.update();
            return <LoadingGif/>
        }
    }

}

export default CategoryContainer;
