import { NavLink} from 'react-router-dom'
import { useAuth } from 'hooks/useAuth';
import '../styled.css'

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    
    return (
      <div className='auth_container'>
        <ul className='auth_list'>
          <li className='auth_item'>
            <NavLink className='nav_link' to="/">
              Home 🏠
            </NavLink>
          </li>
          
              {isLoggedIn && (
                  <li className='auth_item'>
                  {isLoggedIn && (
                      <NavLink className='nav_link' to="/contacts">
                        Contacts 📝
                      </NavLink>
                    )}
              </li>
                )}
        </ul>
      </div>
    );
  };