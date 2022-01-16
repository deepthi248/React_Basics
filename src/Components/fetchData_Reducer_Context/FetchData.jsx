import axios from 'axios';
import React, { useState, useEffect } from 'react'


function FetchData() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [posts, setPosts] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setError('')
                setPosts(response.data)
            })
            .catch(error => {
                setLoading(false)
                setError('something went wrong!!')
                setPosts({})
            })

    }, [])
    return (
        <div>
            {loading ? 'Loading' : posts.title}
            {error ? error : null}
        </div>
    )
}

export default FetchData
