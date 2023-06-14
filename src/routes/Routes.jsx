import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import DashboardLayout from "../layouts/DashboardLayout";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: 'classes',
                element: <Classes />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ],
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'dashboard/mySelectedClasses',
                element: <MySelectedClasses />
            },
            {
                path: 'dashboard/myEnrolledClasses',
                element: <MyEnrolledClasses />
            }
        ]
    }
])
