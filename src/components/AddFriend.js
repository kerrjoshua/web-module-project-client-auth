import React, { useState } from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth'

const AddFriend = (props) => {
    const initialValues = {name: '', age: '', email: ''}
    const [ friend, setFriend ] = useState(initialValues)

    const handleChange = evt => {
        setFriend({...friend, [evt.target.name]: evt.target.value})
    }

    const addNewFriend = evt => {
        evt.preventDefault();
        axiosWithAuth().post('/friends', friend)
            .then(res => console.log(res))
            .catch(err => console.log('catch block: ', err))
            .finally(setFriend(initialValues))
    }

     return(
        <div>
            <form onSubmit={addNewFriend}>

                <label className='label' htmlFor='name'>Name:</label>
                <input name='name' id='name' value={friend.name}onChange={handleChange}/>
                <label className='label' htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' value={friend.email} onChange={handleChange}/>
                <label className='label' htmlFor='age'>Age:</label>
                <input name='age' id='age' value={friend.age} onChange={handleChange}/>
                <button>Submit</button>

            </form>
        </div>
    )
}

export default AddFriend;