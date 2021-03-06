import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.props.login(this.state.username,this.state.password);
        event.preventDefault();
    }


    render(){
        return(
            <form id={this.props.id}>
                Enter your username and password
                <label>
                    Username:
                    <input
                        type='text'
                        name='username'
                        id='usernameInput'
                        value={this.state.username}
                        onChange = {this.handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type='password'
                        name='password'
                        id='passwordInput'
                        value={this.state.password}
                        onChange = {this.handleChange}
                    />
                </label>
                <input
                    type='submit'
                    name = 'submit'
                    id='submitInput'
                    value = 'submit'
                    onClick={this.handleSubmit}
                    />
            </form>
        )
    }

}

export default LoginForm;