import {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

//Auth
const Login = lazy(() => import('../pages/Login'));

const AuthRoutes = () => {
    return(
        <Routes>
            <Route 
                path="login" 
                element={
                    <Suspense fallback="Loading...">
                        <Login />
                    </Suspense>
                } 
            />
        </Routes>
    )
}

export default AuthRoutes