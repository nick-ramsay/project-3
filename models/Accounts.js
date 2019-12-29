const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Accounts = new Schema({
    businessName: { type: String },
    ownerName: { type: String },
    phone: { type: Number },
    email: { type: String },
    password: { type: String },
    address: { type: String },
    address2: { type: String },
    city: { type: String },
    state: { type: String },
    postcode: { type: Number },
    hourlyRate: { type: Number },
    specialties: {  type: Array }
})

const Accounts = mongoose.model("Accounts", Accounts);

module.exports = Accounts;