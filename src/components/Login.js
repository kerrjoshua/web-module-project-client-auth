import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' })
    const handleChange = (evt) => {
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value
        })
    }
    const login = (evt) => {
        evt.preventDefault()
        console.log(credentials)

        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.push('/friendslist');
            })
            .catch(err => console.log(err.error))
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