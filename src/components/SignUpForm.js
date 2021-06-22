import React, { Component } from 'react';
// import uuid from 'uuid';
import { connect } from 'react-redux';
import { addUser } from '../actions/users'


class SignUpForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleOnChange = event => {
        const { value, name } = event.target
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name='username' placeholder='username' onChange={this.handleOnChange} value={this.state.username}/>
                    <input type="password" name='password' placeholder='password' onChange={this.handleOnChange}
                    value={this.state.password}/>
                    <button type='submit'>SignUp</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addUser })(SignUpForm);