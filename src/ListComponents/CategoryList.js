import React, { Component } from 'react';
import '../App.css';
import fetchUtil from '../util/fetchUtil';
import Category from '../BranchComponents/Category';

//TODO 181228: much bigger problem here passing everything down from the top like this
//I have three options:
// - put all the update functions in here and pass them down
// - have each section retrieve its own element using separate http calls
// - do everything either in the context or figure out redux

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [],
            fetchOptions: {
                method: 'get'
            },
            headers: new Headers({
                'x-access-token': this.props['xAccessToken']
            }),
            categories: undefined
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
                <div>loading gif...</div>
            )
        } else {
            return (
                <div className="categoryList" id="categoryRoot">
                    {
                        this.state.categories.map(
                            cat=>{
                                return (
                                    <Category id = {cat._id} data = {cat}/>
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
