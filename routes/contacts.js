const express = require('express');

const router = express.Router();

// @route Get api/contacts
//@desc    get all users contacts
//@access Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});


// @route POST api/contacts
//@desc    add new contact
//@access Private
router.post('/', (req, res) => {
    res.send('ADD contacts');
});


// @route PUT api/contacts/:id         adding new element :id placeholder
//@desc    Update contacts
//@access Private
router.put('/:id', (req, res) => {          /// refers to current dir i.es /routes/contacts/:id
    res.send('Update contact');
});



// @route DELETE api/contacts/:id
//@desc    delete contact
//@access Private
router.delete('/:id', (req, res) => {          /// refers to current dir i.es /routes/contacts/:id
    res.send('delete contacts');
});


module.exports = router;