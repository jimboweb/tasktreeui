import React, { Component } from 'react';
import '../App.css';
import fetchUtil from '../util/fetchUtil';
import LoadingGif from "../DisplayComponents/LoadingGif";
import CategoryContainer from "../ContainerComponents/CategoryContainer";
import CategoryApiCalls from '../ApiCallFunctions/CategoryApiCalls'
import DeleteModal from "../Modals/DeleteModal";
import VisibleTaskOptions from '../Enums/VisibleTaskOptions'

//TODO 181231: I want to change this so this component doesn't get the categories, the user component does. But I'll have to change the API to do that.

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: undefined,
            fetchOptions: {
                method: 'get'
            },
            headers: new Headers({
                'x-access-token': this.props['xAccessToken']
            }),
            newCategory: false,
            categoryToDeleteName:'',
            categoryToDeleteId:'',
            deleteModalOpen: false,
            visibleTasks: VisibleTaskOptions.INCOMPLETE
        };

        this.categoryApiCalls = new CategoryApiCalls();
    }

    update = () => {
        fetchUtil.getData(
            'category/',
            this.props.xAccessToken,
            responseData => {
                this.setState({categories:responseData})
            }
        );
    }


    addCategory = (category) =>{
        this.categoryApiCalls.addCategory(category, this.props.xAccessToken,this.update)
    };

    deleteAndRebase = (categoryId,newParentType, newParentId) => {
        this.categoryApiCalls.deleteCategoryRebaseChildren(categoryId,this.props.xAccessToken, newParentType,newParentId,this.update)
    };

    deleteWithChildren=(categoryId)=>{
        this.categoryApiCalls.deleteCategoryAndChildren(categoryId,this.props.xAccessToken,this.update)
    };
    showDeleteModal = (categoryId, categoryName) => {
        this.setState({categoryToDeleteName: categoryName, categoryToDeleteId: categoryId});
        this.state.deleteModalOpen = true;
    };

    afterOpenModal=() => {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeDeleteModal=() =>{
        this.setState({deleteModalOpen: false});
    };

    setVisibleTasks=()=>{
        const visibleTaskOption = document.getElementById('visibleTasks').value;
        this.setState({visibleTasks:visibleTaskOption});
    }



    render() {
        if (!this.state.categories) {
            fetchUtil.getData(
                'category/',
                this.props.xAccessToken,
                responseData => {
                    this.setState({categories:responseData, display:'allTasks'})
                }
            );
            return (
                <LoadingGif/>
            )
        } else {
            return (
                <div className="categoryList" id="categoryRoot">]
                    Display:
                    <select id='visibleTasks' onChange = {this.setVisibleTasks}>
                        <option value = {VisibleTaskOptions.ALL}>All Tasks</option>
                        <option value={VisibleTaskOptions.INCOMPLETE}>Incomplete Tasks</option>
                        {/*<option value = VisibleTaskOptions.URGENT>Urgent Tasks</option>*/}
                    </select>
                    {
                        this.state.categories.map(
                            cat=>{
                                return (
                                    <CategoryContainer
                                        id = {cat._id}
                                        xAccessToken = {this.props.xAccessToken}
                                        showDeleteModal = {this.showDeleteModal}
                                        addCategory = {this.addCategory}
                                    />
                                )
                            }
                        )
                    }
                    <CategoryContainer display = {this.state.newTask?'block':'none'}
                                   id={`NewCat`}
                                   xAccessToken = {this.props.xAccessToken}
                                   showDeleteModal = {this.showDeleteModal}
                                   addCategory= {this.addCategory}
                                   newCategory = {true}
                    />
                    <div style = {{display:this.state.newCategory?'none':'block'}} className='addButton'>
                        <button  onClick={this.newCategory}>+</button>
                    </div>
                    <DeleteModal
                        modalIsOpen = {this.state.deleteModalOpen}
                        closeModal = {this.closeDeleteModal}
                        onAfterOpen = {this.afterOpenModal}
                        componentType='category'
                        parentTypes = {['category','task']}
                        componentName = {this.state.categoryToDeleteName}
                        componentId = {this.state.categoryToDeleteId}
                        rebaseChildren = {this.deleteAndRebase}
                        deleteChildren = {this.deleteWithChildren}
                        xAccessToken = {this.props.xAccessToken}
                    />
                </div>

            );
        }
    }
}

export default CategoryList;
