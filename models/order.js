const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./Item/item').schema;

const orderSchema = new Schema({
    items: [itemSchema],
    price: {
        type: Number,
        required: [true, 'Užsakymas turi turėti kainą']
    },
    discount: {
        type: Number,
        default: 0
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;