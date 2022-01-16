import React from 'react'
import A from './A';
import B from './B';
import C from './C';
import { useState, useReducer } from 'react';

// Step 2 : Create context
export const CounterContext = React.createContext()


const intialState = 0;
const reducer = (currState, action) => {
    switch (action) {
        case 'increment':
            return currState + 1;
        case 'decrement':
            return currState - 1;
        case 'reset':
            return intialState
    }
}

function App_ContextAndReducer() {
    const [newState, dispatch] = useReducer(reducer, intialState)
    return (
        < CounterContext.Provider value={{ counter: newState, counterDispatch: dispatch }}>
            <p>{newState}</p>
            <A />
            <B />
            <C />
        </CounterContext.Provider >)
}

export default App_ContextAndReducer






