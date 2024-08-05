import {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import AuthRoutes from './AuthRoutes';
import MainLayout from '../layouts/MainLayout';
import PageNotFound from '../pages/404Page';

//Pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Posts = lazy(() => import('../pages/Posts'));
const PostSingle = lazy(() => import('../pages/PostSingle'));
const Products = lazy(() => import('../pages/Products'));

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            {/* Routes with Header and Footer */}
            <Route element={<MainLayout />}>
                <Route 
                    path="/" 
                    element={
                        <Suspense fallback="Loading...">
                            <Home />
                        </Suspense>
                    } 
                />
                <Route 
                    path="about" 
                    element={
                        <Suspense fallback="Loading...">
                            <About />
                        </Suspense>
                    } 
                />
                <Route 
                    path="contact" 
                    element={
                        <Suspense fallback="Loading...">
                            <Contact />
                        </Suspense>
                    } 
                />
                <Route 
                    path="products" 
                    element={
                        <Suspense fallback="Loading...">
                            <Products />
                        </Suspense>
                    } 
                />
                <Route 
                    path="posts" 
                    element={
                        <Suspense fallback="Loading...">
                            <Posts />
                        </Suspense>
                    } 
                />
                <Route 
                    path="posts/:id" 
                    element={
                        <Suspense fallback="Loading...">
                            <PostSingle />
                        </Suspense>
                    } 
                />
                {/* my account page */}
                <Route path="/my-account/*" element={<ProtectedRoutes />} />
            </Route>

            {/* Routes without Header and Footer */}
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes>
    </BrowserRouter>
  );
  
  export default AppRoutes;