import React, { useState } from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { contactContext, contactProvider } from './Context';
function App_contactDCA() {

    const [contacts, setContacts] = useState([]);

    const dispatchEventHandler = (actionType, payload) => {
        switch (actionType) {
            case 'ADD_CONTACT':
                setContacts([...contacts, payload.newContact]);
                return;

            case 'DELETE_CONTACT':
                setContacts(contacts.filter(contact => contact.id != payload.contactId));
                return;

            default:
                return;
        }
    }
    return <div>
        <contactContext.Provider value={{ contacts, dispatchEventHandler }} >
            <AddContact />
            <ContactList />
        </contactContext.Provider>
    </div >;
}

export default App_contactDCA;
