const express = require('express')
const db = require('../db')
const router = express.Router()



router.get('/', (req,res)=>{

    const template = './layouts/main'
    
    db.getRecipes()
        .then(recipes =>{
            console.log(recipes)
            res.render(template, {'recipes':recipes})
        })
})

router.post('/', (req, res)=>{
    db.addRecipe(req.body.name, req.body.id)
        .then(()=>{
            console.log('recipe added')
            res.redirect('back')
        })
})

module.exports = router