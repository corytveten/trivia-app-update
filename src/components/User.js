import React from 'react';


const User = (props) => {
    console.log(props)
    return (
        <div>
            <p>Currently logged in: {props.user.username}</p>
        </div>
    )
}



export default User;