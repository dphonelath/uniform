const express = require('express');
const router = express.Router();
const knex = require('../db/connections');

// Get all route
router.get('/', (req, res) => {
    knex('tailors')
        .orderBy('id', 'asc')
        .then(tailor => {
            res.json({ tailor: tailor })
        })
});

// Get one route
router.get('/:id', (req, res, next) => {
    const id = req.params.id

    knex('tailors')
        .where('id', id)
        .then(tailors => {
            res.json({tailor: tailors})
        })
});

// Post

router.post('/', (req, res, next) => {
    const body = req.body

    knex('tailors')
        .insert(body)
        .returning('*')
        .then(tailors =>{
            res.json({tailors: tailors[0]})
    })
});

// Put
router.put(':/id', (req, res) => {
    const id = req.params.id
    const body = req.body

    knex('tailors')
        .where('id', id)
        .update(body)
        .returning('*')
        .then(updatedTailors => {
            res.json({ tailors: updatedTailors[0] })
        })
})

// Delete

router.delete('/:id', (req, res) =>{
    const id = req.params.id

    knex('tailors')
        .where('id', id)
        .delete()
        .returning('*')
        .then(deletedTailors => {
            res.json({ tailors: deletedTailors[0]})
        })
})

module.exports = router