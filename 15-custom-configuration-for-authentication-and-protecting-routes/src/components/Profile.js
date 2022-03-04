import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export const Profile = () => {
	const navigate = useNavigate()

	const auth = useAuth()

	const handleLogout = () => {
		auth.logout()
		navigate('/')
	}

	return (
		<>
			<div>Hi {auth.user}</div>
			<button onClick={handleLogout}>Logout</button>
		</>
	)
}
