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
        console.log('handleChange running');
        console.log('event: ' + JSON.stringify(event));
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.login(this.state.username,this.state.password);
        event.preventDefault();
    }

    render(){
        return(
            <form id={this.props.id}>
                Here's one more change
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
            </form>
        )
    }

}

export default LoginForm;