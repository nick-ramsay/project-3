const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    contextID: {type: String},
    name: {type: String},
    status: {type: String},
    createdDate: {type: Date},
    customer: {type: String},
    hours: {type: Number}, //inventory_purchase or project_revenue
    hourlyRate: {type: Number},
    items: {type: Array},
    comments: {type: Array}
})

const Projects = mongoose.model("Projects", ProjectSchema);

module.exports = Projects;