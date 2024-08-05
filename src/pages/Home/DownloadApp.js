import Mockup from '../../assets/images/download-app/mockup.png'
import Avatar from '../../assets/images/download-app/avatar.png'

const DownloadApp = () => {
    return(
        <section className="py-6 lg:py-16">
            <div className="max-w-screen-2xl m-auto">
                <div className="rounded-lg bg-primary/10">
                    <div className="grid items-center gap-6 lg:grid-cols-2">
                        <div className="relative h-full p-6 lg:p-20">
                            <span className="absolute end-16 top-1/3 rotate-45 text-xl">😃</span>
                            <span className="absolute end-0 top-1/2 rotate-45 text-xl">🔥</span>
                            <span className="absolute bottom-40 end-40 inline-flex h-2 w-2 items-center justify-center rounded-full bg-primary text-white"></span>
                            <div className="absolute bottom-4 end-2 hidden lg:-end-6 lg:block xl:bottom-10 xl:end-0">
                                <div className="rounded-full bg-default-50 p-2 shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 overflow-hidden rounded-full">
                                            <img src={Avatar} alt="avatar" />
                                        </div>
                                        <div>
                                            <h6 className="mb-1 text-base font-medium text-default-900">Richard Watson</h6>
                                            <p className="text-sm font-medium text-default-500">Food Courier</p>
                                        </div>
                                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="mb-6 inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm text-primary">Download App</span>
                            <h2 className="mb-6 max-w-sm text-3xl/relaxed font-semibold text-default-900">Get Started With Us Today!</h2>
                            <p className="mb-10 max-w-md text-base text-default-900">Discover food wherever and whenever and get your food delivered quickly.</p>
                            <button className="inline-flex rounded-full bg-primary px-10 py-4 font-medium text-white transition-all hover:bg-primary-500">Order Now</button>
                        </div>
                        <div className="relative px-20 pt-20">
                            <span className="absolute bottom-28 end-10 -rotate-45 text-3xl">🔥</span>
                            <span className="absolute bottom-10 end-20 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary text-white"></span>
                            <span className="absolute end-10 top-1/4 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-yellow-400 text-white"></span>
                            <span className="absolute end-1/4 top-12 -rotate-45 text-xl">😋</span>
                            <span className="absolute start-10 top-12 inline-flex h-2 w-2 items-center justify-center rounded-full bg-primary text-white"></span>
                            <img src={Mockup} className="max-h-full max-w-full" alt="mockup" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadApp