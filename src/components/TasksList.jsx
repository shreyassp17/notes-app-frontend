import React, { useEffect } from 'react'
import Task from './Task'
import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import useTasksContext from '../hooks/useTasksContext'
import { BASE_URL } from '../helper'

const TasksList = () => {

    const { tasks, dispatch } = useTasksContext()
    let { token } = JSON.parse(sessionStorage.getItem("authToken"))
    token = "Bearer " + token

    useEffect(() => {
        axios.get(`${BASE_URL}/api/tasks`, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                dispatch({ type: 'SET_TASKS', payload: res.data.tasks })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Grid item lg={6} md={12} sm={12} xs={12} padding={4} height={'fit-content'}>
            <Typography variant='h4'>Notes</Typography>
            {tasks.map(task => {
                return <Task key={task._id} task={task} />
            })}
        </Grid>
    )
}

export default TasksList