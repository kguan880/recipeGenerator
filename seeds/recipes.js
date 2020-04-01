exports.seed = function (knex, Promise) {
    return knex('recipes').insert([
        {id: 1, name: 'Curry Udon'},
        {id: 2, name: 'Spaghetti with Bacon'}
    ])
}