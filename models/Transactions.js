const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    contextID: {type: String},
    inventoryID: {type: String},
    projectID: {type: String},
    transactionDate: {type: Date},
    transactionType: {type: String}, //inventory_purchase or project_revenue
    transactionQuantity: {type: Number},
    transactionUnitAmount: {type: Number},
    totalAmount: {type: Number}
})

const Transaction = mongoose.model("Transactions", TransactionSchema);

module.exports = Transaction;