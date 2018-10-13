import React, { Component } from 'react';
import './App.css';
import Category from './Category';

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
            //fetch categories
            return (
                <div>loading gif...</div>
            )
        } else {
            return (
                <div className="categoryList" id="categoryRoot">
                    //xAccessToken = {this.props.xAccessToken}
                </div>
            );
        }
    }
}

export default CategoryList;
