import React, { Component } from 'react';
import formUtil from './util/formUtil'
import CategoryList from './CategoryList';
import LoginForm from './LoginForm';
import fetchUtil from './util/fetchUtil';

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            username: undefined,
            xAccessToken: undefined,
            apiUrl: "https://insolent-preclude.herokuapp.com",
            uiUrl: 'http://localhost:8080'
        }
        this.login=this.login.bind(this);
    }

    componentDidMount(){
        //TODO 180925: login, get x-access-token

    }


    login(username, password){
        const data = formUtil.composeXWwwFormUrlEncoded(
            {
                username:username,
                password:password
            }
        );
        fetchUtil.postData(
            '/account/login',
            data,
            responseData=>{
                this.setState({xAccessToken:responseData.token});
            }
        );


    }



    render(){
        if(this.state.xAccessToken){
          return(  <div id='userRoot'>
                <CategoryList xAccessToken = {this.state.xAccessToken}/>
            </div>)
        } else {
           return (<LoginForm login = {this.login} apiUrl = {this.state.apiUrl}/>)
        }
    }


}

export default User;