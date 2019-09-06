import Axios from 'axios'

let initialState = {
    data: null,
    selected: null,
    loading: null
}

const GET_GUNS = 'GET_GUNS'
const GET_GUNS_PENDING = 'GET_GUNS_PENDING'
const GET_GUNS_FULFILLED = 'GET_GUNS_FULFILLED'
const GET_GUNS_REJECTED = 'GET_GUNS_REJECTED'

const GET_GUN = 'GET_GUN'
const GET_GUN_PENDING = 'GET_GUN_PENDING'
const GET_GUN_FULFILLED = 'GET_GUN_FULFILLED'
const GET_GUN_REJECTED = 'GET_GUN_REJECTED'

const ADD_GUN = 'ADD_GUN'
const ADD_GUN_PENDING = 'ADD_GUN_PENDING'
const ADD_GUN_FULFILLED = 'ADD_GUN_FULFILLED'
const ADD_GUN_REJECTED = 'ADD_GUN_REJECTED'

const DELETE_GUN = 'DELETE_GUN'
const DELETE_GUN_PENDING = 'DELETE_GUN_PENDING'
const DELETE_GUN_FULFILLED = 'DELETE_GUN_FULFILLED'
const DELETE_GUN_REJECTED = 'DELETE_GUN_REJECTED'

const ADD_GUN_TO_FAVS = 'ADD_GUN_TO_FAVS'
const ADD_GUN_TO_FAVS_PENDING = 'ADD_GUN_TO_FAVS_PENDING'
const ADD_GUN_TO_FAVS_FULFILLED = 'ADD_GUN_TO_FAVS_FULFILLED'
const ADD_GUN_TO_FAVS_REJECTED = 'ADD_GUN_TO_FAVS_REJECTED'

const REMOVE_GUN_FROM_FAVS = 'REMOVE_GUN_FROM_FAVS'
const REMOVE_GUN_FROM_FAVS_PENDING = 'REMOVE_GUN_FROM_FAVS_PENDING'
const REMOVE_GUN_FROM_FAVS_FULFILLED = 'REMOVE_GUN_FROM_FAVS_FULFILLED'
const REMOVE_GUN_FROM_FAVS_REJECTED = 'REMOVE_GUN_FROM_FAVS_REJECTED'

const EDIT_GUN = 'EDIT_GUN'
const EDIT_GUN_PENDING = 'EDIT_GUN_PENDING'
const EDIT_GUN_FULFILLED = 'EDIT_GUN_FULFILLED'
const EDIT_GUN_REJECTED = 'EDIT_GUN_REJECTED'

export default function guns(state = initialState, action) {
    const {payload, type} = action
    switch(type){
        case GET_GUNS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_GUNS_FULFILLED:
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case GET_GUNS_REJECTED:
            return {
                ...state,
                loading: false
            }

        case GET_GUN_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_GUN_FULFILLED:
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case GET_GUN_REJECTED:
            return {
                ...state,
                loading: false
            }

        case ADD_GUN_PENDING:
            return {
                ...state,
                loading: true
            }
        case ADD_GUN_FULFILLED:
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case ADD_GUN_REJECTED:
            return {
                ...state,
                loading: false
            }

        case DELETE_GUN_PENDING:
            return {
                ...state,
                loading: true
            }
        case DELETE_GUN_FULFILLED:
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case DELETE_GUN_REJECTED:
            return {
                ...state,
                loading: false
            }
            
        case ADD_GUN_TO_FAVS_PENDING:
            return {
                ...state,
                loading: true
            }
        case ADD_GUN_TO_FAVS_FULFILLED:
            
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case ADD_GUN_TO_FAVS_REJECTED:
            return {
                ...state,
                loading: false
            }

        case REMOVE_GUN_FROM_FAVS_PENDING:
            return {
                ...state,
                loading: true
            }
        case REMOVE_GUN_FROM_FAVS_FULFILLED:
            
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case REMOVE_GUN_FROM_FAVS_REJECTED:
            return {
                ...state,
                loading: false
            }

        case EDIT_GUN_PENDING:
            return {
                ...state,
                loading: true
            }
        case EDIT_GUN_FULFILLED:
            
            return {
                ...state,
                selected: payload.data,
                loading: false
            }
        case EDIT_GUN_REJECTED:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

export function getGuns() {
    return{
        type: GET_GUNS,
        payload: Axios.get('/guns')
    }
}

export function getGun(id) {
    return{
        type: GET_GUN,
        payload: Axios.get(`/guns/${id}`)
    }
}

export function addGun(gunInfo) {
    return{
        type: ADD_GUN,
        payload: Axios.post('/guns', gunInfo)
    }
}

export function deleteGun(id) {
    return{
        type: DELETE_GUN,
        payload: Axios.delete( `/guns/${id}`)
    }
}

export function addGunToFavs(id) {
    return{
        type: ADD_GUN_TO_FAVS,
        payload: Axios.post(`/guns/favorite/${id}`)
    }
}

export function removeGunFromFavs(id) {
    return{
        type: REMOVE_GUN_FROM_FAVS,
        payload: Axios.delete(`/guns/removeFavorite/${id}`)
    }
}

export function editGun(id) {
    return{
        type: EDIT_GUN,
        payload: Axios.put(`/guns/${id}`)
    }
}