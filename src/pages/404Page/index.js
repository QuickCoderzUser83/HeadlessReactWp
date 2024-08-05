import Image from '../../assets/images/404/error404.png'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();

    return(
        <section className="py-10">
            <div className="max-w-screen-2xl w-full m-auto px-4">
                <div className="flex items-center justify-center">
                    <div>
                        <div className="mb-10 flex h-full w-full justify-center">
                            <img src={Image} width="450" height="450" alt="not-found-image" className="h-full max-w-full" />
                        </div>
                        <div className="max-w-xl text-center">
                            <h1 className="mb-4 text-5xl font-semibold text-default-800">Ooops...</h1>
                            <h3 className="mb-4 text-2xl font-medium text-default-800">It’s look like you’re lost...</h3>
                            <p className="mx-auto mb-8 max-w-xl text-base text-default-600">Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <button onClick={() => navigate(-1)} className="w-1/2 rounded-lg bg-primary px-6 py-3 text-base font-medium capitalize text-white transition-all hover:bg-primary-500 lg:w-2/6">Go Back</button>
                                <a className="relative inline-flex w-1/2 items-center justify-center rounded-lg border border-primary px-6 py-3 text-base font-medium capitalize text-primary transition-all hover:bg-primary hover:text-white lg:w-2/6" href="/">Go To home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageNotFound