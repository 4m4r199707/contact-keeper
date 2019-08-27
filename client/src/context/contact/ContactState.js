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
                type: 'professional'
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

        ],

        current: null
    };

    const [ state, dispatch] = useReducer(contactReducer, initialState);

    //ADD contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact});
    };



    // Delete contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id});
    };
    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact});
    }

    //Clear Current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            clearCurrent,
            setCurrent
            
        }}
        >
            {props.children}
        </ContactContext.Provider>
    );

};


export default ContactState;