import React, { useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getUser} from '../../redux/reducers/user'


const Home = (props) => {
    
    useEffect( () => {
        props.getUser()
    }, [])

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        user: state.user.selected
    }
}

const mapDispatchToProps = {
    getUser
}

export default connect( mapStateToProps, mapDispatchToProps)(Home)