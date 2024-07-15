import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import PostSingle from './components/pages/PostSingle';
import Products from './components/pages/Products';
import Login from './components/pages/Login'
import Navbar from './components/Navbar/index';

const App = () =>  {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostSingle />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
