const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    contextID: {type: String},
    itemName: {type: String},
    quantity: {type: Number}
})

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;