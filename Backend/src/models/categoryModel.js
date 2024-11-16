const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    name: String,
    menuId: Number
});
const category = mongoose.model('category', categorySchema);
module.exports = category;