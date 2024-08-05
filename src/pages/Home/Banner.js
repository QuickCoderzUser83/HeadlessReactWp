import CircleBg from '../../assets/images/banner/circle-bg.png'
import Customer1 from '../../assets/images/banner/customer-1.png'
import Customer2 from '../../assets/images/banner/customer-2.png'
import Customer3 from '../../assets/images/banner/customer-3.png'
import Burger from '../../assets/images/banner/burger.svg'
import Arrow from '../../assets/images/banner/arrow.png'
import Hero from '../../assets/images/banner/banner-hero.png'

const Banner = () => {
  return (
    <section className="relative py-6 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-l from-orange-600/20 via-orange-600/5 to-orange-600/0 blur-[60px]"></div>
        <div className="max-w-screen-2xl m-auto relative">
            <div className="grid items-center lg:grid-cols-2">

                <div className="px-10 py-20">
                    <div className="z-10 order-last flex items-center justify-center lg:order-first lg:justify-start">
                        <div className="text-center lg:text-start">
                            <span className="mb-8 inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm text-primary lg:mb-2">
                                #Special Food 🍇
                            </span>
                            <div className="mb-5 text-3xl font-bold capitalize text-default-950 md:text-5xl/snug lg:text-6xl/normal">
                                We Offer&nbsp;
                                <span className="relative inline-flex">
                                    <span>Delicious</span>
                                    <img src={CircleBg} width="282" height="90" alt="circle" className="absolute -z-10 hidden h-full w-full lg:flex"/>
                                </span>
                                <span className="text-primary">Food</span> And Quick Service
                            </div>
                            <p className="mx-auto mb-8 text-lg font-medium text-default-700 md:max-w-md lg:mx-0">Imagine you don’t need a diet because we provide healthy and delicious food for you!.</p>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-normal">
                                <button className="rounded-full bg-primary px-10 py-5 font-medium text-white transition-all hover:bg-primary-500">
                                    Order Now
                                </button>
                                <button className="flex items-center text-primary">
                                    <span className="me-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-yellow-400 border-e-transparent">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="fill-primary" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </span>
                                    <span className="font-semibold">How to Order</span>
                                </button>
                            </div>
                            <div className="mt-14">
                                <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                                    <div className="flex items-center -space-x-1">
                                        <div className="h-12 w-12">
                                            <img src={Customer1} alt="avatar" height="48" width="48" className="h-full w-full rounded-full object-cover object-center ring ring-default-50"/>
                                        </div>
                                        <div className="h-12 w-12">
                                            <img src={Customer2} alt="avatar" height="48" width="48" className="h-full w-full rounded-full object-cover object-center ring ring-default-50"/>
                                        </div>
                                        <div className="h-12 w-12">
                                            <img src={Customer3} alt="avatar" height="48" width="48" className="h-full w-full rounded-full object-cover object-center ring ring-default-50"/>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-base font-medium text-default-800">Our Happy Customers</h1>
                                        <p className="text-base text-default-900">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="inline fill-yellow-400 text-yellow-400" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                            </svg>
                                            4.7
                                            <span className="text-sm text-default-500">(13.7k Reviews)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-center py-20">
                    <span className="absolute start-0 top-0 -rotate-[40deg] text-3xl">🔥</span>
                    <span className="absolute end-[10%] top-0 inline-flex h-14 w-14 -rotate-12 items-center justify-center rounded-lg bg-yellow-400 text-white">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16.5 12"></polyline>
                        </svg>
                    </span>
                    <span className="absolute end-0 top-1/4 inline-flex h-4 w-4 -rotate-12 items-center justify-center rounded bg-primary text-white"></span>

                    <div className="absolute -end-0 bottom-1/4 hidden md:block lg:hidden xl:block 2xl:-end-24">
                        <img src={Arrow} alt="arrow" height="169" width="84" />
                        <div className="flex items-center gap-2 rounded-full bg-default-50 p-2 pe-6 shadow-lg">
                            <img src={Customer1} className="h-16 w-16 rounded-full" alt="avatar" />
                            <div>
                                <h6 className="text-sm font-medium text-default-900">Jakob Culhane</h6>
                                <p className="text-[10px] font-medium text-default-900">Healthy and Delicious Food</p>
                                <span className="inline-flex gap-0.5">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    <span className="absolute bottom-0 end-0 inline-flex h-4 w-4 -rotate-12 items-center justify-center rounded-full bg-primary text-white"></span>
                    <span className="absolute -bottom-16 end-1/3 text-3xl">🔥</span>
                    <div className="absolute bottom-0 start-0">
                        <div className="flex items-center gap-2 rounded-full bg-default-50 p-2 pe-6 shadow-lg">
                            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                                <img src={Burger} alt="burger" className="h-10 w-10 rounded-full" />
                            </span>
                            <div>
                                <h6 className="text-sm font-medium text-default-900">MCD Veg Burger</h6>
                                <span className="inline-flex gap-0.5">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="fill-yellow-400 text-yellow-400" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg>
                                </span>
                                <h6 className="text-sm font-medium text-default-900">
                                    <span className="text-sm text-primary">$</span> 8.14
                                </h6>
                            </div>
                        </div>
                    </div>
                    <img src={Hero} width="497" height="537" alt="hero" className="mx-auto" />
                </div>

            </div>
        </div>
    </section>
  );
};

export default Banner;
