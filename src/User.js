import React, { Component } from 'react';
import formUtil from './util/formUtil'
import CategoryList from './CategoryList';
import LoginForm from './LoginForm';
import fetchUtil from './util/fetchUtil';

//TODO 181013: persist local storage like here: https://stackoverflow.com/questions/45111159/how-can-i-use-localstorage-to-maintain-state-after-a-page-refresh-in-react
//TODO 181028: put username and xAccessToken in context so I can use it from anywhere
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
            null,
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