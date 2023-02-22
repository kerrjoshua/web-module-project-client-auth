import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const navigate = useNavigate()
    const initialValues = {username: '', password: ''}
    const [credentials, setCredentials] = useState(initialValues)
    

    const handleChange = (evt) => {
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value
        })
    }
    const login = (evt) => {
        evt.preventDefault()

        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                navigate('/friendslist')
            })
            .catch(err => console.log('catch block: ',err))
            .finally(()=> setCredentials(initialValues))
    }
   
  
    return (
        <div>
            <h2>LOGIN</h2>
            <form onSubmit={login}>
                <div className='label'>
                    <label htmlFor='username'>USERNAME</label>
                </div>
                <input
                    name='username'
                    id='username'
                    onChange={handleChange}
                    value={credentials.username}
                />
                <div className='label'>
                <label htmlFor='password'>PASSWORD</label>
                </div>
                
                    <input
                        name='password'
                        id='password'
                        onChange={handleChange}
                        value={credentials.password}
                    />
                <button>SUBMIT</button>
            </form>

        </div>

    )
}

export default Login;