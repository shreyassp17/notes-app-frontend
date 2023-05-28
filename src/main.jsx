import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './context/authContext'
import { TasksContextProvider } from './context/tasksContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </TasksContextProvider>
  </React.StrictMode>
)
