import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    const userToken = useSelector((state) => state.auth.user.token)
    return userToken ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes