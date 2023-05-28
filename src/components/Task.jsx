import React from 'react'
import { Card, CardContent, Typography, Grid, CardActions, Button } from '@mui/material'
import useTasksContext from '../hooks/useTasksContext';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { BASE_URL } from '../helper';

const Task = ({ task }) => {
    const { title, description, _id } = task
    const { tasks, dispatch } = useTasksContext()

    const handleDelete = async () => {
        let { token } = JSON.parse(sessionStorage.getItem("authToken"))
        token = "Bearer " + token
        try {
            const { status, data } = await axios.delete(`${BASE_URL}/api/tasks/${_id}`, {
                headers: {
                    authorization: token
                }
            })
            if (status === 200) {
                dispatch({ type: 'DELETE_TASK', payload: { _id } })
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Grid mt={2}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent sx={{ paddingBottom: 0 }}>
                    <Typography variant='h5' fontWeight={500}>{title}</Typography>
                    <Typography variant='subtitle1'>{description}</Typography>
                </CardContent>
                <CardActions sx={{ padding: 2 }}>
                    <Button size="small" variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Task