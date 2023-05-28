import axios from 'axios'
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { BASE_URL } from '../helper'

export const useSignup = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const { dispatch } = useAuthContext()

    const signup = async (email, password, password2) => {

        if (password !== password2) return setError("Passwords do not match")

        setLoading(true)
        setError("")
        try {
            const response = await axios.post(`${BASE_URL}/api/users/signup`, { email, password })
            if (response.status === 200) {
                const { email, token } = response.data
                dispatch({ type: 'SIGNUP', payload: { email, token } })
                sessionStorage.setItem('authToken', JSON.stringify({ email, token }))
                setLoading(false)
            }
        }
        catch (err) {
            const { error } = err.response.data
            setError(error)
            setLoading(false)
        }
    }

    return { signup, loading, error }
}

