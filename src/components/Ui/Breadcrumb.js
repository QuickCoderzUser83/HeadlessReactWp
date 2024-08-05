import { useLocation } from "react-router-dom"

const Breadcrumb = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const breadcrumb = pathname.startsWith('/') ? pathname.slice(1) : pathname;

    return(
        <section className="hidden h-14 items-center bg-default-400/10 lg:flex">
            <div className="max-w-screen-2xl w-full m-auto px-4">
                <div className="flex items-center">
                    <ol aria-label="Breadcrumb" className="flex min-w-0 items-center gap-2 whitespace-nowrap">
                        <li className="text-sm">
                            <a className="flex items-center gap-2 align-middle leading-none text-default-800 transition-all hover:text-primary-500" href="/yum_r/home">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>Home
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                        </li>
                        <li aria-current="page" className="cursor-pointer truncate text-sm font-medium text-primary hover:text-primary-500 capitalize">{breadcrumb}</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb