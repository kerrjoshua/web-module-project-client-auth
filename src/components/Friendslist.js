import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth';

const Friendslist = props => {

    const [ friends, setFriends ] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err.message)
            )
    }, [])
    return (
        <div className='friendslist'>
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