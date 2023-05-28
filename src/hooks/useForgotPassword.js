import React, { useState } from 'react'
import { BASE_URL } from '../helper'
import axios from 'axios'

export const useForgotPassword = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const forgotPassword = async (email) => {
        setLoading(true)
        setError("")
        setMessage("")
        try {
            const response = await axios.post(`${BASE_URL}/api/users/forgot-password`, { email })
            if (response.status === 200) {
                const { message } = response.data
                setError("")
                setMessage(message)
                setLoading(false)
            }
        }
        catch (err) {
            console.log(err)
            const { error } = err.response.data
            setError(error)
            setLoading(false)
            setMessage("")
        }
    }

    return { loading, error, message, forgotPassword }
}

