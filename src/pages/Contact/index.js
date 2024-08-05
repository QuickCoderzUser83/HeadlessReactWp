import Breadcrumb from "../../components/Ui/Breadcrumb"
import ContactImg from '../../assets/images/contact/contact.png'

const Contact = () => {
    return (
        <>
            <Breadcrumb />
            <section className="py-6 lg:py-16">
                <div className="max-w-screen-2xl w-full m-auto px-4">
                    <div className="grid gap-10 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <h1 className="mb-2 text-2xl font-semibold text-default-800">Contact Information</h1>
                            <p className="mb-8 max-w-xl text-sm text-default-600">Loremum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis.</p>
                            <div className="flex items-center justify-center">
                                <img src={ContactImg} className="h-full max-w-full" alt="contact" />
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <form>
                                <div className="grid gap-6 lg:grid-cols-2">
                                    <div className="relative max-w-full">
                                        <label className="mb-2 block text-sm font-medium text-default-900" htmlFor="fName">First Name</label>
                                        <div className="relative max-w-full">
                                            <input type="text" placeholder="First Name" name="fName" id="fName" className="form-input rounded-lg border border-default-200 px-4 py-2.5 w-full" />
                                        </div>
                                    </div>
                                    <div className="relative max-w-full">
                                        <label className="mb-2 block text-sm font-medium text-default-900" htmlFor="lName">Last Name</label>
                                        <div className="relative max-w-full">
                                            <input type="text" placeholder="Last Name" name="lName" id="lName" className="form-input rounded-lg border border-default-200 px-4 py-2.5 w-full" />
                                        </div>
                                    </div>
                                    <div className="lg:col-span-2 relative max-w-full">
                                        <label className="mb-2 block text-sm font-medium text-default-900" htmlFor="email">E-mail</label>
                                        <div className="relative max-w-full">
                                            <input type="email" placeholder="Enter Your Email" name="email" id="email" className="form-input rounded-lg border border-default-200 px-4 py-2.5 w-full" />
                                        </div>
                                    </div>
                                    <div className="lg:col-span-2 relative w-full">
                                        <label className="mb-2 block text-sm font-medium text-default-900" htmlFor="message">Message</label>
                                        <div className="relative w-full">
                                            <textarea placeholder="Enter Your Message" name="message" rows="5" className="form-textarea rounded-lg border border-default-200 px-4 py-2.5 bg-transparent w-full"></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-3 text-base font-medium capitalize text-white transition-all hover:bg-primary-500">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 lg:py-16">
                <div className="max-w-screen-2xl w-full m-auto px-4">
                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-lg bg-default-400/10">
                            <div className="p-8">
                                <a className="mb-6 flex items-center gap-4" href="tel:+7867862387444">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="fill-white text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </span>
                                    <h4 className="text-lg font-medium text-default-950">Call Us</h4>
                                </a>
                                <a className="mb-2 text-sm text-default-500 block" href="tel:+1234XXXX123">+1 234 XXXX 123</a>
                                <a className="text-sm text-default-500 block" href="tel:+1234XXXX567">+1 234 XXXX 567</a>
                            </div>
                        </div>
                        <div className="rounded-lg bg-default-400/10">
                            <div className="p-8">
                                <a className="mb-6 flex items-center gap-4" href="mailto:demomail123@mail.com">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="fill-white text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    </span>
                                    <h4 className="text-lg font-medium text-default-950">Email</h4>
                                </a>
                                <a className="mb-2 text-sm text-default-500 block" href="mailto:support@coderthemes.com">support@coderthemes.com</a>
                                <a className="text-sm text-default-500 block" href="mailto:helpdemo123@mail.com">helpdemo123@mail.com</a>
                            </div>
                        </div>
                        <div className="rounded-lg bg-default-400/10">
                            <div className="p-8">
                                <div className="mb-6 flex items-center gap-4">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="fill-white text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </span>
                                    <h4 className="text-lg font-medium text-default-950">Address</h4>
                                </div>
                                <p className="mb-2 text-sm text-default-500">37125 Maya Estate Dr, Victoria Road,</p>
                                <p className="text-sm text-default-500">Warsaw, Poland - 234834</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default Contact