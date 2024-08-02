import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector} from 'react-redux';
import { login } from '../../../redux/AuthSlice';

import Logo from '../../../assets/images/header/foodie-logo.png'
import AuthBg from '../../../assets/images/login/auth-bg.png'
import BgShape from '../../../assets/images/login/bg-shape.png'
import Google from '../../../assets/images/login/google.svg'
import Facebook from '../../../assets/images/login/facebook.svg'


const Login = () => {

    const dispatch = useDispatch();
    const {user, isLoading, error} = useSelector((state) => state.auth);

    const formik = useFormik({

        // Initial values
        initialValues: {
            email: '',
            password: ''
        },

        // Validation Schema
        validationSchema: Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required().min(4),
        }),

        // On Submit
        onSubmit: (data) => {
            dispatch(login(data));
        }
        
    });

    return (
        <section class="bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10">
            <div class="relative flex items-center bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10 py-8 sm:py-16 md:h-screen md:py-36">
                <div class="max-w-screen-2xl m-auto px-4 w-full">
                    {isLoading && 'Loading....'}
                    {!isLoading && error ? <div>Error: {error}</div> : null}
                    {!isLoading && !user.token && 
                        <div class="flex items-center justify-center lg:max-w-lg">
                            <div class="flex h-full flex-col">
                                <div class="shrink">
                                    <div>
                                        <a class="flex items-center" href="/">
                                            <img width="156" height="48" src={Logo} alt="logo" class="flex h-14 w-auto mb-4" />
                                        </a>
                                    </div>
                                    <div class="py-10">
                                        <h1 class="mb-2 text-3xl font-semibold text-default-800">Login</h1>
                                        <p class="max-w-md text-sm text-default-500">Enter your credentials to access Yum.</p>
                                    </div>

                                    <form onSubmit={formik.handleSubmit}>
                                        <div class="mb-6 relative max-w-full">
                                            <label class="mb-2 block text-sm font-medium text-default-900" for="email">Email</label>
                                            <div class="relative max-w-full">
                                                <input 
                                                    type="email" 
                                                    placeholder="Enter your email" 
                                                    name="email" 
                                                    autocomplete="off"
                                                    id="email" 
                                                    class="form-input rounded-lg border border-default-200 px-4 py-2.5 w-full bg-white" 
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange} 
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-1 relative w-full">
                                            <label class="block text-sm font-medium text-default-900 mb-2" for="password">Password</label>
                                            <div class="flex w-full">
                                                <div class="relative w-full">
                                                    <input 
                                                        type="password"
                                                        placeholder="Enter your password"
                                                        name="password"
                                                        autocomplete="off" 
                                                        id="password"
                                                        class="form-input rounded-e-none rounded-s-lg border border-default-200 px-4 py-2.5 focus:border-primary w-full" 
                                                        value={formik.values.password}
                                                        onChange={formik.handleChange} 
                                                    />
                                                </div>
                                                <button class="password-toggle ms-[1px] inline-flex items-center justify-center rounded-e-lg border border-s-0 border-default-200 bg-white px-4 py-2.5" type="button">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-default-600" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <a class="float-right text-end text-sm text-default-600 underline" href="/yum_r/auth/forgot-password">Forgot Password?</a>
                                        <button type="submit" class="mt-5 w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500">Log In</button>
                                    </form>

                                    <div class="mt-6 flex flex-col justify-center gap-4">
                                        <div class="flex flex-col gap-2 rounded-lg border border-dashed border-primary">
                                            <div class="flex items-center justify-between gap-2 border-b border-dashed border-primary px-4 py-2">
                                                <div class="inline-flex items-center gap-2">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    <p class="text-base text-default-900">User</p>
                                                </div>
                                            </div>
                                            <p class="p-2 px-4">
                                                <span class="flex items-center gap-2 text-sm">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                                    </svg> 
                                                    deepakjha@gmail.com
                                                </span>
                                                <span class="mt-2 flex items-center gap-2 text-sm">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                                    </svg> 
                                                    #Deepak_jha123
                                                </span>
                                            </p>
                                        </div>
                                        
                                    </div>

                                    <div class="my-6 flex items-center justify-center gap-4">
                                        <img height="32" width="32" alt="social-login-google" src={Google} class="h-8 w-8" />
                                        <img height="32" width="32" alt="social-login-google" src={Facebook} class="h-8 w-8" />
                                    </div>

                                </div>

                                <div class="mt-16 flex grow items-end justify-center">
                                    <p class="mt-auto text-center text-default-950">Don’t have an account ? 
                                        <a class="ms-1 text-primary" href="/">
                                            <span class="font-medium">Register</span>
                                        </a>
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    }
                </div>

                <div>
                    <div class="absolute end-0 start-0 top-1/2 -z-10 w-full -translate-y-1/3">
                        <img width="1853" height="420" src={BgShape} alt="" class="flex w-full opacity-50" />
                    </div>
                    <div class="absolute end-0 top-0 -z-10 hidden h-5/6 xl:flex">
                        <img width="657" height="610" alt="" src={AuthBg} class="z-0 w-full" />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Login