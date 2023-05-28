import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuthContext } from '../hooks/useAuthContext';
import useTasksContext from '../hooks/useTasksContext';

function Navbar() {

    const { user, dispatch } = useAuthContext()
    const { dispatch: tasksDispatch } = useTasksContext()

    function handleLogout() {
        dispatch({ type: 'LOGOUT', payload: user })
        tasksDispatch({ type: 'SET_TASKS', payload: [] })
        sessionStorage.removeItem('authToken')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Notes App
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar