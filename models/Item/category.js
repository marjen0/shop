const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nurodykite kategorijos pavadinimą']
    },
    nameAPI: {
        type:String,
        require: [true, 'Nurodykite kategorijos pavadinimą. Skirti "-", nenaudoti lietuviškų simbolių']
    }
});

const ItemCategory = mongoose.model('ItemCategory', categorySchema);

module.exports = ItemCategory;