import React, { Component } from 'react';
import './App.css';
import Category from 'src/Category';

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [],
            fetchOptions: {
                method: get
            },
            headers: new Headers({
                'x-access-token': this.props['xAccessToken']
            })
        };
    }



    render() {
        return (
            <div className="categoryList" id="categoryRoot">
            </div>
        );
    }
}

export default CategoryList;
