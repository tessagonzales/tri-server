const knex = require('../db/knex')

module.exports = {

    index: (req, res) => {
        knex('users').then(results => {
            res.json(results)
        })
    },
    
    login: (req, res) => {
        
        knex('users').then(results => {
            res.json(results)
        })
    },

    create: (req, res) => {
        knex('users').insert({
            f_name: req.body.newUser.f_name,
            l_name: req.body.newUser.l_name,
            phone_num: req.body.newUser.phone_num,
            pw: req.body.newUser.pw
        }, "*").then(results => {
            res.json(results)
        })
    },

    remove: (req, res) => {
        knex('users').where('id', req.params.id).del().then(results => {
            res.json(results)
        })
    },

    update: (req, res) => {
        knex('users').where("id", req.params.id)
            .update({
                f_name: req.body.f_name,
                l_name: req.body.l_name,
                phone_num: req.body.phone_num,
                pw: req.body.pw
            }).returning('*').then(results => {
                res.json(results)
            })
    },

} // end of exports
