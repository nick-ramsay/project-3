const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
    contextID: {type: String},
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: Number },
    email: { type: String },
    address: { type: String },
    address2: { type: String },
    city: { type: String },
    state: { type: String },
    postcode: { type: Number }
})

const Customers = mongoose.model("Customers", CustomersSchema);

module.exports = Customers;