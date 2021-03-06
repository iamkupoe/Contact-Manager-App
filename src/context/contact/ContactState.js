import React, { useReducer } from 'react';
import { v4 as uuid }  from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { 
    ADD_CONTACT, 
    DELETE_CONTACT, 
    SET_CURRENT, 
    CLEAR_CURRENT, 
    UPDATE_CONTACT 
     } from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
          {
              id: 1,
              name: 'John Bull',
              email: 'johnb@gmail.com',
              phone: '0577800456',
              type: 'personal'
          },
          {
            id: 2,
            name: 'Wakanda King',
            email: 'zagar@gmail.com',
            phone: '0204348420',
            type: 'personal'
        },
        {
            id: 3,
            name: 'Kwame Djan',
            email: 'djank@yahoo.com',
            phone: '0549924751',
            type: 'business'
        }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    //Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    //Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    //Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT});
    };

    //Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider value={{ 
            contacts: state.contacts,
            current: state.current,
            addContact, 
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact
        }}>
          { props.children }
        </ContactContext.Provider>
    );
};

export default ContactState;