const express = require('express')
const hbs = require('express-handlebars')

const mainRoute = require('./routes/main')
const recipeRoute = require('./routes/recipe')
const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', mainRoute)
server.use('/recipe', recipeRoute)

module.exports = server