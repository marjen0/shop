const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Būtina įvestil el. pašto adresą'],
        maxlength: 255,
        unique: [true, "El. pašto adresas jau naudojamas"]
    },
    password: {
        type: String,
        minlength: [6, "Slaptažodį turi sudaryti bent 6 simboliai"],
        required: [true, 'Būtina įvasti slaptažodį' ]
    },
    registerDate: {
        type: Date,
        default: new Date(),
    },
    boughtItems: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;