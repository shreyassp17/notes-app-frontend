import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

//page imports
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';

// component imports
import Navbar from './components/Navbar'

import { useAuthContext } from './hooks/useAuthContext';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  const { user } = useAuthContext()

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Home /> : <Navigate to='/login' />,
      // loader: rootLoader,
    },
    {
      path: "/signup",
      element: !user ? <Signup /> : <Navigate to='/' />,
      // loader: rootLoader,
    },
    {
      path: "/login",
      element: !user ? <Login /> : <Navigate to='/' />,
      // loader: rootLoader,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
      // loader: rootLoader,
    },
    {
      path: "/reset-password/:id/:header/:payload/:signature",
      element: <ResetPassword />,
      // loader: rootLoader,
    },
  ]);

  return (
    <div className="App">
      {user && <Navbar />}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
