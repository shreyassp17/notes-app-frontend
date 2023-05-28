import axios from 'axios'
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { BASE_URL } from '../helper'

export const useLogin = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setLoading(true)
        setError("")
        try {
            const response = await axios.post(`${BASE_URL}/api/users/login`, { email, password })
            if (response.status === 200) {
                const { email, token } = response.data
                dispatch({ type: 'LOGIN', payload: { email, token } })
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

    return { login, loading, error }
}

