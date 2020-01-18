const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    contextID: {type: String},
    created: {type: Date},
    projectData: {type: Object},
    billedAmount: {type: Number},
    revenueCollected: {type: Number}
})

const Bills = mongoose.model("Bills", BillSchema);

module.exports = Bills;