import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="border-t border-default-200">
                <div className="max-w-screen-2xl m-auto">
                    <div className="grid items-center gap-6 py-6 lg:grid-cols-3 lg:py-10">
                        <div className="lg:col-span-2">
                            <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                                <div className="flex flex-col gap-3">
                                    <h5 className="mb-3 font-semibold text-default-950">About</h5>
                                    <div className="text-default-600">
                                        <Link to="/">About Us</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">Features</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">News</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">Careers</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">Services</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="mb-3 font-semibold text-default-950">Company</h5>
                                    <div className="text-default-600">
                                        <Link to="/">Our Team</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">Partner with Us</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">FAQs</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">Blog</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="mb-3 font-semibold text-default-950">Support</h5>
                                    <div className="text-default-600">
                                        <Link to="/">About</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">Support Center</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">Feedback</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">Contact Us</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="/">Accessibility</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="mb-3 font-semibold text-default-950">Get in touch</h5>
                                    <div className="text-default-600">
                                        <Link to="tel:+1234567891012">(+123) 456 789 123</Link>
                                    </div>
                                    <div className="text-default-600">
                                        <Link to="mailto:example@mail.com">example@mail.com</Link>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link className="cursor-pointer" to="/">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-default-600 transition-all hover:text-primary" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </Link>
                                        <Link className="cursor-pointer" to="/">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-default-600 transition-all hover:text-primary" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                            </svg>
                                        </Link>
                                        <Link className="cursor-pointer" to="/">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-default-600 transition-all hover:text-primary" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                            </svg>
                                        </Link>
                                        <Link className="cursor-pointer" to="/">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-default-600 transition-all hover:text-primary" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex flex-col gap-3">
                                <div className="rounded-lg bg-primary/10">
                                    <div className="p-8">
                                        <form className="mb-6 space-y-2">
                                            <label htmlFor="subscribeEmail" className="mb-4 text-lg font-medium text-default-950 inline-block">Subscribe</label>
                                            <div className="flex rounded-md shadow-sm">
                                                <div className="relative max-w-full">
                                                    <div className="relative max-w-full">
                                                        <input placeholder="Email address" name="email" id="email" className="form-input rounded-lg border border-default-200 px-4 py-2.5 ps-10 pe-14 w-full form-input bg-white" />
                                                        <span className="absolute start-3 top-1/2 -translate-y-1/2">
                                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                                        </svg>
                                                        </span>
                                                        <button type="submit" className="absolute end-0 top-1/2 inline-flex h-[2.875rem] w-[2.875rem] flex-shrink-0 -translate-y-1/2 items-center justify-center rounded-e-md border border-transparent bg-primary text-sm font-semibold text-white transition-all hover:bg-primary-500">
                                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 12h14"></path>
                                                                <path d="m12 5 7 7-7 7"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="mb-6 text-sm text-default-500">Subscribe to Yup's email notifications to get notified for all money saving and tummy filling offers. Enter your email address to get started </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* copyright section */}
            <div className="absolute w-full border-t border-default-200 p-6 hide-in-print lg:ps-8">
                <div className="max-w-screen-2xl m-auto">
                    <div className="grid items-center gap-6 lg:grid-cols-2">
                        <p className="text-default-600">
                            Designed, crafted and coded with <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="inline fill-red-500 text-red-500" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg> by Deepak Jha
                        </p>
                        <div className="flex justify-end gap-6">
                            <Link className="font-medium text-default-500" to="/">Terms</Link>
                            <Link className="font-medium text-default-500" to="/">Privacy</Link>
                            <Link className="font-medium text-default-500" to="/">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer