import React, {useEffect, useState} from 'react'
import { loginUser } from '../../redux/reducers/user'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import Auth0 from '@auth0/auth0-spa-js'

const Login = (props) => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    // useEffect( () => {
    //     props.loginUser({
    //         email: 'blake.lamb31@gmail.com',
    //         password: '1234'
    //     })
    // }, [])

    const handleChange = event => {
        const {name} = event.target
        setLoginInfo({
            ...loginInfo,
            [name]: event.target.value
        })
    }

    const handleLogin = async () => {
        for ( let key in loginInfo) {
            if( loginInfo[key] === '') {
                return alert( 'Please enter a username and password')
            }
        }

        const {email, password} = loginInfo
        const response = await props.loginUser({email, password})


        if(response) {
            props.history.push('/home')

        }

    }

    return(
        <div>
            {props.user ?
    
                <Redirect to='/home' />
    
                :
    
                <div>
                    <h1>Login Page</h1>

                    <div>
                        <input 
                        type='text' 
                        placeholder='Email'
                        name='email'
                        onChange={ (event) => handleChange(event)}
                        value={loginInfo.email} />
            
                        <input 
                        type='text' 
                        placeholder='Password'
                        name='password'
                        onChange={ (event) => handleChange(event)}
                        value={loginInfo.password} />
                    </div>

                    <div>
                        <button onClick={ handleLogin }>Login</button>
                        <button onClick={ () => props.history.push('/register')}>Create Account</button>                        
                    </div>
                </div>
    
    
            }

        </div>
    )
}

const mapDispatchToProps = {
    loginUser
}

let mapStateToProps = state => {
    return {
        user: state.user.selected

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)