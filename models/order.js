const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./Item/item').schema;

const orderSchema = new Schema({
    items: [itemSchema],
    totalPrice: {
        type: Number,
        required: [true, 'Užsakymas turi turėti kainą']
    },
    discount: {
        type: Number,
        default: 0
    },
    date: {
        type: Date, 
        default: new Date()
    },
    user: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    }

});
orderSchema.statics.getAllOrders = async () => {
    return await Order.find();
}
orderSchema.statics.getOrdersOfUser = async (userID) => {
    try {
        return await Order.find({user: userID}).sort('date')
    } catch (error) {
        throw error;
    }
    
}

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;