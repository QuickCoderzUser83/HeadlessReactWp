import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const PostSingle = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [featuredImage, setFeaturedImage] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/posts/${id}`)
        .then((res) => {
            console.log(res.data);
            setPost(res.data);

            // Fetch featured image if available
            if (res.data.featured_media) {
                axios.get(`${process.env.REACT_APP_API_ROOT}/media/${res.data.featured_media}`)
                    .then((mediaRes) => {
                        setFeaturedImage(mediaRes.data.source_url);
                    })
                    .catch((mediaErr) => {
                        console.log(mediaErr);
                    });
            }

        })
        .catch((err) => {
            console.log(err);
        })
    }, [id]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="post-wrapper max-w-screen-2xl m-auto py-6 px-4">
           {post ? (
                <>
                    <h5 className="text-5xl leading-tight font-bold tracking-tight text-gray-900">
                        {post.title.rendered}
                    </h5>
                    <div className="flex items-center gap-x-2 my-3">
                        <svg className="w-4 h-4 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                        </svg>
                        <span className="text-zinc-500 text-lg">{formatDate(post.date)}</span>
                    </div>
                    {featuredImage && <img className="py-4 rounded-[40px] m-auto" src={featuredImage} alt={post.title.rendered} />}
                    <div className="font-normal text-gray-700" dangerouslySetInnerHTML={{__html:post.content.rendered}} />
                </>
            ) : (<p>Loading...</p>)}
        </div>
    )
}

export default PostSingle