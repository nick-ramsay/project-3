const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    contextID: {type: String},
    transactionDate: {type: Date},
    transactionType: {type: String}, //inventory_purchase or project_revenue
    amount: {type: String}
})

const Transaction = mongoose.model("Transactions", TransactionSchema);

module.exports = Transaction;