const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {
        type:String,
        required:[true, 'Nurodykite prekės pavadinimą'],
        maxlength: 255,
    },
    price: {
        type: Number,
        required: [true, 'Nurodykite kainą'],
    },
    discount: {
        type: Number,
        default: 0
    },
    purchasedCount: {
        type: Number,
        default: 0
    },
    initialCount: {
        type: Number,
        required: [true, 'Nurodykite pradinį prekių kiekį']
    },
    leftCount: {
        type: Number,
        default: initialCount
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'ItemCategory' 
    }
});

const Item = mongoose.model('Item',itemSchema);

module.exports = Item;