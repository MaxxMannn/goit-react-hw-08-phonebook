import { useDispatch } from 'react-redux'
import { logOut } from 'redux/fetchAuth'
import { useAuth } from '../../hooks/useAuth'

export const UserMenu = () =>{
    const dispatch = useDispatch()
    const { user } = useAuth()

    return (
        <div className='auth_container'>
            <ul className='auth_list'>
                <li className='account_name'>
                    <p>Hello, {user.name} 👋</p>
                </li>
                <li >
                    <button type='button' className='button_log_out' onClick={()=> dispatch(logOut())}>
                        Log out 🚪
                    </button>
                </li>
            </ul>
        </div>
    )
}