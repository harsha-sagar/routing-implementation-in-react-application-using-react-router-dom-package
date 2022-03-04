import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export const RequireAuth = ({ children }) => {
	const auth = useAuth()
	const location = useLocation()

	if (!(auth.user)){
		return <Navigate to="/login" state={{path: location.pathname}}/>
	} else {
		return children
	}
}