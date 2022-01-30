import react from "react";
import React from "react";
//Intial State
const initialState = {
    contacts: [
        { firstName: "deepthi", lastName: "sai", age: 25, phoneNumber: 7702734730, email: "abc@gmail.com" },
        { firstName: "abhinav", lastName: "V", age: 29, phoneNumber: 9678727987, email: "abhirjy@gmail.com" }
    ]
}

//cerate context takes initalstate - this hold the state 
export const contactContext = React.createContext(initialState);



