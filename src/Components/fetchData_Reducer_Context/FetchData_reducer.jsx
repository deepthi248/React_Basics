import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const intialState = {
    loading: true,
    error: '',
    post: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Fetch_sucess': {
            return ({ ...state, loading: false, post: action.payload })

        }
        case 'Fetch_failure': {
            return ({ ...state, loading: false, post: '', error: 'something went wrong!!' })
        }
        default:
            return state
    }
}

function FetchData_reducer() {
    const [new_state, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(
                Response => dispatch({ type: 'Fetch_sucess', payload: Response.data })
            )
            .catch(
                error => dispatch({ type: 'Fetch_failure' })
            )
    }, [])
    return (
        <div>

            {new_state.loading ? 'Loading' : new_state.post.title}
            {new_state.error ? new_state.error : null}


        </div>
    )
}

export default FetchData_reducer
