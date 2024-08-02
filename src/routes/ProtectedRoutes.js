import {lazy, Suspense} from 'react';
import {Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

//User
const AccountDetails = lazy(() => import('../components/account/AccountDetails'))
const Address = lazy(() => import('../components/account/Address'))
const Dashboard = lazy(() => import('../components/account/Dashboard'))
const Downloads = lazy(() => import('../components/account/Downloads'))
const Orders = lazy(() => import('../components/account/Orders'))

const ProtectedRoutes = () => {

    const userToken = useSelector((state) => state.auth.user.token)
    if (!userToken) {
        return <Navigate to='/auth/login' replace />
    }

    return(
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route 
                    path="dashboard" 
                    element={
                    <Suspense fallback="Loading...">
                        <Dashboard />
                    </Suspense>
                    } 
                />
                <Route 
                    path="orders" 
                    element={
                    <Suspense fallback="Loading...">
                        <Orders />
                    </Suspense>
                    } 
                />
                <Route 
                    path="downloads" 
                    element={
                    <Suspense fallback="Loading...">
                        <Downloads />
                    </Suspense>
                    } 
                />
                <Route 
                    path="edit-address" 
                    element={
                    <Suspense fallback="Loading...">
                        <Address />
                    </Suspense>
                    } 
                />
                <Route 
                    path="edit-account" 
                    element={
                    <Suspense fallback="Loading...">
                        <AccountDetails />
                    </Suspense>
                    } 
                />
            </Route>
        </Routes>
    )
}

export default ProtectedRoutes