import React, {useState, useEffect} from "react";
import './Post.css'

const BASE_URL = 'http://localhost:8000/'

function Post({ post }) {

    const [image_url, setImageUrl] = useState('')

    useEffect(() => {
        if (post.image_url_type == 'absolute') {
            setImageUrl(post.image_url)
    } else {
        setImageUrl(BASE_URL + post.image_url)
    }
    }, [])

    return (
        <div className='post'>
            <img
                className='post_image'
                src={image_url}
            />
        </div>
    )
}

export default Post