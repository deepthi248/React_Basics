import './App.css';
import React, { useState, useReducer } from 'react';
import A from './Components/ContexAndUseReducer/A';
import { consumer, Provider, provider, userContext } from './Components/Context_API/UserContext';
import D from './Components/Context_API/D';
import B from './Components/ContexAndUseReducer/B';
import Counter from './Components/useReducer/Counter';
import Counter_Object from './Components/useReducer/Counter_Object';
import C from './Components/ContexAndUseReducer/C';
import FetchData from './Components/fetchData_Reducer_Context/FetchData';

function App() {
  return (
    <FetchData />
  )
}

export default App;


/*

context_API

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
);

*/

/*
Use reducer
return (
    <div>
      <Counter_Object />
    </div>
  )
*/



