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
            apiUrl: "https://insolent-preclude.herokuapp.com"
        }
    }

    componentDidMount(){
        //TODO 180925: login, get x-access-token

    }

    login(username, password){
        const headers = new Headers(
            {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':this.apiUrl

            }
        )

        const data = {
            username:username,
            password:password
        }

        //FIXME 191008: can't add headers

        const request = new Request (
            this.apiUrl,
            {
                method: "post",
                mode: "cors",
                redirect: "follow",
                headers:
                    {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin':this.apiUrl

                    }
                ,
                body: formUtil.composeXWwwFormUrlEncoded(data)
            }
        );

        fetch(request)
            .then(
                function (resp) {
                    this.setState({username:username,xAccessToken:resp.token});
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