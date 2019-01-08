const express = require('express');
const router = express.Router();
const knex = require('../db/connections');

// Get all route
router.get('/', (req, res) => {
    knex('users')
        .orderBy('id', 'asc')
        .then(user => {
            res.json({ user:user })
        })
});

// Get one route

router.get('/:id', (req, res, next) => {
    const id = req.params.id

    knex('users')
        .where('id', id)
        .then(users => {
            res.json({user: users})
        })
});

// Post

router.post('/', (req, res, next) => {
    const body = req.body

    knex('users')
        .insert(body)
        .returning('*')
        .then(user =>{
            res.json({users: users[0]})
    })
});

// Put
router.put(':/id', (req, res) => {
    const id = req.params.id
    const body = req.body

    knex('users')
        .where('id', id)
        .update(body)
        .returning('*')
        .then(updatedUser => {
            res.json({ users:updatedUsers[0] })
        })
})

// Delete

router.delete('/:id', (req, res) =>{
    const id = req.params.id

    knex('users')
        .where('id', id)
        .delete()
        .returning('*')
        .then(deletedUser => {
            res.json({ users: deletedUsers[0]})
        })
})

module.exports = router