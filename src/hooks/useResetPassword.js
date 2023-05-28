import React, { useState } from 'react'
import { BASE_URL } from '../helper'
import axios from 'axios'

export const useResetPassword = () => {
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const resetPassword = async (pass1, id, token) => {
        setLoading(true)
        setError("")
        setMessage("")

        try {
            const response = await axios.post(`${BASE_URL}/api/users/reset-password/${id}/${token}`, { newPassword: pass1 })
            setError("")
            setLoading(false)
            setMessage(response.data.message)
        }
        catch (err) {
            setError(err.data.error)
            setLoading(false)
            setMessage("")
        }

    }

    return { message, error, resetPassword, loading, setError }
}
