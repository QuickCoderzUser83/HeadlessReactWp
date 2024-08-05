import Banner from '../../assets/images/combo-offer/banner.png'
import Offer from '../../assets/images/combo-offer/50-percent-off.svg'


const SpecialComboOffer = () => {
    return (
        <section className="relative bg-cover bg-no-repeat py-10 lg:py-28" style={{backgroundImage: `url(${Banner})` }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="max-w-screen-2xl m-auto">
                <div className="relative w-full lg:w-1/2">

                    <h4 className="mb-6 font-handrawn text-2xl text-yellow-500">Special Combo Offer</h4>
                    <h2 className="mb-8 text-4xl font-semibold text-white">We make best Food in your town</h2>
                    <p className="mb-10 max-w-2xl text-base text-white/75">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    
                    <div className="inline-flex flex-wrap items-center justify-center gap-4">
                        <button className="rounded-full bg-primary px-10 py-4 font-medium text-white transition-all hover:bg-primary-500">Fill My Tummy</button>
                        <h4 className="text-2xl font-medium text-yellow-400">$23.47 <span className="text-lg text-white/75 line-through">$44.99</span></h4>
                    </div>

                    <div className="absolute bottom-10 end-0 lg:-bottom-16">
                        <img src={Offer} className="w-20 lg:w-auto" alt="offer" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SpecialComboOffer