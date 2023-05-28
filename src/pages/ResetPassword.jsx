import React, { useState } from 'react'
import { Grid, Paper, Stack, TextField, Typography, Button, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useResetPassword } from '../hooks/useResetPassword';
const ResetPassword = () => {

    const [password, setPassword] = useState("")
    const [confirmedpassword, setConfirmedPassword] = useState("")


    const { id, header, payload, signature } = useParams()
    const { loading, error, message, resetPassword, setError } = useResetPassword()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmedpassword) return setError("Passwords do not match.")
        const token = `${header}.${payload}.${signature}`
        await resetPassword(password, id, token)

    }

    return (
        <Grid container alignContent={'center'} justifyContent={'center'} height='100vh'>
            <Grid item xs={9} sm={8} md={8} lg={3} >
                <Paper sx={{ padding: 3, borderRadius: 2 }} elevation={7}>
                    <Stack spacing={2} alignItems={'center'} mb={2}>
                        <Typography variant='h4' alignSelf={'center'}>Reset Password</Typography>
                    </Stack>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField type="password" id="outlined-basic" label="Enter new password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <TextField type="password" id="outlined-basic" label="Confirm new password" variant="outlined" value={confirmedpassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
                            <Button variant="contained" disabled={loading} type="submit" onClick={handleSubmit}>Submit</Button>
                            {error && <Alert severity="error">{error}</Alert>}
                            {message && <Alert severity="success">{message}</Alert>}
                        </Stack>
                    </form>
                </Paper>
            </Grid>
        </Grid >
    )
}

export default ResetPassword