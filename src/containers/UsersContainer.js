import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import User from '../components/User';


class UsersContainer extends Component {
    state = {
        currentUser: ''
    }

    

    render() {
        console.log(this.props.users)
        const loggedUser = this.props.users.find(user => {
            return user.isLoggedIn
        });
        console.log(loggedUser)
        return (
            <div>
                <SignUpForm />
                <LoginForm />
                <User user={loggedUser} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      users: state.usersReducer
    }
  }

export default connect(mapStateToProps)(UsersContainer);