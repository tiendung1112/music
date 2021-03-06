//Tạo table category
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Category = new Schema({
    name : String,
    image : String,
    id : String,
    slug : { type: String, slug: 'name', unique: true},
},{
    timestamp : true,
});

module.exports = mongoose.model('Category', Category);