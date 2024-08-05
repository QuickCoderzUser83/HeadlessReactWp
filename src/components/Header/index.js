import {NavLink, Link} from "react-router-dom"
import { useSelector, useDispatch} from "react-redux"
import {logout} from '../../redux/AuthSlice'
import { useState, useEffect} from "react"

import englishImg from '../../assets/images/header/english.jfif'
import logo from '../../assets/images/header/foodie-logo.png'
import avatar from '../../assets/images/header/avatar.avif'

const Header = () => {

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    const [dropdown, setDropdown] = useState('hidden');

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 32);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
        <header>
            <div className="z-20 hidden h-8 items-center bg-brown text-white lg:flex">
                <div className="max-w-screen-2xl w-full m-auto px-4">
                    <nav className="grid items-center gap-4 lg:grid-cols-3">
                        <div className="relative flex">
                            <div className="relative inline-flex">
                                <button className="relative flex items-center text-base">
                                    <img alt="english" height="14" width="21" className="me-3 h-3.5" src={englishImg} />
                                    <span className="text-xs font-medium">English (USA)</span>
                                </button>
                            </div>
                        </div>
                        <h5 className="text-center text-sm text-primary-50">
                            Free Delivery Over $50 <Link className="font-semibold underline" to="/">Claim Offer</Link>
                        </h5>
                        <ul className="flex items-center justify-end gap-4">
                            <li className="menu-item flex">
                                <Link className="text-sm hover:text-primary" to="/">Help</Link>
                            </li>
                            <li className="menu-item flex">
                                <Link className="text-sm hover:text-primary" to="/">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={`${scroll ? 'fixed top-0 shadow-md bg-white' : 'relative'} w-full items-center backdrop-blur transition-all duration-300 z-30`}>
                <div className="flex h-14 items-center lg:h-20">
                    <div className="max-w-screen-2xl w-full m-auto px-4">
                        <div className="grid grid-cols-12 items-center gap-4">

                            <div className="flex col-span-3">
                                <Link to="/">
                                    <img src={logo} height="40" width="130" alt="logo" className="flex h-12 w-auto " />
                                </Link>
                            </div>

                            <ul className="menu relative hidden items-center justify-center lg:flex col-span-4">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => (isActive ? 'active text-primary ' : '') + 'inline-flex items-center text-sm lg:text-base font-medium py-2 px-4 rounded-full hover:text-primary text-default-800'}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => (isActive ? 'active text-primary ' : '') + 'inline-flex items-center text-sm lg:text-base font-medium py-2 px-4 rounded-full hover:text-primary text-default-800'}
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/products"
                                        className={({ isActive }) => (isActive ? 'active text-primary ' : '') + 'inline-flex items-center text-sm lg:text-base font-medium py-2 px-4 rounded-full hover:text-primary text-default-800'}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/posts"
                                        className={({ isActive }) => (isActive ? 'active text-primary ' : '') + 'inline-flex items-center text-sm lg:text-base font-medium py-2 px-4 rounded-full hover:text-primary text-default-800'}
                                    >
                                        Posts
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) => (isActive ? 'active text-primary ' : '') + 'inline-flex items-center text-sm lg:text-base font-medium py-2 px-4 rounded-full hover:text-primary text-default-800'}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>

                            <ul className="flex items-center justify-end gap-x-6 col-span-5">
                                <li className="menu-item relative hidden 2xl:flex">
                                    <form>
                                        <div className="relative w-72">
                                            <input type="search" placeholder="Search for items..." className="form-input w-full rounded-full  border-transparent bg-primary-400/20 px-4 py-1.5 ps-10 placeholder-primary-500" />
                                            <span className="absolute start-3 top-1/2 -translate-y-1/2">
                                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <path d="m21 21-4.3-4.3"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <button className="hidden" type="submit"></button>
                                    </form>
                                </li>
                                <li className="menu-item flex 2xl:hidden">
                                    <button data-hs-overlay="#mobileSearchSidebar" className="relative flex text-base text-default-600 transition-all hover:text-primary">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </svg>
                                    </button>
                                </li>
                                <li className="menu-item flex">
                                    <Link className="relative flex text-base text-default-600 transition-all hover:text-primary" to="/">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="21" r="1"></circle>
                                            <circle cx="19" cy="21" r="1"></circle>
                                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                        </svg>
                                        <span className="absolute -top-2.5 end-0 z-10 inline-flex h-5 w-5 translate-x-1/2 transform items-center justify-center rounded-full bg-orange-500 p-1 text-xs font-bold leading-none text-red-100">0</span>
                                    </Link>
                                </li>
                                <li className="menu-item flex">
                                    <Link className="relative flex text-base text-default-600 transition-all hover:text-primary" to="/">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="fill-red-500  text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                        </svg>
                                        <span className="absolute -top-2.5 end-0 z-10 inline-flex h-5 w-5 translate-x-1/2 transform items-center justify-center rounded-full bg-orange-500 p-1 text-xs font-bold leading-none text-red-100">0</span>
                                    </Link>
                                </li>
                                {
                                user.token ? (
                                    <li className="relative">
                                        <button onClick={() => setDropdown(dropdown === 'hidden' ? '' : 'hidden')} className="flex items-center justify-between w-full py-2 px-3 md:border-0 hover:text-primary text-default-800 md:p-0">
                                            <img className="w-8 h-8 me-2 rounded-full" src={avatar} alt={user.user_display_name} />
                                                {user.user_display_name}
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                            </svg>
                                        </button>
            
                                        <div className={`z-10 absolute top-12 z-20 min-w-[200px] rounded-lg border border-default-100 bg-white p-1.5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ${dropdown}`}>
                                            <ul className="flex flex-col gap-1">
                                                <li>
                                                    <NavLink
                                                        to="/my-account/dashboard"
                                                        className={({ isActive }) => (isActive ? 'active bg-default-100 ' : '') + 'flex items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700'}
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/my-account/orders"
                                                        className={({ isActive }) => (isActive ? 'active bg-default-100 ' : '') + 'flex items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700'}
                                                    >
                                                        Orders
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/my-account/downloads"
                                                        className={({ isActive }) => (isActive ? 'active bg-default-100 ' : '') + 'flex items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700'}
                                                    >
                                                        Downloads
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/my-account/edit-address"
                                                        className={({ isActive }) => (isActive ? 'active bg-default-100 ' : '') + 'flex items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700'}
                                                    >
                                                        Address
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/my-account/edit-account"
                                                        className={({ isActive }) => (isActive ? 'active bg-default-100 ' : '') + 'flex items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700'}
                                                    >
                                                        Account Details
                                                    </NavLink>
                                                </li>
                                            </ul>
                                            <button onClick={() => dispatch(logout())} className="w-full flex items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700">Log out</button>
                                        </div>
                                    </li>
                                ) 
                                : (<li>
                                    <NavLink
                                        to="/auth/login"
                                        className={({ isActive }) => (isActive ? 'active text-primary ' : '') + 'inline-flex items-center text-sm lg:text-base font-medium py-2 px-4 rounded-full hover:text-primary text-default-800'}
                                    >
                                        Login
                                    </NavLink>
                                    </li>)
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header