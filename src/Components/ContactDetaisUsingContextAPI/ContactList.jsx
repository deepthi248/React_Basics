import React from 'react';
import { useContext } from 'react';
import Contact from './Contact';
import { contactContext } from './Context';


function ContactList() {
    const { contacts } = useContext(contactContext)
    return (
        <div>
            {contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
        </div>
    );
}

export default ContactList;
