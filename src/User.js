import React, { Component } from 'react';
import formUtil from 'util/formUtil'
import CategoryList from 'src/CategoryList';
import LoginForm from 'src/LoginForm';

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

    render(){
        if(this.state.xAccessToken){
            <div id='userRoot'>
                <CategoryList xAccessToken = {this.state.xAccessToken}/>
            </div>
        } else {
            <LoginForm login = {this.login}/>
        }
    }

    login(username, password){
        const headers = new Headers(
            {
                'Content-Type': "application/x-www-form-urlencoded"

            }
        )
        const data = {
            username:username,
            password:password
        }

        const request = new Request (
            this.apiUrl,
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
                function (resp) {
                    this.setState({username:username,xAccessToken:resp.token});
                }
            )

    }


}

export default User;