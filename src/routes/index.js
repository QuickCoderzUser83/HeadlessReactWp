import { BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommonRoutes from './CommonRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import AuthRoutes from './AuthRoutes';

const Layout = () => (
    <>
        <Navbar />
            <Outlet />
        <Footer />
    </>
  );

const AllRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* Main layout with Navbar and Footer */}
                <Route element={<Layout />}>
                    <Route path="/*" element={<CommonRoutes />} />
                    <Route path="/my-account/*" element={<ProtectedRoutes />} />
                </Route>

                {/* AuthRoutes without Navbar and Footer */}
                <Route path="/auth/*" element={<AuthRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes