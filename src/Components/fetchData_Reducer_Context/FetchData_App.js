import React from 'react'
import FetchData from './FetchData'
import FetchData_reducer from './FetchData_reducer'
import Fetch_LocalStrorage_reducer from './Fetch_LocalStrorage_reducer'

function FetchData_App() {
    return (
        <div>
            <Fetch_LocalStrorage_reducer />
        </div>
    )
}

export default FetchData_App
