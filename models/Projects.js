const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    contextID: {type: String},
    name: {type: String},
    status: {type: String},
    customer: {type: String},
    createdDate: {type: Date},
    completedDate: {type: Date},
    hours: {type: Number},
    hourlyRate: {type: Number},
    items: {type: Array},
    comments: {type: Array},
    billID: {type: String}
})

const Projects = mongoose.model("Projects", ProjectSchema);

module.exports = Projects;