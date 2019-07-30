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
        default: this.initialCount
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'ItemCategory',
        required: [true, 'Pasirinkite kategoriją'] 
    }
});
itemSchema.pre('save', function (next) {
    this.leftCount = this.get('initialCount');
    next();
});
itemSchema.statics.bought = async (id, amount) => {
    try{
        const convertedAmount = Number(amount);
        const item = await Item.findOne({_id:id});
        item.purchasedCount = item.purchasedCount+convertedAmount;
        await item.save();
    } catch(err){
        throw err;
    }
}

const Item = mongoose.model('Item',itemSchema);

module.exports = Item;