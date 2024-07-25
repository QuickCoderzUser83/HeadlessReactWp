import { Link, NavLink} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {logout} from '../../redux/AuthSlice'
import { useState } from "react";

const Navbar = () => {

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    const [dropdown, setDropdown] = useState('hidden');

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active text-blue-500 ' : '') + 'block py-2 px-3 text-white hover:text-blue-500'}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active text-blue-500 ' : '') + 'block py-2 px-3 text-white hover:text-blue-500'}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) => (isActive ? 'active text-blue-500 ' : '') + 'block py-2 px-3 text-white hover:text-blue-500'}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/posts"
                                className={({ isActive }) => (isActive ? 'active text-blue-500 ' : '') + 'block py-2 px-3 text-white hover:text-blue-500'}
                            >
                                Posts
                            </NavLink>
                        </li>
                        {
                            user.token ? (
                                <li className="relative">
                                    <button onClick={() => setDropdown(dropdown === 'hidden' ? '' : 'hidden')} className="flex items-center justify-between w-full py-2 px-3 text-white md:border-0 hover:text-blue-500 md:p-0">
                                        <img className="w-8 h-8 me-2 rounded-full" src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt={user.user_display_name} />
                                            {user.user_display_name}
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
        
                                    <div className={`z-10 ${dropdown} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-12`}>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            <li>
                                                <NavLink
                                                    to="/my-account/dashboard"
                                                    className={({ isActive }) => (isActive ? 'active bg-gray-600 text-white ' : '') + 'block px-4 py-2 hover:bg-gray-600 hover:text-white'}
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/my-account/orders"
                                                    className={({ isActive }) => (isActive ? 'active bg-gray-600 text-white ' : '') + 'block px-4 py-2 hover:bg-gray-600 hover:text-white'}
                                                >
                                                    Orders
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/my-account/download"
                                                    className={({ isActive }) => (isActive ? 'active bg-gray-600 text-white ' : '') + 'block px-4 py-2 hover:bg-gray-600 hover:text-white'}
                                                >
                                                    Downloads
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/my-account/edit-address"
                                                    className={({ isActive }) => (isActive ? 'active bg-gray-600 text-white ' : '') + 'block px-4 py-2 hover:bg-gray-600 hover:text-white'}
                                                >
                                                    Address
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/my-account/edit-account"
                                                    className={({ isActive }) => (isActive ? 'active bg-gray-600 text-white ' : '') + 'block px-4 py-2 hover:bg-gray-600 hover:text-white'}
                                                >
                                                    Account Details
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <button onClick={() => dispatch(logout())} className="block w-full text-left rounded-b-lg px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</button>
                                    </div>
                                </li>
                            ) 
                            : (<li>
                                    <Link to='/login' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
                                </li>)
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar