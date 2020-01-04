const db = require("../models");

module.exports = {
    createAccount: function (req, res) {
        db.Accounts
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    login: function (req, res) {
        db.Accounts
            .find({ email: req.body.loginEmail, password: req.body.loginPassword })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //START: Customer controllers...
    getCustomers: function (req, res) {
        db.Customers
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createCustomer: function (req, res) {
        console.log("Create customer controller called...");
        db.Customers
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    cancelCustomer: function (req, res) {
        console.log("Cancel customer controller called...");
        console.log(req.body);
        db.Customers
            .update({_id: req.body.customerID},{cancelled: req.body.cancelledDate})
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    //END: ...Customer controllers
    createInventoryItem: function (req, res) {
        console.log("Create inventory controller called...");
        console.log(req.body);
        db.Inventory
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    }
    /*
    deleteBook: function (req, res) {
        db.SavedBooks
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    */
};