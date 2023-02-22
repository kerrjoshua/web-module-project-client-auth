import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth'
import { Navigate } from 'react-router-dom';

const Friendslist = props => {

    const [friends, setFriends] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriends(res.data);
                setLoggedIn(true)
            })
            .catch(err => console.log(err.message)
            )
    }, [])

    
    return !localStorage.getItem('token')  ? (

        <Navigate to='/login' />) :
        (<div className='friendslist'>
            <h2>FRIENDSLIST</h2>
            {friends.map(friend => {
                return (
                    <div key={friend.id}>
                        {friend.name} - {friend.email}
                    </div>
                )
            })}

        </div>
        )
}

export default Friendslist;