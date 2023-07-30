import { useAuth } from "../../hooks/useAuth"
import { UserMenu } from '../UserMenu/UserMenu'
import { AuthNav } from '../AuthNav/AuthNav'
import { Navigation } from '../Navigation/Navigation'
import '../styled.css'
export const AppBar = () =>{
    const { isLoggedIn } = useAuth()

    return(
        <header className="header_Container">
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav />}
        </header>
    )
}