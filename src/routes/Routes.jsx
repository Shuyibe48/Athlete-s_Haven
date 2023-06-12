import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    // {
    //     path: '/dashboard',
    //     element: (
    //         <PrivateRoutes>
    //         </PrivateRoutes>
    //     ),
    //     children: [
    //         { path: '/dashboard/my-bookings', element: <MyBookings /> },
    //         { path: '/dashboard/add-room', element: <AddRoom /> },
    //         { path: '/dashboard/my-bookings', element: <MyBookings /> },
    //         { path: '/dashboard/my-listings', element: <MyListings /> },
    //         { path: '/dashboard/manage-bookings', element: <ManageBookings /> },
    //     ],
    // },
])
