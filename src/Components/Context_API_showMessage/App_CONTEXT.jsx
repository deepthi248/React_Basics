import React from 'react'

function App_CONTEXT() {
    const [message, setMessage] = useState('');
    return (
        <div className="App">
            <input type="text"
                value={message}
                onChange={event => setMessage(event.target.value)} />
            <Provider value={message}>
                <D />
            </Provider>
            <B />
        </div >
    )
}

export default App_CONTEXT
