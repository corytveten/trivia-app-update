import React, { Component } from 'react';
import { connect } from 'react-redux';
// import User from '../components/User';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import User from '../components/User';




class UsersContainer extends Component {

    render() {
        console.log(this.props.users)
        return (
            <div>
                <SignUpForm />
                <LoginForm />
                <User />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      users: state.users
    }
  }

export default connect(mapStateToProps)(UsersContainer);