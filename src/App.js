import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
// import About from './components/pages/About';
import Posts from './components/pages/Posts';
import PostSingle from './components/pages/PostSingle';
import Products from './components/pages/Products';
import Login from './components/pages/Login'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoutes from './ProtectedRoutes';

// account pages
import AccountDetails from './components/account/AccountDetails'
import Address from './components/account/Address'
import Dashboard from './components/account/Dashboard'
import Downloads from './components/account/Downloads'
import Orders from './components/account/Orders'

import { SpeedInsights } from '@vercel/speed-insights/react';

const LazyAbout = React.lazy(() => import('./components/pages/About'));

const App = () =>  {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="about" 
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          } 
        />
        <Route path="products" element={<Products />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="posts" element={<Posts />} />
        </Route>
        <Route path="posts/:id" element={<PostSingle />} />
        <Route path="login" element={<Login />} />

        {/* account pages */}
        <Route path="my-account/dashboard" element={<Dashboard />} />
        <Route path="my-account/orders" element={<Orders />} />
        <Route path="my-account/downloads" element={<Downloads />} />
        <Route path="my-account/edit-address" element={<Address />} />
        <Route path="my-account/edit-account" element={<AccountDetails />} />

      </Routes>
      <Footer />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
