import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export const Login = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const auth = useAuth()

	const inputRef = useRef()

	const handleLogin = () => {
		auth.login(inputRef.current.value)

		const redirectTo = location.state?.path || '/'

		navigate(redirectTo, {replace: true})
	}

	return (
		<div>
			<input type="text" ref={inputRef}/>
			<button onClick={handleLogin}>Login</button>
		</div>
	)
}
