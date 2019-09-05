import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getUser} from '../../redux/reducers/user'
import {registerUser} from '../../redux/reducers/user'

let Register = (props) => {
    console.log(props.user)

    let [registerInputs, setRegisterInputs] = useState({
        firstName: '',
        lastName: '', 
        homeCity: '', 
        homeState: '',
        email: '',
        password: ''
    })

    let handleRegister = async () => {
        for( let key in registerInputs){
            let input = registerInputs[key]
            if (!input){
                return alert('All fields must be filled in')
            }
        }

        await props.registerUser(registerInputs)

        setRegisterInputs({
            firstName: '',
            lastName: '', 
            homeCity: '', 
            homeState: '',
            email: '',
            password: ''
        })

        props.history.push('/home')
    }

    let handleChange = event => {
        let {value, name} = event.target
        console.log(registerInputs)
        return(
            setRegisterInputs({
                ...registerInputs,
                [name]: value
            })
        )
    }

    return(
        <div>
            {props.user ?

                <Redirect to='/home'/>

                :

                <div>
                    <h1>Welcome To The Gun Marketplace. Please Create An Account</h1>
                    <div>
                        <input onChange={ (e) => handleChange(e)} name='firstName' type='text' placeholder='First Name'/>
                        <input onChange={ (e) => handleChange(e)} name='lastName' type='text' placeholder='Last Name'/>
                        <input onChange={ (e) => handleChange(e)} name='homeCity' type='text' placeholder='Home City'/>
                        <input onChange={ (e) => handleChange(e)} name='homeState' type='text' placeholder='Home State'/>
                        <input onChange={ (e) => handleChange(e)} name='email' type='text' placeholder='Email'/>
                        <input onChange={ (e) => handleChange(e)} name='password' type='text' placeholder='Password'/>
                    </div>
                    <div>
                        <button onClick={ () => props.history.push('/login')}>Login</button>
                        <button onClick={ () => handleRegister()}>Create Account</button>
                    </div>
                </div>

            }
        </div>
    )
}

const mapDispatchToProps = {
    getUser,
    registerUser
}

let mapStateToProps = state => {
    return {
        user: state.user.selected
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)