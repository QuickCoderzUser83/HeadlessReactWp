import {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

//Products
const Products = lazy(() => import('../components/pages/Products'));

//Pages
const Home = lazy(() => import('../components/pages/Home'));
const About = lazy(() => import('../components/pages/About'));
const Contact = lazy(() => import('../components/pages/Contact'));

//Blog
const Posts = lazy(() => import('../components/pages/Posts'));
const PostSingle = lazy(() => import('../components/pages/PostSingle'));

const CommonRoutes = () => {
    return(
        <Routes>
            {/* pages */}
            <Route 
                // exact
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

            {/* Product */}
            <Route 
                path="products" 
                element={
                    <Suspense fallback="Loading...">
                        <Products />
                    </Suspense>
                } 
            />

            {/* Blog */}
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

        </Routes>
    )
}

export default CommonRoutes