import React from 'react'
import AddTask from '../components/AddTask'
import { Grid } from '@mui/material'
import TasksList from '../components/TasksList'

function Home() {
    return (
        <Grid container height={'fit-content'}>
            <AddTask />
            <TasksList />
        </Grid>
    )
}

export default Home