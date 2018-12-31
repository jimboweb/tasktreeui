import React, { Component } from 'react';
import '../App.css';
import fetchUtil from '../util/fetchUtil';
import Category from '../BranchComponents/Category';
import LoadingGif from "../DisplayComponents/LoadingGif";
import CategoryContainer from "../ContainerComponents/CategoryContainer";

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
        };
    }


    render() {
        if (!this.state.categories) {
            fetchUtil.getData(
                'category/',
                this.props.xAccessToken,
                responseData => {
                    this.setState({categories:responseData})
                }
            );
            return (
                <LoadingGif/>
            )
        } else {
            return (
                <div className="categoryList" id="categoryRoot">
                    {
                        this.state.categories.map(
                            cat=>{
                                return (
                                    <CategoryContainer id = {cat._id}/>
                                )
                            }
                        )
                    }
                </div>
            );
        }
    }
}

export default CategoryList;
