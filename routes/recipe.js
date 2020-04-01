const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/:id', (req,res)=>{
    const template = 'recipeView'
    db.getRecipes()
    .then(recipes=>{
        console.log(recipes[req.params.id -1])
        res.render(template, recipes[req.params.id -1])
    })

})

module.exports = router