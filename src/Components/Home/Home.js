import React, { useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getUser} from '../../redux/reducers/user'
import { Redirect } from 'react-router-dom'

const Home = (props) => {
    
    useEffect( () => {
        props.getUser()
    }, [])

    return (

        <div>
            {props.user ?
                <div>
                    <div>
                        <div>
                            <h3>Saved Guns</h3>
                        </div>
                        <div>
                            <h3>{props.user.first_name}'s Guns For Sale</h3>
                        </div>
                        <div>
                            <h3>Recently Viewed Guns </h3>
                        </div>
                    </div>
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