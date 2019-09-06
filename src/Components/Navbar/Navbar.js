import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getUser, logoutUser } from '../../redux/reducers/user'

let NavBar = (props) => {

    useEffect( () => {
        props.getUser()
        console.log('ihit')
    },[])

    let handleLogout = () => {
        console.log('hit')
        props.logoutUser()
    }

    return(
        <div>
            {props.user ?
                <div>
                    <button onClick={ () => handleLogout()}>Logout</button>
                    <button>{props.user.email}</button>
                    <img src={props.user.img} />
                </div>

                :

                <div>
                    <button onClick={()=> props.window.push('/login')}>Login</button>
                </div>

            }

        </div>
    )
}

let mapStateToProps = state => {
    return {
        user: state.user.selected
    }
}

let mapDispatchToProps = {
    logoutUser,
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)