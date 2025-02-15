import React, { useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getUser} from '../../redux/reducers/user'
import {Redirect} from 'react-router-dom'


const Home = (props) => {
    
    useEffect( () => {
        props.getUser()
    }, [])

    console.log(props.user)

    return (

        <div>

            {props.user ?
    
                <div>
                    Test Page
                </div>
                
                :

                <Redirect to='/' />
    
            }
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