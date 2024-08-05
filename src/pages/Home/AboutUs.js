import Pizza from '../../assets/images/about/pizaa.png'
import FastFood from '../../assets/images/about/fast-food.png'
import HealthyFood from '../../assets/images/about/healthy-food.png'
import FastDelivery from '../../assets/images/about/fast-delivery.png'
import FounderAvatar from '../../assets/images/about/founder-avatar.png'

const AboutUs = () => {
    return(
        <section className="py-6 lg:py-16">
            <div className="max-w-screen-2xl m-auto py-6 px-4">
                <div className="grid items-start gap-10 lg:grid-cols-2">

                    <div className="image-col">
                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#f7f8f9]">
                            <img src={Pizza} alt="about-us-pizza" className="h-full w-full object-cover" />
                        </div>
                    </div>

                    <div className="content-col">
                        <span className="mb-6 inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm text-primary">About Us</span>
                        <h2 className="mb-6 max-w-xl text-3xl font-semibold text-default-900">Where quality food meet Excellent services.</h2>
                        <p className="mb-16 max-w-2xl font-medium text-default-500 xl:mb-20">It’s the perfect dining experience where every dish is crafted with fresh, high-quality ingredients and served by friendly staff who go.</p>
                        
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            <div className="rounded-md border border-[#f1f5f9] bg-transparent shadow-lg transition-all duration-200 hover:border-[#f58220]">
                                <div className="p-6">
                                    <div className="mb-6">
                                        <img src={FastFood} width="48" height="48" alt="service-img" />
                                    </div>
                                    <h3 className="mb-6 text-xl font-medium text-default-900">Fast Foods</h3>
                                    <p className="text-base text-default-500">Healthy Foods are nutrient-Dense Foods</p>
                                </div>
                            </div>

                            <div className="rounded-md border border-[#f1f5f9] bg-transparent shadow-lg transition-all duration-200 hover:border-[#f58220]">
                                <div className="p-6">
                                    <div className="mb-6">
                                        <img src={HealthyFood} width="48" height="48" alt="service-img" />
                                    </div>
                                    <h3 className="mb-6 text-xl font-medium text-default-900">Healthy Foods</h3>
                                    <p className="text-base text-default-500">Healthy Foods are nutrient-Dense Foods</p>
                                </div>
                            </div>

                            <div className="rounded-md border border-[#f1f5f9] bg-transparent shadow-lg transition-all duration-200 hover:border-[#f58220]">
                                <div className="p-6">
                                    <div className="mb-6">
                                        <img src={FastDelivery} width="48" height="48" alt="service-img" />
                                    </div>
                                    <h3 className="mb-6 text-xl font-medium text-default-900">Fast Delivery</h3>
                                    <p className="text-base text-default-500">Healthy Foods are nutrient-Dense Foods</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                            <div className="flex items-center gap-2">
                                <img src={FounderAvatar} height="48" width="48" className="h-12 w-12 rounded-full" alt="avatar" />
                                <div>
                                    <h6 className="text-base font-medium text-default-900">Marley Culhane</h6>
                                    <p className="text-sm font-medium text-default-500">Founder CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutUs