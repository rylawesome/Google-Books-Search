const db = require("../models");

//Copied from Activity 5 Solved
module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
    },
    findById: function(req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
    },
    create: function(req, res) {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
    },
    update: function(req, res) {
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
    },
    remove: function(req,res) {
        db.Book
            .findById({ _id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
    }
};