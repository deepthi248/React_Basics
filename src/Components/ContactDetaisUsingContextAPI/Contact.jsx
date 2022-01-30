import React from 'react';
import { useContext } from 'react/cjs/react.production.min';
import { contactContext } from './Context';

function Contact(contact) {
    const { dispatchEventHandler } = useContext(contactContext)

    const deleteHandler = () => {
        dispatchEventHandler('DELETE_CONTACT', { contactId: contact.id });
    }
    return <div>
        <p>FirstName:{contact.firstName}</p>
        <p>LastName:{contact.lastName}</p>
        <p>ConatctNumebr:{contact.phoneNumber}</p>
        <p>E-mail:{contact.email}</p>
        <p>Age:{contact.Age}</p>
        <br>
        </br>
        <button onClick={deleteHandler} >Delete</button>
    </div>;
}

export default Contact;
