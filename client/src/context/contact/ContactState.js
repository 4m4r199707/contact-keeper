import React, { useReducer } from 'react' ;
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id:1,
                name: 'Kamala',
                email: 'kamala@gmail.com',
                phone: '11111111',
                type: 'personal'
            },

            {
                id:2,
                name: 'charan',
                email: 'charana@gmail.com',
                phone: '23323445',
                type: 'personal'
            },

            {
                id:3,
                name: 'mahima',
                email: 'mahima@gmail.com',
                phone: '123546854',
                type: 'personal'
            },

        ]
    }

    const [ state, dispatch] = useReducer(contactReducer, initialState);

    //ADD contact

    // Delete contact

    // Set Current Contact

    //Clear Current contact

    // Update Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts
        }}
        >
            {props.children}
        </ContactContext.Provider>
    );

};


export default ContactState;