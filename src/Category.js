import React from "react";
import './App.css';


function Category(props){
    return(
        <div className="category" id={props.id}>
            Category Name = {props.data.name}
        </div>
    );
}

export default Category;