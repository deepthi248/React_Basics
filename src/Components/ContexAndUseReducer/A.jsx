import React, { useContext } from 'react'
import { CounterContext } from './App_ContextAndReducer'


function A() {
    const useCounterContext = useContext(CounterContext)
    return (
        <div>
            In component A
            <button onClick={() => useCounterContext.counterDispatch('increment')}>Increment</button>
            <button onClick={() => useCounterContext.counterDispatch('decrement')}>Decrement</button>
            <button onClick={() => useCounterContext.counterDispatch('reset')}>Reset</button>

        </div>
    )
}

export default A
