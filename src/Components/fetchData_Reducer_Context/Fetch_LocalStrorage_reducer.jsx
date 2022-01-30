import React, { useState, useEffect } from 'react'

function Fetch_LocalStrorage_reducer() {
    const [posts, setposts] = useState([])
    useEffect(() => {
        const data = fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setposts(data))
            .catch(error => console.log(console.log(error)))


    }, [])

    return (
        <div>
            {
                posts.map(post => {
                    console.log(post);
                    return (
                        <p>{post.title}</p>)
                })
            }
        </div>
    )
}

export default Fetch_LocalStrorage_reducer
