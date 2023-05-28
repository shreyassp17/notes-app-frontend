import React, { useState } from 'react'
import { Grid, Stack, TextField, Button, Typography, Alert } from '@mui/material'
import axios from 'axios'
import useTasksContext from '../hooks/useTasksContext'
import { BASE_URL } from '../helper'

const AddTask = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const { dispatch } = useTasksContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")
        setError("")
        setLoading(true)
        let { token } = JSON.parse(sessionStorage.getItem("authToken"))
        token = "Bearer " + token
        try {
            const response = await axios.post(`${BASE_URL}/api/tasks/create`, { title, description }, {
                headers: {
                    authorization: token
                }
            })
            dispatch({ type: 'ADD_TASK', payload: response.data.task })
            setLoading(false)
            setTitle("")
            setDescription("")
            setMessage(response.data.message)
            setTimeout(() => setMessage(""), 2000)
        }
        catch (err) {
            setError(err.data.message)
            setLoading(false)
        }
    }

    return (
        <Grid item lg={6} md={12} sm={12} xs={12} padding={4} height={'fit-content'}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <Typography variant='h4'>Add Notes</Typography>
                    <TextField type="text" id="outlined-basic" value={title} label="Enter Note Title" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
                    <TextField type="text" multiline minRows={2} id="outlined-basic" value={description} label="Enter Note Description" variant="outlined" onChange={(e) => setDescription(e.target.value)} />
                    <Button disabled={loading} variant="contained" type="submit" onClick={handleSubmit}>Add Notes</Button>
                    {message && <Alert severity="success">{message}</Alert>}
                    {error && <Alert severity="error">{message}</Alert>}
                </Stack>
            </form>
        </Grid>
    )
}

export default AddTask