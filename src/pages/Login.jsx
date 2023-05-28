import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Grid, Paper, Stack, TextField, Typography, Button, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {

    const { login, loading, error } = useLogin()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        await login(email, password)
    }

    return (
        <Grid container alignContent={'center'} justifyContent={'center'} height='100vh'>
            <Grid item xs={9} sm={8} md={8} lg={3} >
                <Paper sx={{ padding: 3, borderRadius: 2 }} elevation={7}>
                    <Stack spacing={2} alignItems={'center'} mb={2}>
                        <Typography variant='h3' alignSelf={'center'}  >Notes App</Typography>
                        <Typography variant='subtitle1' color={'rgb(137 139 143)'} >Welcome! Please login to continue.</Typography>
                    </Stack>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField type="email" id="outlined-basic" label="Enter your Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <TextField type="password" id="outlined-basic" label="Enter your password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Button disabled={loading} variant="contained" type="submit" onClick={handleSubmit}>Login</Button>
                            {error && <Alert severity="error">{error}</Alert>}
                            <Typography alignSelf={'center'} color={'rgb(137 139 143)'} > Don't have an account? Please
                                <Link style={{ textDecoration: 'none', color: '#1565C0', fontWeight: 'bold' }} to='/signup'> Signup</Link>
                            </Typography>
                            <Typography alignSelf={'center'} color={'rgb(137 139 143)'} >
                                <Link style={{ textDecoration: 'none', color: '#1565C0', fontWeight: 'bold' }} to='/forgot-password'>Forgot password?</Link>
                            </Typography>
                        </Stack>
                    </form>
                </Paper>
            </Grid>
        </Grid >
    )
}

export default Login