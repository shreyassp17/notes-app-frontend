import React, { useState } from 'react'
import { Grid, Paper, Stack, TextField, Typography, Button, Alert } from '@mui/material';
import { useForgotPassword } from '../hooks/useForgotPassword';

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const { forgotPassword, loading, error, message } = useForgotPassword()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await forgotPassword(email)
    }
    return (
        <Grid container alignContent={'center'} justifyContent={'center'} height='100vh'>
            <Grid item xs={9} sm={8} md={8} lg={3} >
                <Paper sx={{ padding: 3, borderRadius: 2 }} elevation={7}>
                    <Stack spacing={2} alignItems={'center'} mb={2}>
                        <Typography variant='h4' alignSelf={'center'}>Forgot Password</Typography>
                    </Stack>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField type="email" id="outlined-basic" label="Enter your Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Button variant="contained" disabled={loading} type="submit" onClick={handleSubmit}>Submit</Button>
                            {error && <Alert severity="error">{error}</Alert>}
                            {message && <Alert severity="success">{message}</Alert>}

                            <Typography alignSelf={'center'} color={'rgb(137 139 143)'} >
                                A password reset link will be sent to your email.
                            </Typography>
                        </Stack>
                    </form>
                </Paper>
            </Grid>
        </Grid >
    )
}

export default ForgotPassword