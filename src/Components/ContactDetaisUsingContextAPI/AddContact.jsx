import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.production.min';
import { contactContext } from './Context';

function AddContact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const { dispatchEventHandler } = useContext(contactContext);

    console.log(useContext(contactContext));
    const handleAddConatct = () => {
        const contact = {
            id: Math.random(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: setAge,
            phoneNumber: phoneNumber
        }
        dispatchEventHandler('ADD_CONTACT', { newContact: contact });
    }
    return <div>
        <input type="text" value={firstName} onChange={event => setFirstName(event.target.value)} />
        <input type="text" value={lastName} onChange={event => setLastName(event.target.value)} />
        <input type="tel" value={phoneNumber} onChange={event => setphoneNumber(event.target.value)} />
        <input type="number" value={age} onChange={event => setAge(event.target.value)} />
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />

        {/* //button on click should dispatcg an event */}
        <button onClick={handleAddConatct} >AddContact</button>
    </div>;
}

export default AddContact;
