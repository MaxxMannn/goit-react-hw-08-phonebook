import { NavLink } from 'react-router-dom'
import '../styled.css'

export const AuthNav = () => {
    return (
        <div className='auth_container'>
            <ul className='auth_list'>
                <li className='auth_item'>
                    <NavLink className='nav_link' to='/register'>
                        Sign Up
                    </NavLink>
                </li>
                <li className='auth_item'>
                    <NavLink className='nav_link' to='/login'>
                        Log In
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}