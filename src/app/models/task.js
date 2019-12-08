const mongoose = require('../../database');

const TaskSchema =  new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    project:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Project',
        require: true
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        require: true
    },

    completed: {
        type: Boolean,
        require: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;