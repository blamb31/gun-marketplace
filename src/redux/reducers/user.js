import Axios from 'axios'

const initialState = {
    data: null,
    selected: null,
    loading: false
}

const GET_USER = 'GET_USER'
const GET_USER_REJECTED = 'GET_USER_REJECTED'
const GET_USER_PENDING = 'GET_USER_PENDING'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

const EDIT_USER = 'EDIT_USER'
const EDIT_USER_REJECTED = 'EDIT_USER_REJECTED'
const EDIT_USER_PENDING = 'EDIT_USER_PENDING'
const EDIT_USER_FULFILLED = 'EDIT_USER_FULFILLED'

const LOGIN_USER = 'LOGIN_USER'
const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'
const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'

const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_REJECTED = 'LOGOUT_USER_REJECTED'
const LOGOUT_USER_PENDING = 'LOGOUT_USER_PENDING'
const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED'

const REGISTER_USER = 'REGISTER_USER'
const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'
const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING'
const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'

export default function user(state = initialState, action) {
    console.log(state)
    let {type, payload} = action
    
    switch(type) {
        case GET_USER_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_USER_FULFILLED:
            // console.log(payload)
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case GET_USER_REJECTED:
            return {
                ...state,
                loading: false
            }
            
        case EDIT_USER_PENDING:
            return {
                ...state,
                loading: true
            }
        case EDIT_USER_FULFILLED:
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case EDIT_USER_REJECTED:
            return {
                ...state,
            }
                
        case LOGIN_USER_PENDING:
            return {
                ...state,
                loading: true
            }
        case LOGIN_USER_FULFILLED:
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case LOGIN_USER_REJECTED:
            alert('Username or Password is incorrect')
            return {
                ...state,
            }

        case LOGOUT_USER_PENDING:
            return {
                ...state,
                loading: true
            }
        case LOGOUT_USER_FULFILLED:
            return {
                ...state,
                selected: null,
                loading: false
            }
        case LOGOUT_USER_REJECTED:
            return {
                ...state,
            }

        case REGISTER_USER_PENDING:
            return {
                ...state,
                loading: true
            }
        case REGISTER_USER_FULFILLED:
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case REGISTER_USER_REJECTED:
            return {
                ...state,
            }

        default: 
            return state
        
    }
}

export function getUser() {
    return{
        type: GET_USER,
        payload: Axios.get('/user/getUser')
    }
}

export function loginUser(loginInfo) {
    return {
        type: LOGIN_USER,
        payload: Axios.post('/auth/login', loginInfo)
    }
}

export function registerUser(registerInfo) {
    return {
        type: REGISTER_USER,
        payload: Axios.post('/auth/register', registerInfo)
    }
}

export function logoutUser() {
    return{
        type: LOGOUT_USER,
        payload: Axios.get('/auth/logout')
    }
}

export function editUser(editedInfo) {
    return {
        type: EDIT_USER,
        payload: Axios.post('/user/editUser', editedInfo)
    }
}