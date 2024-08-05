
const SkeletonLoader = () => {
    return(
        <div className="w-1/3">
            <div className="rounded overflow-hidden shadow-lg animate-pulse duration-75">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-4">
                    <div className="pb-2">
                        <div className="h-2.5 bg-gray-300 mb-3 rounded-full"></div>
                        <div className="h-2.5 bg-gray-300 mb-4 rounded-full w-2/3"></div>
                    </div>
                    <div className="pb-1">
                        <div className="h-2 bg-gray-300 rounded-full mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded-full mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded-full mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded-full mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded-full mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded-full mb-2 w-2/3"></div>
                        <div className="mt-4 bg-gray-300 w-28 h-8 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoader