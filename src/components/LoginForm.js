import React, { Component } from 'react'

class LoginForm extends Component {

    render() {
        return (
            <form>
                <input type="text" name='username' placeholder='username'/>
                <input type="text" name='password' placeholder='password'/>
                <button type='submit' >Login</button>
            </form>
        )
    }
}

export default LoginForm;