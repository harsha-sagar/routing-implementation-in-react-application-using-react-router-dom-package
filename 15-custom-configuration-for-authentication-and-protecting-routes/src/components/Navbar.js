import { NavLink } from "react-router-dom"
import { useAuth } from "./AuthProvider"

export const Navbar = () => {
	const auth = useAuth()

	const navLinkStyles = (({isActive}) => {
		return {
			fontWeight: 		isActive ? 'bold' : 'normal',
			textDecoration: isActive ? 'none' : 'underline' 
		}
	})

	return (
		<nav className='primary-nav'>
			<NavLink style={navLinkStyles} to="/">Home</NavLink>
			<NavLink style={navLinkStyles} to="/about">About</NavLink>
			<NavLink style={navLinkStyles} to="/products">Products</NavLink>
			<NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
			{
				!(auth.user) && <NavLink style={navLinkStyles} to="/login">Login</NavLink>
			}
		</nav>
	)
}
