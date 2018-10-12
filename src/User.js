import React, { Component } from 'react';
import formUtil from './util/formUtil'
import CategoryList from './CategoryList';
import LoginForm from './LoginForm';

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


    login(username, password, apiUrl){
        const headers = new Headers(
            {
                'Content-Type': 'application/x-www-form-urlencoded'

            }
        )

        // console.log("the headers are:");
        // for (var pair of headers.entries()) {
        //     console.log(pair[0]+ ': '+ pair[1]);
        // }

        const data = {
            username:username,
            password:password
        }

        //FIXME 191008: can't add headers

        const request = new Request (
            apiUrl + '/account/login',
            {
                method: "post",
                mode: "cors",
                redirect: "follow",
                headers:headers,
                body: formUtil.composeXWwwFormUrlEncoded(data)
            }
        );

        fetch(request)
            .then(
                resp => {
                    //FIXME 181011: 'this' is not defined, even after I bind it. hmmm...
                    return resp.json();
                })
            .then(
                data=>{
                    this.setState({xAccessToken:data.token});
                }
            )


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