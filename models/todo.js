const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: String,
    done: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: new Date()
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);