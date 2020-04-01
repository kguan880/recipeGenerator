const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


//lists all recipes
function getRecipes(db = connection){
    return db('recipes').select()
}

//adds recipe to database
function addRecipe(recipeName, recipeID, db = connection){
    return db('recipes')
    .insert({
        name: recipeName,
        id: recipeID
    })
}

module.exports ={
    getRecipes,
    addRecipe
}