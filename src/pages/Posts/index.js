import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SkeletonLoader from './PostSkeletonLoader';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [featuredImage, setFeaturedImage] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/posts`)
            .then((res) => {
                setPosts(res.data);

                // Track the number of completed fetch requests for featured images
                let fetchCount = 0;
                const totalFetches = res.data.filter(post => post.featured_media).length;

                // Fetch featured images for each post
                res.data.forEach((post) => {
                    if (post.featured_media) {
                        axios.get(`${process.env.REACT_APP_API_ROOT}/media/${post.featured_media}`)
                            .then((mediaRes) => {
                                setFeaturedImage(prevState => ({
                                    ...prevState,
                                    [post.id]: mediaRes.data.source_url
                                }));

                                fetchCount++;
                                if (fetchCount === totalFetches) {
                                    setLoading(false);
                                }
                            })
                            .catch((mediaErr) => {
                                console.log(mediaErr);

                                fetchCount++;
                                if (fetchCount === totalFetches) {
                                    setLoading(false);
                                }
                            });
                    } else {
                        // If no featured media, increment the fetchCount
                        fetchCount++;
                        if (fetchCount === totalFetches) {
                            setLoading(false);
                        }
                    }
                });
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);


    return (
        <div className="App max-w-screen-2xl m-auto py-12 px-4">
            <div className="posts flex gap-4">
                {loading ? 
                    Array(3).fill().map((_, index) => ( 
                        <SkeletonLoader key={index} />
                    ))
                 : posts.map((post, index) => (
                        <div className="w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
                            <Link to={`/posts/${post.id}`}>
                                {featuredImage[post.id] && (
                                    <img className="rounded-t-lg w-full h-64 object-cover" src={featuredImage[post.id]} alt={post.title.rendered} />
                                )}
                            </Link>
                            <div className="p-5">
                                <Link to={`/posts/${post.id}`}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{post.title.rendered}</h5>
                                </Link>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-6" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                                <Link to={`/posts/${post.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Posts;