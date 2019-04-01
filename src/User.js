import React, { Component } from 'react';
import formUtil from './util/formUtil'
import CategoryList from './ListComponents/CategoryList';
import LoginForm from './FormComponents/LoginForm';
import fetchUtil from './util/fetchUtil';
import {UserProvider} from './UserContext';

//TODO 181013: persist local storage like here: https://stackoverflow.com/questions/45111159/how-can-i-use-localstorage-to-maintain-state-after-a-page-refresh-in-react
class User extends Component {

   

    constructor(props){
        super(props);
        this.state={
            username: undefined,
            xAccessToken: undefined,
            apiUrl: "http://localhost:3434",//"https://insolent-preclude.herokuapp.com",
            uiUrl: 'http://localhost:8080'
        };
        this.login=this.login.bind(this);
    }

    saveState(state){
        localStorage.setItem('userState', JSON.stringify(state))
    };

        //check to see if token from local storage is up to date
    testToken(){
        fetchUtil.getData('user',this.state.xAccessToken,
                res=>{if(!res.userName){
                    //save the state first because callback doesn't fire for some reason
                    this.saveState(Object.assign(this.state,{xAccessToken:undefined}))
                    this.setState({xAccessToken:undefined});
                }}
            )
    }

    componentDidMount () {
        const persistState = localStorage.getItem('userState');

        if (persistState) {
            try {
                this.setState(JSON.parse(persistState),this.testToken);
            } catch (e) {
                console.log("user state is not JSON")
            }
        }
    }

    componentWillUnmount () {
    }

    refreshToken(){
        this.setState({xAccessToken:null});
    }


    login(username, password){
        const data = formUtil.composeXWwwFormUrlEncoded(
            {
                username:username,
                password:password
            }
        );
        fetchUtil.postData(
            'account/login',
            null,
            data,
            responseData=>{
                //save the state first because callback doesn't fire for some reason
                this.saveState(Object.assign(this.state,{xAccessToken:responseData.token}));
                this.setState({xAccessToken:responseData.token});

            }
        );


    }



    render(){
        if(this.state.xAccessToken){
          return(
              <div id='userRoot'>
                  <UserProvider value = {this.state.xAccessToken}>
                    <CategoryList
                        xAccessToken = {this.state.xAccessToken}
                        refreshToken = {this.refreshToken}
                    />
                  </UserProvider>
              </div>)
        } else {
           return (<LoginForm login = {this.login} apiUrl = {this.state.apiUrl}/>)
        }
    }


}

export default User;