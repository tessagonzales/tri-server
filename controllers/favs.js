const knex = require('../db/knex')

module.exports = {

    index: (req, res) => {
        knex('favs').then(results => {
            res.json(results)
        })
    },

    create: (req, res) => {
        knex('favs').insert({
            name: req.body.newContact.name,
            phone_num: req.body.newContact.phone_num,
            user_id: req.body.newContact.user_id
        }, "*").then(results => {
            res.json(results)
        })
    },

    remove: (req, res) => {
        knex('favs').where('id', req.params.id).del().then(results => {
            res.json(results)
        })
    },

    update: (req, res) => {
        console.log(req.body)
        knex('favs').where("id", req.params.id)
            .update({
                name: req.body.updatedContact.name,
                phone_num: req.body.updatedContact.phone_num,
            }).returning('*').then(results => {
                res.json(results)
            })
    },


} //end export