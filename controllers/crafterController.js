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
            .find({}).sort({lastName: 1, firstName: 1})
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
    editCustomer: function (req, res) {
        console.log("Edit customer controller called...");
        console.log(req.body);
        db.Customers
            .updateOne({_id: req.body.customerID},{
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                postcode: req.body.postcode
            })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    cancelCustomer: function (req, res) {
        console.log("Cancel customer controller called...");
        console.log(req.body);
        db.Customers
            .updateOne({_id: req.body.customerID},{cancelled: req.body.cancelledDate})
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    reactivateCustomer: function (req, res) {
        console.log("Reactivate customer controller called...");
        console.log(req.body);
        db.Customers
            .updateOne({_id: req.body.customerID},{$unset: {cancelled:""}})
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