import React, {useEffect} from 'react'
import { getUser } from '../../redux/reducers/user';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

function LandingPage(props) {

    
    useEffect( () => {
        console.log('hit')
        props.getUser()
    },[])

    return(
        <div>
            {props.user ? 

                <Redirect to='/home' />

                :
                
                <div>
                    Welcome to Gun Market-Place
                    <div>
                        <button onClick={()=> props.history.push('/register')}>Create An Account</button>
                        <button onClick={()=> props.history.push('/login')}>Login</button>
                    </div>
                </div>

            }
            
        </div>
    )
}

let mapStateToProps = state => {
    console.log(state)
    return {
        user: state.user.selected
    }
}

let mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)